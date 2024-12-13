const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ClassEvents = sequelize.define(
  "ClassEvents",
  {
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
    updateBy: {
      type: DataTypes.INTEGER,
    },
    note: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = ClassEvents;
