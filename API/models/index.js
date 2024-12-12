const sequelize = require('../config/database');
const User = require('./user');

const initializeModels = async () => {
    await sequelize.sync({ alter: true });
};

module.exports = { User, initializeModels };
