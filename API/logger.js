const DailyRotateFile = require("winston-daily-rotate-file");

const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize } = format;

// Define the log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const logger = createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), logFormat),
  transports: [
    new transports.Console({
      format: combine(colorize(), logFormat),
    }),
    new DailyRotateFile({
      dirname: "logs", // Directory for log files
      filename: "app-%DATE%.log", // Log file name with date
      datePattern: "YYYY-MM-DD", // Rotate daily
      maxSize: "20m", // Maximum file size
      maxFiles: "14d", // Keep logs for 14 days
    }),
  ],
});

module.exports = logger;
