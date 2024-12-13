const { MaterialType } = require("../models"); // Ensure the path to your models is correct

// Create a new MaterialType
exports.create = async (req, res) => {
  try {
    const materialType = await MaterialType.create(req.body);
    res.status(201).json(materialType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all MaterialTypes
exports.findAll = async (req, res) => {
  try {
    const materialTypes = await MaterialType.findAll();
    res.status(200).json(materialTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific MaterialType by ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const materialType = await MaterialType.findByPk(id);
    if (!materialType) {
      return res.status(404).json({ error: "MaterialType not found" });
    }
    res.status(200).json(materialType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a MaterialType by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await MaterialType.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ error: "MaterialType not found" });
    }
    const updatedMaterialType = await MaterialType.findByPk(id);
    res.status(200).json(updatedMaterialType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a MaterialType by ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await MaterialType.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "MaterialType not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
