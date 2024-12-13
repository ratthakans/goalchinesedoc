const { TeacherType } = require("../models"); // Ensure the path to your models is correct

// Create a new TeacherType
exports.create = async (req, res) => {
  try {
    const teacherType = await TeacherType.create(req.body);
    res.status(201).json(teacherType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all TeacherTypes
exports.findAll = async (req, res) => {
  try {
    const teacherTypes = await TeacherType.findAll();
    res.status(200).json(teacherTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific TeacherType by ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const teacherType = await TeacherType.findByPk(id);
    if (!teacherType) {
      return res.status(404).json({ error: "TeacherType not found" });
    }
    res.status(200).json(teacherType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a TeacherType by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await TeacherType.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ error: "TeacherType not found" });
    }
    const updatedTeacherType = await TeacherType.findByPk(id);
    res.status(200).json(updatedTeacherType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a TeacherType by ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await TeacherType.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "TeacherType not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
