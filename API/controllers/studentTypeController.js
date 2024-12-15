const logger = require("../logger");
const { StudentType } = require("../models"); // Ensure the path to your models is correct

// Create a new StudentType
exports.create = async (req, res) => {
  try {
    const studentType = await StudentType.create(req.body);
    res.status(201).json(studentType);

    logger.info(
      `StudentType created: ${studentType.id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all StudentTypes
exports.findAll = async (req, res) => {
  try {
    const studentTypes = await StudentType.findAll();
    res.status(200).json(studentTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific StudentType by ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const studentType = await StudentType.findByPk(id);
    if (!studentType) {
      return res.status(404).json({ error: "StudentType not found" });
    }
    res.status(200).json(studentType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a StudentType by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await StudentType.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ error: "StudentType not found" });
    }
    const updatedStudentType = await StudentType.findByPk(id);
    res.status(200).json(updatedStudentType);

    logger.info(
      `StudentType updated: ${id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a StudentType by ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await StudentType.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "StudentType not found" });
    }
    res.status(204).send();

    logger.info(
      `StudentType deleted: ${id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
