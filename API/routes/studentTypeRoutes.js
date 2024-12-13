const express = require("express");
const studentTypeController = require("../controllers/studentTypeController");

const router = express.Router();

router.post("/", studentTypeController.create); // Create a StudentType
router.get("/", studentTypeController.findAll); // Get all StudentTypes
router.get("/:id", studentTypeController.findOne); // Get a specific StudentType
router.put("/:id", studentTypeController.update); // Update a specific StudentType
router.delete("/:id", studentTypeController.delete); // Delete a specific StudentType

module.exports = router;
