const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const MaterialFor = sequelize.define(
  "MaterialFor",
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

module.exports = MaterialFor;
