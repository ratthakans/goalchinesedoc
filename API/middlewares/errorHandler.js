const {
  ValidationError,
  UniqueConstraintError,
  ForeignKeyConstraintError,
} = require("sequelize");

const errorHandler = (err, req, res, next) => {
  // Sequelize Validation Error
  if (err instanceof ValidationError) {
    return res.status(400).json({
      error: "Validation Error",
      details: err.errors.map((e) => ({
        message: e.message,
        field: e.path,
      })),
    });
  }

  // Unique Constraint Error
  if (err instanceof UniqueConstraintError) {
    return res.status(400).json({
      error: "Unique Constraint Error",
      details: err.errors.map((e) => ({
        message: e.message,
        field: e.path,
      })),
    });
  }

  // Foreign Key Constraint Error
  if (err instanceof ForeignKeyConstraintError) {
    return res.status(400).json({
      error: "Foreign Key Constraint Error",
      details: err.message,
    });
  }

  // Generic Sequelize Error
  if (err.name === "SequelizeDatabaseError") {
    return res.status(500).json({
      error: "Database Error",
      details: err.message,
    });
  }

  // Other Errors
  return res.status(500).json({
    error: "Internal Server Error",
    details: err.message,
  });
};

module.exports = errorHandler;
