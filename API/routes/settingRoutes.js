const express = require("express");
const upload = require("../middlewares/upload");

const router = express.Router();

const settingsController = require("../controllers/settingsController");

router.post(
  "/upload-settings",
  upload.fields([
    { name: "settings", maxCount: 1 }, // Accept single photo
  ]),
  settingsController.create
);

module.exports = router;
