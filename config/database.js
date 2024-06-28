const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test_db', 'root', 'admin123', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
