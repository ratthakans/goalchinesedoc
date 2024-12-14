const express = require("express");
const accountController = require("../controllers/accountController");
const {
  createAccountValidation,
} = require("../middlewares/validators/accountValidator");
const upload = require("../middlewares/upload");

const router = express.Router();

router.post(
  "/",
  upload.single("profile"),
  createAccountValidation,
  accountController.create
);
router.get("/", accountController.findAll);
router.get("/:id", accountController.findOne);
router.put("/:id", upload.single("profile"), accountController.update);
router.delete("/:id", accountController.delete);

module.exports = router;
