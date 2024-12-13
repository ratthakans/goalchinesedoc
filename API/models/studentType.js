const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const StudentType = sequelize.define(
  "StudentType",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = StudentType;
