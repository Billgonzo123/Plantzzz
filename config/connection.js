///This sets up the Sequalize connection. it is 'required' in the server.js file

// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

//this allows the use of .env to hide passwords and such
require('dotenv').config();

let sequelize;

//this bassically checks if you are being served from heroku. JawsDB must be enabled on the heroku account
//it creates a new sequelize instance
//dont forget to create the heroku server git: heroku create [optional name]
//then add JawsDB: heroku addons:create jawsdb
if (process.env.JAWSDB_URL){
  sequelize =new Sequelize(process.env.JAWSDB_URL);
} else {
// create connection to our local database, pass in your MySQL information for username and password
 sequelize = new Sequelize(
     //this is how we reference the .env key/values
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}
  module.exports = sequelize;