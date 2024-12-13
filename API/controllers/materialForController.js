const { MaterialFor } = require("../models"); // Ensure the path to your models is correct

// Create a new MaterialFor
exports.create = async (req, res) => {
  try {
    const materialFor = await MaterialFor.create(req.body);
    res.status(201).json(materialFor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all MaterialFor records
exports.findAll = async (req, res) => {
  try {
    const materialFors = await MaterialFor.findAll();
    res.status(200).json(materialFors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific MaterialFor by ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const materialFor = await MaterialFor.findByPk(id);
    if (!materialFor) {
      return res.status(404).json({ error: "MaterialFor not found" });
    }
    res.status(200).json(materialFor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a MaterialFor by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await MaterialFor.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ error: "MaterialFor not found" });
    }
    const updatedMaterialFor = await MaterialFor.findByPk(id);
    res.status(200).json(updatedMaterialFor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a MaterialFor by ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await MaterialFor.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "MaterialFor not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
