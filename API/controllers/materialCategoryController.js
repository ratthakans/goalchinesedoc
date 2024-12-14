const { MaterialCategory } = require("../models"); // Ensure the path to your models is correct

// Create a new MaterialCategory
exports.create = async (req, res, next) => {
  try {
    const materialCategory = await MaterialCategory.create(req.body);
    res.status(201).json(materialCategory);
  } catch (error) {
    next(error); // Pass the error to the centralized error handler
  }
};

// Get all MaterialCategories
exports.findAll = async (req, res, next) => {
  try {
    const materialCategories = await MaterialCategory.findAll();
    res.status(200).json(materialCategories);
  } catch (error) {
    next(error); // Pass the error to the centralized error handler
  }
};

// Get a specific MaterialCategory by ID
exports.findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const materialCategory = await MaterialCategory.findByPk(id);
    if (!materialCategory) {
      return res.status(404).json({ error: "MaterialCategory not found" });
    }
    res.status(200).json(materialCategory);
  } catch (error) {
    next(error); // Pass the error to the centralized error handler
  }
};

// Update a MaterialCategory by ID
exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [updated] = await MaterialCategory.update(req.body, {
      where: { id },
    });
    if (!updated) {
      return res.status(404).json({ error: "MaterialCategory not found" });
    }
    const updatedMaterialCategory = await MaterialCategory.findByPk(id);
    res.status(200).json(updatedMaterialCategory);
  } catch (error) {
    next(error); // Pass the error to the centralized error handler
  }
};

// Delete a MaterialCategory by ID
exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await MaterialCategory.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "MaterialCategory not found" });
    }
    res.status(204).send();
  } catch (error) {
    next(error); // Pass the error to the centralized error handler
  }
};
