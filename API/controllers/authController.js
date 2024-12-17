const logger = require("../logger");
const { User } = require("../models"); // Ensure correct path
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

// Login Function
exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;

  try {
    // Step 1: Find the user by username
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // Step 2: Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // Step 3: Generate JWT
    const token = jwt.sign(
      {
        id: user.id,
        accountID: user.accountID,
        name: user.name,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET || "your_jwt_secret", // Use a secure secret in production
      { expiresIn: "6h" }
    );

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        accountID: user.accountID,
        username: user.username,
        role: user.role,
        token,
      },
    });

    logger.info(`User ${user.username} logged in`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
