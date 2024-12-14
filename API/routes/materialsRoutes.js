const express = require("express");
const upload = require("../middlewares/upload"); // Multer middleware
const materialsController = require("../controllers/materialsController");

const router = express.Router();

// Create Material with optional photo and document upload
router.post(
  "/",
  upload.fields([
    { name: "photo", maxCount: 1 }, // Accept single photo
    { name: "document", maxCount: 1 }, // Accept single document
  ]),
  materialsController.create
);

// Update Material with optional photo and document upload
router.put(
  "/:id",
  upload.fields([
    { name: "photo", maxCount: 1 }, // Accept single photo
    { name: "document", maxCount: 1 }, // Accept single document
  ]),
  materialsController.update
);

// Other routes
router.get("/", materialsController.findAll); // Get all Materials
router.get("/:id", materialsController.findOne); // Get a specific Material
router.delete("/:id", materialsController.delete); // Delete a Material

module.exports = router;
