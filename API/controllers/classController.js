const {
  sequelize,
  Class,
  ClassStudy,
  ClassStudent,
  Account,
  Attendance,
} = require("../models"); // Adjust the path to your models folder
const logger = require("../logger");

// Create a new Class
exports.create = async (req, res, next) => {
  const t = await sequelize.transaction();

  // Get field names from the model
  const validFieldsClass = Object.keys(Class.rawAttributes);

  // Filter req.body to include only valid fields
  const filteredDataClass = Object.fromEntries(
    Object.entries(req.body).filter(([key]) => validFieldsClass.includes(key))
  );

  try {
    const newClass = await Class.create(filteredDataClass, { transaction: t });

    await ClassStudy.bulkCreate(
      req.body.classStudy.map((item) => ({
        classID: newClass.id,
        day: item.value,
        startTime: item.startTime,
        endTime: item.endTime,
        note: item.note,
      })),
      { transaction: t }
    );

    await ClassStudent.bulkCreate(
      req.body.classStudent.map((accId) => ({
        accountID: accId,
        classID: newClass.id,
      })),
      { transaction: t }
    );

    res
      .status(201)
      .json({ message: "Class created successfully", data: newClass });

    await t.commit();

    logger.info(
      `Class created: ${newClass.id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    await t.rollback();
    next(error); // Pass the error to the centralized error handler
  }
};

// Retrieve all Classes
exports.findAll = async (req, res) => {
  try {
    const classes = await Class.findAll({
      include: [
        { model: ClassStudy, as: "classStudy" },
        { model: ClassStudent, as: "classStudent" },
        { model: Account, as: "teacher" },
        { model: Attendance, as: "attendance" },
      ],
    });
    res.status(200).json(classes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving classes", error: error.message });
  }
};

// Retrieve a single Class by ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const classData = await Class.findOne({
      where: { id },
      include: [
        { model: ClassStudy, as: "classStudy" },
        { model: ClassStudent, as: "classStudent" },
      ],
    });
    if (!classData) {
      return res.status(404).json({ message: "Class not found" });
    }
    res.status(200).json(classData);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving class", error: error.message });
  }
};

// Update a Class by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Class.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ message: "Class not found" });
    }

    // If the request body contains classStudy data
    if (req.body.classStudy) {
      await ClassStudy.destroy({ where: { classID: id } });
      await ClassStudy.bulkCreate(
        req.body.classStudy.map((item) => ({
          classID: id,
          day: item.value,
          startTime: item.startTime,
          endTime: item.endTime,
          note: item.note,
        }))
      );
    }

    // If the request body contains classStudent data
    if (req.body.classStudent) {
      await ClassStudent.destroy({ where: { classID: id } });
      await ClassStudent.bulkCreate(
        req.body.classStudent.map((accId) => ({
          accountID: accId,
          classID: id,
        }))
      );
    }
    res.status(200).json({ message: "Class updated successfully" });

    logger.info(`Class updated: ${id} by [${req.user.id}]${req.user.username}`);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating class", error: error.message });
  }
};

// Delete a Class by ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Class.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: "Class not found" });
    }
    res.status(204).send();

    logger.info(`Class deleted: ${id} by [${req.user.id}]${req.user.username}`);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting class", error: error.message });
  }
};
