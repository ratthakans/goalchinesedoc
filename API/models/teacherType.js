const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TeacherType = sequelize.define(
  "TeacherType",
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

module.exports = TeacherType;
