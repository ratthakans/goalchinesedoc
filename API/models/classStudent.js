const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ClassStudent = sequelize.define(
  "ClassStudent",
  {
    accountID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    classID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

// ClassStudent.associate = (models) => {
//   ClassStudent.belongsTo(models.Account, { foreignKey: "accountID" });
//   ClassStudent.belongsTo(models.Class, { foreignKey: "classID" });
// };

module.exports = ClassStudent;
