const Sequelize = require('sequelize');

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;

const sequelize = new Sequelize(db_name, db_user, db_pass, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

module.exports = sequelize;
