const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Permission = sequelize.define(
  "Permission",
  {
    accountID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    view: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    edit: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    delete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    create: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Permission;
