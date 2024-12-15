const express = require("express");
const feeStructureController = require("../controllers/feeStructureController");

const router = express.Router();

router.post("/", feeStructureController.create); // Create
router.get("/", feeStructureController.findAll); // Get all
router.get("/:id", feeStructureController.findOne); // Get one by ID
router.put("/:id", feeStructureController.update); // Update
router.delete("/:id", feeStructureController.delete); // Delete
router.get("/account/:accountID", feeStructureController.findByAccountId); // Get one by accountID

module.exports = router;
