const { AccountMaterial } = require("../models"); // Ensure correct path to your models

// Create a new AccountMaterial record
exports.create = async (req, res) => {
  try {
    const { accountID, materialID } = req.body;

    if (!accountID || !materialID) {
      return res
        .status(400)
        .json({ error: "Both accountID and materialID are required" });
    }

    const accountMaterial = await AccountMaterial.create({
      accountID,
      materialID,
    });

    res
      .status(201)
      .json({
        message: "AccountMaterial created successfully",
        accountMaterial,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all AccountMaterial records
exports.findAll = async (req, res) => {
  try {
    const accountMaterials = await AccountMaterial.findAll();
    res.status(200).json(accountMaterials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific AccountMaterial by ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const accountMaterial = await AccountMaterial.findByPk(id);

    if (!accountMaterial) {
      return res.status(404).json({ error: "AccountMaterial not found" });
    }

    res.status(200).json(accountMaterial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an AccountMaterial by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { accountID, materialID } = req.body;

    const accountMaterial = await AccountMaterial.findByPk(id);

    if (!accountMaterial) {
      return res.status(404).json({ error: "AccountMaterial not found" });
    }

    if (accountID) accountMaterial.accountID = accountID;
    if (materialID) accountMaterial.materialID = materialID;

    await accountMaterial.save();

    res
      .status(200)
      .json({
        message: "AccountMaterial updated successfully",
        accountMaterial,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an AccountMaterial by ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await AccountMaterial.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "AccountMaterial not found" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
