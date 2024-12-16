const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const { Attendance } = require("../models");

const Class = sequelize.define(
  "Class",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    branchID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Branch", // Name of the related table
        key: "id",
      },
    },
    classTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "ClassType", // Name of the related table
        key: "id",
      },
    },
    numberOfStudent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    studentFee: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    discount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    discountNote: {
      type: DataTypes.STRING,
    },
    totalFeePerClass: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    teacherID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Account", // Name of the related table
        key: "id",
      },
    },
    status: {
      type: DataTypes.STRING,
    },
    materialTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "MaterialType", // Name of the related table
        key: "id",
      },
    },
    registeredTimes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    teacherLeave: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    studentLeave: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    studyTimePerTime: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    studyPlatform: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    },
    updateBy: {
      type: DataTypes.INTEGER,
      references: {
        model: "Account", // Name of the related table
        key: "id",
      },
    },
    note: {
      type: DataTypes.STRING,
    },
    checkList: {
      type: DataTypes.STRING,
    },
    currencyID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Currency", // Name of the related table
        key: "id",
      },
    },
    regular: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    studentMissing: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    teacherMissing: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    other: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
  }
);

Class.associate = (models) => {
  Class.belongsTo(models.Branch, { foreignKey: "branchID" });
  Class.belongsTo(models.ClassType, { foreignKey: "classTypeID" });
  Class.belongsTo(models.Account, { foreignKey: "teacherID", as: "teacher" });
  Class.belongsTo(models.Account, { foreignKey: "updateBy" });
  Class.belongsTo(models.MaterialType, { foreignKey: "materialTypeID" });
  Class.belongsTo(models.Currency, { foreignKey: "currencyID" });

  Class.hasMany(models.ClassStudent, {
    foreignKey: "classID",
    as: "classStudent",
  });

  Class.hasMany(models.ClassStudy, {
    foreignKey: "classID",
    as: "classStudy",
  });

  Class.hasMany(models.Attendance, {
    foreignKey: "classId",
    as: "attendance",
  });
};

module.exports = Class;
