const logger = require("../logger");
const { FeeStructure } = require("../models");

// Create a FeeStructure
exports.create = async (req, res, next) => {
  try {
    const feeStructure = await FeeStructure.create(req.body);
    res
      .status(201)
      .json({ message: "FeeStructure created successfully", feeStructure });

    logger.info(
      `FeeStructure created: ${feeStructure.id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    next(error);
  }
};

// Get all FeeStructures
exports.findAll = async (req, res) => {
  try {
    const feeStructures = await FeeStructure.findAll();
    res.status(200).json(feeStructures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific FeeStructure by ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const feeStructure = await FeeStructure.findByPk(id);
    if (!feeStructure) {
      return res.status(404).json({ error: "FeeStructure not found" });
    }
    res.status(200).json(feeStructure);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific FeeStructure by Account ID
exports.findByAccountId = async (req, res) => {
  try {
    const { accountID } = req.params;

    const feeStructure = await FeeStructure.findAll({ where: { accountID } });
    if (!feeStructure) {
      return res.status(404).json({ error: "FeeStructure not found" });
    }
    res.status(200).json(feeStructure);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a FeeStructure by ID
exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [updated] = await FeeStructure.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ error: "FeeStructure not found" });
    }
    const updatedFeeStructure = await FeeStructure.findByPk(id);
    res.status(200).json({
      message: "FeeStructure updated successfully",
      updatedFeeStructure,
    });

    logger.info(
      `FeeStructure updated: ${id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    next(error);
  }
};

// Delete a FeeStructure by ID
exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await FeeStructure.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "FeeStructure not found" });
    }
    res.status(204).send();

    logger.info(
      `FeeStructure deleted: ${id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    next(error);
  }
};
