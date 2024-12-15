const logger = require("../logger");
const { Currency } = require("../models"); // Ensure the path to your models is correct

// Create a new Currency
exports.create = async (req, res, next) => {
  try {
    const currency = await Currency.create(req.body);
    res.status(201).json(currency);

    logger.info(
      `Currency created: ${currency.id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    next(error); // Pass the error to the centralized error handler
  }
};

// Get all Currencies
exports.findAll = async (req, res, next) => {
  try {
    const currencies = await Currency.findAll();
    res.status(200).json(currencies);
  } catch (error) {
    next(error); // Pass the error to the centralized error handler
  }
};

// Get a specific Currency by ID
exports.findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const currency = await Currency.findByPk(id);
    if (!currency) {
      return res.status(404).json({ error: "Currency not found" });
    }
    res.status(200).json(currency);
  } catch (error) {
    next(error); // Pass the error to the centralized error handler
  }
};

// Update a Currency by ID
exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [updated] = await Currency.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ error: "Currency not found" });
    }
    const updatedCurrency = await Currency.findByPk(id);
    res.status(200).json(updatedCurrency);

    logger.info(
      `Currency updated: ${id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    next(error); // Pass the error to the centralized error handler
  }
};

// Delete a Currency by ID
exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Currency.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "Currency not found" });
    }
    res.status(204).send();

    logger.info(
      `Currency deleted: ${id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    next(error); // Pass the error to the centralized error handler
  }
};
