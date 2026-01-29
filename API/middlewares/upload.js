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
    let subdirectory = "uploads/default"; // Default directory

    // Dynamically assign directory based on field name
    if (file.fieldname === "logo") {
      subdirectory = "uploads/settings";
    } else if (file.fieldname === "photo") {
      subdirectory = "uploads/photos";
    } else if (file.fieldname === "document") {
      subdirectory = "uploads/materials";
    } else if (file.fieldname === "profile") {
      subdirectory = "uploads/profiles";
    }
    ensureDirectoryExistence(subdirectory);
    cb(null, subdirectory);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    const originalName = Buffer.from(file.originalname, 'latin1').toString('utf8');
    const cleanName = path.basename(originalName, extension);
    cb(null, `${cleanName}-${uniqueSuffix}${extension}`);
  },
});

// File filter to allow only specific file types
const fileFilter = (req, file, cb) => {
  if (
    ["profile", "logo", "photo"].includes(file.fieldname) &&
    file.mimetype.startsWith("image/")
  ) {
    cb(null, true);
  } else if (
    file.fieldname === "document" &&
    [
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/pdf",
      "video/mp4",
    ].includes(file.mimetype)
  ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

// Create multer instance
const upload = multer({ storage, fileFilter });

module.exports = upload;
