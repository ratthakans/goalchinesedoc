const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const MaterialType = sequelize.define(
  "MaterialType",
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

module.exports = MaterialType;
