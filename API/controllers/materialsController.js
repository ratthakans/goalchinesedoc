const { Materials } = require("../models"); // Ensure the path to your models is correct

// Create a new Material with optional photo and document upload
exports.create = async (req, res) => {
  try {
    const {
      title,
      description,
      categoryID,
      materialForID,
      materialTypeID,
      no,
      link,
      documentType,
    } = req.body;

    const photo = req.files?.photo ? req.files.photo[0].path : null; // Handle optional photo
    const document = req.files?.document ? req.files.document[0].path : null; // Handle optional document

    const material = await Materials.create({
      title,
      description,
      photo,
      document,
      categoryID,
      materialForID,
      materialTypeID,
      no,
      link,
      documentType,
    });

    res
      .status(201)
      .json({ message: "Material created successfully", material });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a Material by ID with optional photo and document upload
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      categoryID,
      materialForID,
      materialTypeID,
      no,
      link,
      documentType,
    } = req.body;

    const material = await Materials.findByPk(id);
    if (!material) {
      return res.status(404).json({ error: "Material not found" });
    }

    const photo = req.files?.photo ? req.files.photo[0].path : material.photo; // Use existing or new photo
    const document = req.files?.document
      ? req.files.document[0].path
      : material.document; // Use existing or new document

    material.title = title || material.title;
    material.description = description || material.description;
    material.photo = photo;
    material.document = document;
    material.categoryID = categoryID || material.categoryID;
    material.materialForID = materialForID || material.materialForID;
    material.materialTypeID = materialTypeID || material.materialTypeID;
    material.no = no || material.no;
    material.link = link || material.link;
    material.documentType = documentType || material.documentType;

    await material.save();

    res
      .status(200)
      .json({ message: "Material updated successfully", material });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Materials
exports.findAll = async (req, res) => {
  try {
    const materials = await Materials.findAll();
    res.status(200).json(materials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific Material by ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const material = await Materials.findByPk(id);
    if (!material) {
      return res.status(404).json({ error: "Material not found" });
    }
    res.status(200).json(material);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a Material by ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Materials.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "Material not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
