// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  // create the connection to remote Heroku database
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // create the connection to our local database, pass in MYSQL information for username & password
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;