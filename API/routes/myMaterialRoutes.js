const express = require("express");
const myMaterialController = require("../controllers/myMaterialController"); // Adjust the path

const router = express.Router();

// CRUD routes
router.post("/", myMaterialController.create); // Create
router.get("/", myMaterialController.findAll); // Read all
router.get("/:id", myMaterialController.findOne); // Read one
router.put("/:id", myMaterialController.update); // Update
router.delete("/:id", myMaterialController.delete); // Delete

// Custom routes
router.get("/account/:accountID", myMaterialController.getMaterialsByAccountId); // Read all by accountId

// Clear all records by deleteByAccountIDs
router.put("/clear/account", myMaterialController.deleteByAccountIDs);

module.exports = router;
