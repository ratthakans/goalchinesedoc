const { ClassType } = require("../models"); // Adjust the path to your models

// Create a new classType
exports.create = async (req, res) => {
  try {
    const newClassType = await ClassType.create(req.body);
    res.status(201).json(newClassType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all classTypees
exports.findAll = async (req, res) => {
  try {
    const classTypees = await ClassType.findAll();
    res.status(200).json(classTypees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single classType by ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const foundClassType = await ClassType.findByPk(id);
    if (!foundClassType) {
      return res.status(404).json({ error: "ClassType not found" });
    }
    res.status(200).json(foundClassType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a classType by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await ClassType.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ error: "ClassType not found" });
    }
    const updatedClassType = await ClassType.findByPk(id);
    res.status(200).json(updatedClassType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a classType by ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await ClassType.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "ClassType not found" });
    }
    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
