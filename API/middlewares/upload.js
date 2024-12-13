const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure directory existence
const ensureDirectoryExistence = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const subdirectory = `uploads/${file.fieldname}`; // Create subdirectory for each field
    ensureDirectoryExistence(subdirectory);
    cb(null, subdirectory);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
  },
});

// File filter to allow only specific file types
const fileFilter = (req, file, cb) => {
  if (
    file.fieldname === "photos" ||
    (file.fieldname === "settings" && file.mimetype.startsWith("image/"))
  ) {
    cb(null, true);
  } else if (
    file.fieldname === "documents" &&
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

// Create multer instance
const upload = multer({ storage, fileFilter });

module.exports = upload;
