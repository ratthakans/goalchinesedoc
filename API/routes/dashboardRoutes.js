const express = require("express");
const dashboardController = require("../controllers/dashboardController");

const router = express.Router();

router.get("/getSummaryUser", dashboardController.getSummaryUser); // Get all Attendance records
router.get("/getSummaryBranch", dashboardController.getSummaryBranch); // Get all Attendance records
router.get("/getSummaryIncome", dashboardController.getSummaryIncome); // Get all Attendance records
router.get("/getData", dashboardController.getDashboardData); // Combined dashboard data - single API call

module.exports = router;
