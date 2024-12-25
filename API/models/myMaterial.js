const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const MyMaterial = sequelize.define(
  "MyMaterial",
  {
    accountID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    materialID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

MyMaterial.associate = (models) => {
  MyMaterial.belongsTo(models.Account, {
    foreignKey: "accountID",
    onDelete: "cascade",
    hooks: true,
  });
  MyMaterial.belongsTo(models.Materials, {
    foreignKey: "materialID",
    as: "material",
  });
};

module.exports = MyMaterial;
