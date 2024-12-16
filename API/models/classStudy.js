const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ClassStudy = sequelize.define(
  "ClassStudy",
  {
    classID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Class", // Name of the related table
        key: "id",
      },
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
      get() {
        const time = this.getDataValue("startTime"); // Fetch the raw value from the database
        if (!time) return null; // Handle cases where the time is null

        // Format the time to HH:mm
        const [hours, minutes] = time.split(":"); // Split the time into components
        return `${hours}:${minutes}`; // Return only hours and minutes
      },
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false,
      get() {
        const time = this.getDataValue("endTime"); // Fetch the raw value from the database
        if (!time) return null; // Handle cases where the time is null

        // Format the time to HH:mm
        const [hours, minutes] = time.split(":"); // Split the time into components
        return `${hours}:${minutes}`; // Return only hours and minutes
      },
    },
    note: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = ClassStudy;
