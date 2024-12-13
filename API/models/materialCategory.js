const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const MaterialCategory = sequelize.define(
  "MaterialCategory",
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

module.exports = MaterialCategory;
