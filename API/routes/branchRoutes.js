const express = require("express");
const branchController = require("../controllers/branchController"); // Import the controller

const router = express.Router();

router.post("/", branchController.create); // Create a branch
router.get("/", branchController.findAll); // Get all branches
router.get("/:id", branchController.findOne); // Get a specific branch
router.put("/:id", branchController.update); // Update a specific branch
router.delete("/:id", branchController.delete); // Delete a specific branch

module.exports = router;
