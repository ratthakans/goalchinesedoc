const express = require("express");
const upload = require("../middlewares/upload");

const router = express.Router();

const settingsController = require("../controllers/settingsController");

router.post(
  "/",
  upload.fields([
    { name: "logo", maxCount: 1 }, // Accept single photo
  ]),
  settingsController.create
);

router.get("/", settingsController.findAll);
router.delete("/logo", settingsController.deleteImage);

module.exports = router;
