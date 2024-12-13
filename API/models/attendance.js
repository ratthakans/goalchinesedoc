const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TeacherType = sequelize.define(
  "TeacherType",
  {
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    studyDate: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.STRING,
    },
    note: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = TeacherType;
