const express = require("express");
const attendanceController = require("../controllers/attendanceController");

const router = express.Router();

router.post("/", attendanceController.create); // Create a new Attendance record
router.get("/", attendanceController.findAll); // Get all Attendance records
router.get("/class/:classId", attendanceController.findByClassId); // Get Attendance by class ID
router.put("/:id", attendanceController.update); // Update an Attendance record by ID
router.delete("/:id", attendanceController.delete); // Delete an Attendance record by ID

module.exports = router;
