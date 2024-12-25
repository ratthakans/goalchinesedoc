const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PointStructure = sequelize.define(
  "PointStructure",
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
      type: DataTypes.DATE,
    },
    totalPoint: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    pointUp: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    pointDown: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    pointAfterUpdate: {
      type: DataTypes.STRING,
    },
    resonalForUpdate: {
      type: DataTypes.STRING,
    },
    updateBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Account", // Name of the related table
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

PointStructure.associate = (models) => {
  PointStructure.belongsTo(models.Account, {
    foreignKey: "updateBy",
    onDelete: "cascade",
    hooks: true,
  });
};

module.exports = PointStructure;
