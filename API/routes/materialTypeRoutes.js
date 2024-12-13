const express = require("express");
const materialTypeController = require("../controllers/materialTypeController"); // Adjust path as needed

const router = express.Router();

router.post("/", materialTypeController.create); // Create a MaterialType
router.get("/", materialTypeController.findAll); // Get all MaterialTypes
router.get("/:id", materialTypeController.findOne); // Get a specific MaterialType
router.put("/:id", materialTypeController.update); // Update a specific MaterialType
router.delete("/:id", materialTypeController.delete); // Delete a specific MaterialType

module.exports = router;
