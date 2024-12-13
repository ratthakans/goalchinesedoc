const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const FeeStucture = sequelize.define(
  "FeeStucture",
  {
    accountID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    updateDate: {
      type: DataTypes.STRING,
    },
    salaryForGroup: {
      type: DataTypes.STRING,
    },
    payDate: {
      type: DataTypes.DATE,
    },
    classType: {
      type: DataTypes.STRING,
    },
    branch: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    classFee: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    discount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    note: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = FeeStucture;
