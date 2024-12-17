const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ClassEvents = sequelize.define(
  "ClassEvents",
  {
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Class", // Name of the related table
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
    updateBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

ClassEvents.associate = (models) => {
  ClassEvents.belongsTo(models.Account, {
    foreignKey: "updateBy",
    as: "updatedBy",
  });
  ClassEvents.belongsTo(models.Class, { foreignKey: "classId", as: "class" });
};

module.exports = ClassEvents;
