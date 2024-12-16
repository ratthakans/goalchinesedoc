const { Attendance } = require("../models");

const logger = require("../logger");

// Create a new Attendance record
exports.create = async (req, res) => {
  try {
    const newAttendance = await Attendance.create(req.body);
    res.status(201).json({
      message: "Attendance record created successfully",
      data: newAttendance,
    });

    logger.info(
      `Attendance record created: ${newAttendance.id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    res.status(400).json({
      message: "Error creating attendance record",
      error: error.message,
    });
  }
};

// Retrieve all Attendance records
exports.findAll = async (req, res) => {
  try {
    const attendances = await Attendance.findAll();
    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving attendance records",
      error: error.message,
    });
  }
};

// Retrieve Attendance records by class ID
exports.findByClassId = async (req, res) => {
  try {
    const { classId } = req.params;
    const attendances = await Attendance.findAll({ where: { classId } });
    if (!attendances.length) {
      return res
        .status(404)
        .json({ message: "No attendance records found for this class" });
    }
    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving attendance records",
      error: error.message,
    });
  }
};

// Update an Attendance record by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Attendance.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ message: "Attendance record not found" });
    }
    const updatedAttendance = await Attendance.findByPk(id);
    res.status(200).json({
      message: "Attendance record updated successfully",
      data: updatedAttendance,
    });

    logger.info(
      `Attendance record updated: ${id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    res.status(400).json({
      message: "Error updating attendance record",
      error: error.message,
    });
  }
};

// Delete an Attendance record by ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Attendance.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: "Attendance record not found" });
    }
    res.status(204).send();

    logger.info(
      `Attendance record deleted: ${id} by [${req.user.id}]${req.user.username}`
    );
  } catch (error) {
    res.status(500).json({
      message: "Error deleting attendance record",
      error: error.message,
    });
  }
};
