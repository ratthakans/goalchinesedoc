const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Materials = sequelize.define(
  "Materials",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "MaterialCategory", 
        key: "id",
      },
    },
    materialForID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "MaterialFor", 
        key: "id",
      },
    },
    materialTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "MaterialType", 
        key: "id",
      },
    },

    no: {
      type: DataTypes.STRING,
    },
    document: {
      type: DataTypes.STRING,
    },
    originalDocumentName: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
    documentType: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

Materials.associate = (models) => {
  Materials.belongsTo(models.MaterialCategory, {
    foreignKey: "categoryID",
    as: "materialCategory",
  });
  Materials.belongsTo(models.MaterialFor, {
    foreignKey: "materialForID",
    as: "materialFor",
  });
  Materials.belongsTo(models.MaterialType, {
    foreignKey: "materialTypeID",
    as: "materialType",
  });
};

module.exports = Materials;
