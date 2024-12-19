const express = require("express");
const classController = require("../controllers/classController"); // Adjust the path

const router = express.Router();

router.post("/", classController.create); // Create a new Class
router.get("/", classController.findAll); // Get all Classes
router.get("/:id", classController.findOne); // Get a single Class by ID
router.put("/:id", classController.update); // Update a Class by ID
router.delete("/:id", classController.delete); // Delete a Class by ID

// Add this line
router.get("/student/:id", classController.findAllByStudent); // Get all Classes by student ID

module.exports = router;
