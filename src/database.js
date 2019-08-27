const { Sequelize } = require("sequelize");

module.exports = () =>
  new Sequelize("mysql://root:hyw1140@localhost:3306/mydb");
