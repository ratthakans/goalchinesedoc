const express = require("express");
const materialCategoryController = require("../controllers/materialCategoryController"); // Adjust path as needed

const router = express.Router();

router.post("/", materialCategoryController.create); // Create a MaterialCategory
router.get("/", materialCategoryController.findAll); // Get all MaterialCategories
router.get("/:id", materialCategoryController.findOne); // Get a specific MaterialCategory
router.put("/:id", materialCategoryController.update); // Update a specific MaterialCategory
router.delete("/:id", materialCategoryController.delete); // Delete a specific MaterialCategory

module.exports = router;
