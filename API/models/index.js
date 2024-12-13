const fs = require('fs');
const path = require('path');

const sequelize = require('../config/database');

const models = {};

// Dynamically import all model files
fs.readdirSync(__dirname)
    .filter((file) => file.endsWith('.js') && file !== 'index.js')
    .forEach((file) => {
        const model = require(path.join(__dirname, file));
        models[model.name] = model;
    });

// Setup model associations
Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = sequelize;

module.exports = models;
