// database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("expense_manager", "root", "@Omphemetse1995", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
