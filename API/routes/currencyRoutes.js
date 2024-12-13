const express = require("express");
const currencyController = require("../controllers/currencyController"); // Adjust path as needed

const router = express.Router();

router.post("/", currencyController.create); // Create a Currency
router.get("/", currencyController.findAll); // Get all Currencies
router.get("/:id", currencyController.findOne); // Get a specific Currency
router.put("/:id", currencyController.update); // Update a specific Currency
router.delete("/:id", currencyController.delete); // Delete a specific Currency

module.exports = router;
