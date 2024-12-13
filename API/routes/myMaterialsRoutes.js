const express = require("express");
const myMaterialController = require("../controllers/myMaterialController"); // Adjust the path

const router = express.Router();

// CRUD routes
router.post("/", myMaterialController.create); // Create
router.get("/", myMaterialController.findAll); // Read all
router.get("/:id", myMaterialController.findOne); // Read one
router.put("/:id", myMaterialController.update); // Update
router.delete("/:id", myMaterialController.delete); // Delete

module.exports = router;
