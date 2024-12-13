const { body } = require("express-validator");
const { User } = require("../../models");

exports.createAccountValidation = [
  // Account validations
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 100 })
    .withMessage("Name cannot exceed 100 characters"),
  body("gender")
    .trim()
    .notEmpty()
    .withMessage("Gender is required")
    .isIn(["Male", "Female", "Other"])
    .withMessage("Gender must be Male, Female, or Other"),
  body("dateOfBirth")
    .notEmpty()
    .withMessage("Date of Birth is required")
    .isDate()
    .withMessage("Date of Birth must be a valid date"),

  // User validations
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 4, max: 50 })
    .withMessage("Username must be between 4 and 50 characters")
    .custom(async (username) => {
      const user = await User.findOne({ where: { username } });
      if (user) {
        throw new Error("Username is already in use");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("role")
    .optional()
    .isIn(["user", "admin", "superadmin", "student", "teacher"])
    .withMessage("Role must be either user or admin"),
  body("expireDate")
    .optional()
    .isDate()
    .withMessage("Expire Date must be a valid date"),
];
