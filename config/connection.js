// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create the connection to our database, pass in MYSQL information for username & password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;