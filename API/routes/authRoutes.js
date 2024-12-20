const express = require("express");
const { login, register } = require("../controllers/authController");
const {
  authenticate,
  authorizeRole,
} = require("../middlewares/authMiddleware");
const { loginValidation } = require("../middlewares/validators/authValidator");

const router = express.Router();

router.post("/register", register);
router.post("/login", loginValidation, login);

// Example protected route
router.get("/admin", authenticate, authorizeRole(["admin"]), (req, res) => {
  res.json({ message: "Welcome Admin!" });
});

module.exports = router;
