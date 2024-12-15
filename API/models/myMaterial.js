const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const MyMaterial = sequelize.define(
  "MyMaterial",
  {
    accountID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Account", // Name of the related table
        key: "id",
      },
    },
    materialID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Materials", // Name of the related table
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

MyMaterial.associate = (models) => {
  MyMaterial.belongsTo(models.Account, { foreignKey: "accountID" });
  MyMaterial.belongsTo(models.Materials, {
    foreignKey: "materialID",
    as: "material",
  });
};

module.exports = MyMaterial;
