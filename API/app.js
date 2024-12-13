const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
const { sequelize } = require("./models");
const apiRoutes = require("./routes"); // The index.js file in the `routes` folder

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads")); // Serve uploaded files as static

// Set a single `/api` prefix for all routes
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
