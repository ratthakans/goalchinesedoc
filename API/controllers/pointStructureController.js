const logger = require("../logger");
const { PointStructure } = require("../models");

// Create a PointStructure
exports.create = async (req, res, next) => {
  try {
    const pointStructure = await PointStructure.create(req.body);
    res
      .status(201)
      .json({ message: "PointStructure created successfully", pointStructure });

    logger.info(
      `PointStructure created: ${pointStructure.id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    next(error);
  }
};

// Get all PointStructures
exports.findAll = async (req, res) => {
  try {
    const pointStructures = await PointStructure.findAll();
    res.status(200).json(pointStructures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific PointStructure by ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const pointStructure = await PointStructure.findByPk(id);
    if (!pointStructure) {
      return res.status(404).json({ error: "PointStructure not found" });
    }
    res.status(200).json(pointStructure);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific PointStructure by Account ID
exports.findByAccountId = async (req, res) => {
  try {
    const { accountID } = req.params;

    const pointStructure = await PointStructure.findAll({
      where: { accountID },
    });
    if (!pointStructure) {
      return res.status(404).json({ error: "PointStructure not found" });
    }
    res.status(200).json(pointStructure);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a PointStructure by ID
exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [updated] = await PointStructure.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ error: "PointStructure not found" });
    }
    const updatedPointStructure = await PointStructure.findByPk(id);
    res.status(200).json({
      message: "PointStructure updated successfully",
      updatedPointStructure,
    });

    logger.info(
      `PointStructure updated: ${id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    next(error);
  }
};

// Delete a PointStructure by ID
exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await PointStructure.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "PointStructure not found" });
    }
    res.status(204).send();

    logger.info(
      `PointStructure deleted: ${id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    next(error);
  }
};
