const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ClassStudent = sequelize.define(
  "ClassStudent",
  {
    accountID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Account", // Name of the related table
        key: "id",
      },
    },
    classID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Class", // Name of the related table
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

ClassStudent.associate = (models) => {
  ClassStudent.belongsTo(models.Account, {
    foreignKey: "accountID",
    as: "account",
  });
  // ClassStudent.belongsTo(models.Class, { foreignKey: "classID" });
};

module.exports = ClassStudent;
