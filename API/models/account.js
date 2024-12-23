const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Account = sequelize.define(
  "Account",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    duty: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    schoolName: {
      type: DataTypes.STRING,
    },
    resumeNo: {
      type: DataTypes.STRING,
    },
    scoreForKids: {
      type: DataTypes.INTEGER,
    },
    scoreForAdult: {
      type: DataTypes.INTEGER,
    },
    teacherTypeID: {
      type: DataTypes.INTEGER,
      references: {
        model: "TeacherType", // Name of the related table
        key: "id",
      },
    },
    registerNo: {
      type: DataTypes.STRING,
    },
    registerDate: {
      type: DataTypes.DATE,
    },
    photo: {
      type: DataTypes.STRING,
    },
    avaliableForClass: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
    },
    addmissionDate: {
      type: DataTypes.DATE,
    },
    endClassDate: {
      type: DataTypes.DATE,
    },
    studentTypeID: {
      type: DataTypes.INTEGER,
      references: {
        model: "StudentType", // Name of the related table
        key: "id",
      },
    },
    classTypeID: {
      type: DataTypes.INTEGER,
      references: {
        model: "ClassType", // Name of the related table
        key: "id",
      },
    },
    addmissionNo: {
      type: DataTypes.STRING,
    },
    branchID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Branch", // Name of the related table
        key: "id",
      },
    },
    note: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "Active",
    },
  },
  {
    freezeTableName: true,
  }
);

Account.associate = (models) => {
  Account.belongsTo(models.TeacherType, {
    foreignKey: "teacherTypeID",
    as: "teacherType",
  });
  Account.belongsTo(models.StudentType, {
    foreignKey: "studentTypeID",
    as: "studentType",
  });
  Account.belongsTo(models.ClassType, {
    foreignKey: "classTypeID",
    as: "classType",
  });
  Account.belongsTo(models.Branch, { foreignKey: "branchID", as: "branch" });
  Account.hasOne(models.User, { foreignKey: "accountID", as: "user" });
  Account.hasMany(models.Permission, {
    foreignKey: "accountID",
    as: "permissions",
  });
  Account.hasOne(models.PointStructure, {
    foreignKey: "accountID",
    as: "pointStructure",
  });
};

module.exports = Account;
