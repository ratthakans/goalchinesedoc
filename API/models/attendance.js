const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Attendance = sequelize.define(
  "Attendance",
  {
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Class", // Name of the related table
        key: "id",
      },
    },
    studyDate: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.STRING,
    },
    note: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Attendance;
