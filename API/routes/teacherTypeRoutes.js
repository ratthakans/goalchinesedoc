const express = require("express");
const teacherTypeController = require("../controllers/teacherTypeController"); // Adjust path as needed

const router = express.Router();

router.post("/", teacherTypeController.create); // Create a TeacherType
router.get("/", teacherTypeController.findAll); // Get all TeacherTypes
router.get("/:id", teacherTypeController.findOne); // Get a specific TeacherType by ID
router.put("/:id", teacherTypeController.update); // Update a specific TeacherType
router.delete("/:id", teacherTypeController.delete); // Delete a specific TeacherType

module.exports = router;
