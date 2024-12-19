const express = require("express");
const upload = require("../middlewares/upload");

const router = express.Router();

const settingsController = require("../controllers/settingsController");

const {
  authenticate,
  authorizeRole,
} = require("../middlewares/authMiddleware");

router.post(
  "/",
  authenticate,
  upload.fields([
    { name: "logo", maxCount: 1 }, // Accept single photo
  ]),
  settingsController.create
);

router.get("/", settingsController.findAll);
router.delete("/logo", authenticate, settingsController.deleteImage);

module.exports = router;
