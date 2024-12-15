const { Class } = require("../models"); // Adjust the path to your models folder

// Create a new Class
exports.create = async (req, res) => {
  try {
    const newClass = await Class.create(req.body);
    res
      .status(201)
      .json({ message: "Class created successfully", data: newClass });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating class", error: error.message });
  }
};

// Retrieve all Classes
exports.findAll = async (req, res) => {
  try {
    const classes = await Class.findAll();
    res.status(200).json(classes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving classes", error: error.message });
  }
};

// Retrieve a single Class by ID
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const classData = await Class.findByPk(id);
    if (!classData) {
      return res.status(404).json({ message: "Class not found" });
    }
    res.status(200).json(classData);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving class", error: error.message });
  }
};

// Update a Class by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Class.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ message: "Class not found" });
    }
    const updatedClass = await Class.findByPk(id);
    res
      .status(200)
      .json({ message: "Class updated successfully", data: updatedClass });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating class", error: error.message });
  }
};

// Delete a Class by ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Class.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: "Class not found" });
    }
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting class", error: error.message });
  }
};
