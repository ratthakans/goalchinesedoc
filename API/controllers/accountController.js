const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const logger = require("../logger");
const { Op } = require("sequelize");

const {
  Account,
  User,
  Permission,
  sequelize,
  StudentType,
  TeacherType,
  ClassType,
  Branch,
  PointStructure,
} = require("../models"); // Ensure correct path to your models
const { validationResult } = require("express-validator");

// Create a new Account
exports.create = async (req, res, next) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: "Bad data in body",
      details: errors.array().map((e) => e.msg),
    });
  }

  // Get field names from the model
  const validFieldsAccount = Object.keys(Account.rawAttributes);

  // Filter req.body to include only valid fields
  const filteredDataAccount = Object.fromEntries(
    Object.entries(req.body).filter(([key]) => validFieldsAccount.includes(key))
  );

  const t = await sequelize.transaction();

  try {
    // Step 1: Create the Account
    const account = await Account.create(
      {
        ...filteredDataAccount,
        photo: req.file ? req.file.path : null,
      },
      { transaction: t }
    );

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // Step 2: Insert into User using the generated accountID
    const user = await User.create(
      {
        accountID: account.id,
        username: req.body.username,
        password: hashedPassword,
        role: req.body.role || "user",
        expireDate: req.body.expireDate,
      },
      { transaction: t }
    );

    if (req.body.permissions) {
      const bodyPermissions = JSON.parse(req.body.permissions);
      // Delete all permissions for the account
      // Insert new permissions
      await Permission.bulkCreate(
        bodyPermissions.map((p) => ({ ...p, accountID: account.id })),
        { transaction: t }
      );
    }

    logger.info(`Account created: ${account.id} ${req.body.username}`);

    res.status(201).json({
      message: "Account and User created successfully",
      account,
      user,
    });
    await t.commit();
  } catch (error) {
    await t.rollback();
    next(error); // Pass the error to the centralized error handler
  }
};

// Get all Accounts
exports.findAll = async (req, res) => {
  try {
    const { role, search } = req.query;
    let where = {};
    if (search) {
      where = {
        [Op.or]: [
          { "$Account.name$": { [Op.like]: `%${search}%` } },
          { "$user.username$": { [Op.like]: `%${search}%` } },
        ],
      };
    }

    const accounts = await Account.findAll({
      order: [
        ["status", "ASC"],
        ["createdAt", "DESC"],
      ],
      include: [
        {
          model: User,
          as: "user",
          attributes: { exclude: ["password"] },
          where: { role: role, ...where },
        },
        {
          model: StudentType,
          as: "studentType",
          attributes: ["name"],
        },
        {
          model: ClassType,
          as: "classType",
          attributes: ["name"],
        },
        {
          model: PointStructure,
          as: "pointStructure",
          order: [["updateDate", "DESC"]],
        },
      ],
    });
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get an Account by ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await Account.findByPk(id, {
      include: [
        {
          model: User,
          as: "user",
        },
        {
          model: Permission,
          as: "permissions",
          attributes: ["name", "view", "edit", "delete", "create"],
        },
        {
          model: StudentType,
          as: "studentType",
          attributes: ["name"],
        },
        {
          model: ClassType,
          as: "classType",
          attributes: ["name"],
        },
        {
          model: Branch,
          as: "branch",
          attributes: ["name"],
        },
        {
          model: TeacherType,
          as: "teacherType",
          attributes: ["id", "name"],
        },
        {
          model: PointStructure,
          as: "pointStructure",
          order: [["updateDate", "DESC"]],
        },
      ],
    });
    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    }
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an Account by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    // Get field names from the model
    const validFields = Object.keys(Account.rawAttributes);

    // Filter req.body to include only valid fields
    const filteredData = Object.fromEntries(
      Object.entries(req.body).filter(([key]) => {
        return validFields.includes(key);
      })
    );

    // Find the Account by ID
    const account = await Account.findByPk(id);
    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    }

    if (req.file) {
      filteredData.photo = req.file.path;
    }

    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      // Step 2: Insert into User using the generated accountID
      const user = await User.update(
        {
          password: hashedPassword,
        },
        {
          where: { accountID: id },
        }
      );
    }

    if (req.body.permissions) {
      const bodyPermissions = JSON.parse(req.body.permissions);
      // Delete all permissions for the account
      await Permission.destroy({ where: { accountID: id } });
      // Insert new permissions
      await Permission.bulkCreate(
        bodyPermissions.map((p) => ({ ...p, accountID: Number(id) }))
      );
    }

    // Update the Account with the filtered data
    await account.update({ ...filteredData });
    res.status(200).json({ message: "Account updated successfully", account });

    logger.info(
      `Account updated: ${id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    console.log("🚀 ~ exports.update= ~ error:", error);
    res.status(400).json({ error: error.message });
  }
};

// Delete an Account by ID
exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Account.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "Account not found" });
    }

    if (deleted.photo) {
      const imagePath = path.resolve(material.photo);
      // Remove the image file
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }

    await Permission.destroy({ where: { accountID: id } });
    await User.destroy({ where: { accountID: id } });

    res.status(200).json({ message: "Account deleted successfully" });

    logger.info(
      `Account deleted: ${id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    next(error); // Pass the error to the centralized error handler
  }
};
