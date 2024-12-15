const logger = require("../logger");
const { MyMaterial, Materials } = require("../models"); // Ensure correct path to your models

// Create a new MyMaterial record
exports.create = async (req, res) => {
  try {
    const { teacherId, materials } = req.body;

    if (!teacherId.length || !materials.length) {
      return res
        .status(400)
        .json({ error: "Both accountID and materialID are required" });
    }

    for (let i = 0; i < teacherId.length; i++) {
      for (let j = 0; j < materials.length; j++) {
        await MyMaterial.findOrCreate({
          where: {
            accountID: teacherId[i],
            materialID: materials[j],
          },
          defaults: {
            accountID: teacherId[i],
            materialID: materials[j],
          },
        });
      }
    }

    res.status(201).json({
      message: "MyMaterial created successfully",
    });

    logger.info(`MyMaterial created: by [${req.user.id}]${req.user.username}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all MyMaterial records
exports.findAll = async (req, res) => {
  try {
    const myMaterials = await MyMaterial.findAll();
    res.status(200).json(myMaterials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific MyMaterial by ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const myMaterial = await MyMaterial.findByPk(id);

    if (!myMaterial) {
      return res.status(404).json({ error: "MyMaterial not found" });
    }

    res.status(200).json(myMaterial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get all materials for a specific account by accountId
exports.getMaterialsByAccountId = async (req, res) => {
  try {
    const { accountID } = req.params;

    const myMaterials = await MyMaterial.findAll({
      where: { accountID },
      include: {
        model: Materials,
        as: "material",
        attributes: { exclude: ["updatedAt"] },
      },
    });

    if (!myMaterials.length) {
      return res.status(404).json({ error: "MyMaterial not found" });
    }

    res.status(200).json(myMaterials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an MyMaterial by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { accountID, materialID } = req.body;

    const myMaterial = await MyMaterial.findByPk(id);

    if (!myMaterial) {
      return res.status(404).json({ error: "MyMaterial not found" });
    }

    if (accountID) myMaterial.accountID = accountID;
    if (materialID) myMaterial.materialID = materialID;

    await myMaterial.save();

    res.status(200).json({
      message: "MyMaterial updated successfully",
      myMaterial,
    });

    logger.info(
      `MyMaterial updated: ${myMaterial.id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an MyMaterial by ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await MyMaterial.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "MyMaterial not found" });
    }

    res.status(204).send();

    logger.info(
      `MyMaterial deleted: ${id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
