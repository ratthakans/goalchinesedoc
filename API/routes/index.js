const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes"); // Adjust path as needed
const classTypeRoutes = require("./classTypeRoutes"); // Adjust path as needed
const branchRoutes = require("./branchRoutes");
const studentTypeRoutes = require("./studentTypeRoutes");
const teacherTypeRoutes = require("./teacherTypeRoutes");
const materialCategoryRoutes = require("./materialCategoryRoutes");
const materialForRoutes = require("./materialForRoutes");
const materialTypeRoutes = require("./materialTypeRoutes");
const currencyRoutes = require("./currencyRoutes");
const materialsRoutes = require("./materialsRoutes");
const accountRoutes = require("./accountRoutes");
const myMaterialRoutes = require("./myMaterialRoutes");
const settingRoutes = require("./settingRoutes");

// Define route groups with the `/api` prefix
router.use("/auth", authRoutes);
router.use("/account", accountRoutes);
router.use("/classType", classTypeRoutes);
router.use("/branch", branchRoutes);
router.use("/studentType", studentTypeRoutes);
router.use("/teacherType", teacherTypeRoutes);
router.use("/materialCategory", materialCategoryRoutes);
router.use("/materialFor", materialForRoutes);
router.use("/materialType", materialTypeRoutes);
router.use("/currency", currencyRoutes);
router.use("/materials", materialsRoutes);
router.use("/myMaterial", myMaterialRoutes);
router.use("/setting", settingRoutes);

module.exports = router;
