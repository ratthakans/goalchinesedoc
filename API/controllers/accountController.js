const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { Account, User } = require("../models"); // Ensure correct path to your models
const { validationResult } = require("express-validator");

// Create a new Account
exports.create = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Get field names from the model
  const validFieldsAccount = Object.keys(Account.rawAttributes);

  // Filter req.body to include only valid fields
  const filteredDataAccount = Object.fromEntries(
    Object.entries(req.body).filter(([key]) => validFieldsAccount.includes(key))
  );

  try {
    // Step 1: Create the Account
    const account = await Account.create(filteredDataAccount);

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // Step 2: Insert into User using the generated accountID
    const user = await User.create({
      accountID: account.id,
      username: req.body.username,
      password: hashedPassword,
      role: req.body.role || "user",
      expireDate: req.body.expireDate,
    });

    res.status(201).json({
      message: "Account and User created successfully",
      account,
      user,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Accounts
exports.findAll = async (req, res) => {
  try {
    const accounts = await Account.findAll();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get an Account by ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await Account.findByPk(id);
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
      Object.entries(req.body).filter(([key]) => validFields.includes(key))
    );

    // Find the Account by ID
    const account = await Account.findByPk(id);
    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    }

    // Update the Account with the filtered data
    await account.update(filteredData);
    res
      .status(200)
      .json({ message: "Account updated successfully", updatedAccount });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an Account by ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Account.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "Account not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
