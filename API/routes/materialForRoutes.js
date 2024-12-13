const express = require("express");
const materialForController = require("../controllers/materialForController"); // Adjust path as needed

const router = express.Router();

router.post("/", materialForController.create); // Create a MaterialFor
router.get("/", materialForController.findAll); // Get all MaterialFor records
router.get("/:id", materialForController.findOne); // Get a specific MaterialFor
router.put("/:id", materialForController.update); // Update a specific MaterialFor
router.delete("/:id", materialForController.delete); // Delete a specific MaterialFor

module.exports = router;
