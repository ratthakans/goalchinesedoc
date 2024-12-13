const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Branch = sequelize.define(
  "Branch",
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

module.exports = Branch;
