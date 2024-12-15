const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const FeeStructure = sequelize.define(
  "FeeStructure",
  {
    accountID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Account", // Name of the related table
        key: "id",
      },
    },
    updateDate: {
      type: DataTypes.STRING,
    },
    salaryForGroup: {
      type: DataTypes.STRING,
    },
    payDate: {
      type: DataTypes.STRING,
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

module.exports = FeeStructure;
