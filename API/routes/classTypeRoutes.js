const express = require("express");
const classTypeController = require("../controllers/classTypeController"); // Adjust the path

const router = express.Router();

router.post("/", classTypeController.create); // Create a class
router.get("/", classTypeController.findAll); // Get all classes
router.get("/:id", classTypeController.findOne); // Get a specific class
router.put("/:id", classTypeController.update); // Update a specific class
router.delete("/:id", classTypeController.delete); // Delete a specific class

module.exports = router;
