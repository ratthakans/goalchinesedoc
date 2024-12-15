const express = require("express");
const pointStructureController = require("../controllers/pointStructureController");

const router = express.Router();

router.post("/", pointStructureController.create); // Create
router.get("/", pointStructureController.findAll); // Get all
router.get("/:id", pointStructureController.findOne); // Get one by ID
router.put("/:id", pointStructureController.update); // Update
router.delete("/:id", pointStructureController.delete); // Delete
router.get("/account/:accountID", pointStructureController.findByAccountId); // Get one by accountID

module.exports = router;
