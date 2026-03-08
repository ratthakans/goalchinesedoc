const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const logger = require("./logger");

const dotenv = require("dotenv");
const { sequelize } = require("./models");
const apiRoutes = require("./routes"); // The index.js file in the `routes` folder
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();

const app = express();

// Log application startup
logger.info("Application is starting...");

app.use(cors()); // Allow unrestricted CORS in development

// Middleware
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads")); // Serve uploaded files as static
app.use("/logs", express.static("logs")); // Serve uploaded files as static

// Health check endpoint (ต้องอยู่ก่อน routes อื่นๆ และไม่ต้อง auth)
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// Set a single `/api` prefix for all routes
app.use("/api", apiRoutes);

// Error Handling Middleware (must be after routes)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

// Start server immediately — ไม่รอ DB เพื่อให้ Railway healthcheck ผ่าน
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  console.log(`Server running on port ${PORT}`);
});

// Sync DB แยกต่างหาก — ถ้า DB fail ก็ log error แต่ server ยังทำงานได้
sequelize
  .sync({ alter: true })
  .then(() => {
    logger.info("Database synced successfully");
  })
  .catch((err) => {
    logger.error("Database sync error:", err.message);
    console.error("Database sync error:", err.message);
  });
