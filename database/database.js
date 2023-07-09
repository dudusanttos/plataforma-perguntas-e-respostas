const Sequelize = require("sequelize");

const connection = new Sequelize('guiaperguntas', 'root', 'capivara',{
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;