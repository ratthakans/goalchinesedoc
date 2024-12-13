const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ClassType = sequelize.define(
  "ClassType",
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

module.exports = ClassType;
