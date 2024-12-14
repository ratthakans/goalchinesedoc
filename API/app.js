const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require("dotenv");
const { sequelize } = require("./models");
const apiRoutes = require("./routes"); // The index.js file in the `routes` folder
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();

const app = express();
console.log("process.env.NODE_ENV :>> ", process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  console.log("Running in development mode");
  app.use(cors()); // Allow unrestricted CORS in development
}

// Middleware
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads")); // Serve uploaded files as static

// Set a single `/api` prefix for all routes
app.use("/api", apiRoutes);

// Error Handling Middleware (must be after routes)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
