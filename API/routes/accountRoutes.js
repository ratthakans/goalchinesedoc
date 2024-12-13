const express = require("express");
const accountController = require("../controllers/accountController");
const {
  createAccountValidation,
} = require("../middlewares/validators/accountValidator");

const router = express.Router();

router.post("/", createAccountValidation, accountController.create);
router.get("/", accountController.findAll);
router.get("/:id", accountController.findOne);
router.put("/:id", accountController.update);
router.delete("/:id", accountController.delete);

module.exports = router;
