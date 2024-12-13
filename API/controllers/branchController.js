const { Branch } = require("../models"); // Import the Branch model

// Create a new branch
exports.create = async (req, res) => {
  try {
    const branch = await Branch.create(req.body);
    res.status(201).json(branch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all branches
exports.findAll = async (req, res) => {
  try {
    const branches = await Branch.findAll();
    res.status(200).json(branches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific branch by ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const branch = await Branch.findByPk(id);
    if (!branch) {
      return res.status(404).json({ error: "Branch not found" });
    }
    res.status(200).json(branch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a branch by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Branch.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ error: "Branch not found" });
    }
    const updatedBranch = await Branch.findByPk(id);
    res.status(200).json(updatedBranch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a branch by ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Branch.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "Branch not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
