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
router.use("/accounts", accountRoutes);
router.use("/classType", classTypeRoutes);
router.use("/branch", branchRoutes);
router.use("/studentType", studentTypeRoutes);
router.use("/teacherTypes", teacherTypeRoutes);
router.use("/materialCategories", materialCategoryRoutes);
router.use("/materialFor", materialForRoutes);
router.use("/materialTypes", materialTypeRoutes);
router.use("/currencies", currencyRoutes);
router.use("/materials", materialsRoutes);
router.use("/myMaterials", myMaterialRoutes);
router.use("/settings", settingRoutes);

module.exports = router;
