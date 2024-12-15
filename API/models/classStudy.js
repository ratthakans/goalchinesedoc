const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ClassStudy = sequelize.define(
  "ClassStudy",
  {
    classID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Class", // Name of the related table
        key: "id",
      },
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.TIME,
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

module.exports = ClassStudy;
