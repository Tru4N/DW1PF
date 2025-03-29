const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'  // Se crea un archivo database.sqlite en la raíz del backend
});

module.exports = sequelize;
