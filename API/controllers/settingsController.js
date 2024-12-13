const { Setting } = require("../models"); // Adjust the path to your models

// Upload logo and update academyName
exports.create = async (req, res) => {
  try {
    const { academyName } = req.body; // Extract academyName from the request body

    // Find the existing setting (or create one if necessary)
    let setting = await Setting.findOne();
    if (!setting) {
      if (!req.file) {
        setting = await Setting.create({
          academyName,
          logo: req.files?.settings ? req.files.settings[0].path : null,
        });
      } else {
        setting = await Setting.create({ academyName });
      }
    } else {
      setting.academyName = academyName;
      if (req.file)
        setting.logo = req.files?.settings
          ? req.files.settings[0].path
          : setting.settings; // Save the uploaded file path in the 'logo' column
      await setting.save();
    }

    res.status(200).json({ message: "Settings updated successfully", setting });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
