const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PointStucture = sequelize.define(
  "PointStucture",
  {
    accountID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    updateDate: {
      type: DataTypes.STRING,
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
    },
  },
  {
    freezeTableName: true,
  }
);

PointStucture.associate = (models) => {
  PointStucture.belongsTo(models.Account, { foreignKey: "updateBy" });
};

module.exports = PointStucture;
