const { Currency } = require("../models"); // Ensure the path to your models is correct

// Create a new Currency
exports.create = async (req, res) => {
  try {
    const currency = await Currency.create(req.body);
    res.status(201).json(currency);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Currencies
exports.findAll = async (req, res) => {
  try {
    const currencies = await Currency.findAll();
    res.status(200).json(currencies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific Currency by ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const currency = await Currency.findByPk(id);
    if (!currency) {
      return res.status(404).json({ error: "Currency not found" });
    }
    res.status(200).json(currency);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Currency by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Currency.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ error: "Currency not found" });
    }
    const updatedCurrency = await Currency.findByPk(id);
    res.status(200).json(updatedCurrency);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Currency by ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Currency.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "Currency not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
