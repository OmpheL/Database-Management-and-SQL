// models/index.js
const sequelize = require("../database");
const User = require("./User");
const Expense = require("./Expense");
const Category = require("./Category");
const PaymentMethod = require("./PaymentMethod");
const Budget = require("./Budget");

// Associations
User.hasMany(Expense, { foreignKey: "user_id" });
Expense.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Category, { foreignKey: "user_id" });
Category.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(PaymentMethod, { foreignKey: "user_id" });
PaymentMethod.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Budget, { foreignKey: "user_id" });
Budget.belongsTo(User, { foreignKey: "user_id" });

Category.hasMany(Expense, { foreignKey: "category_id" });
Expense.belongsTo(Category, { foreignKey: "category_id" });

Category.hasMany(Budget, { foreignKey: "category_id" });
Budget.belongsTo(Category, { foreignKey: "category_id" });

module.exports = {
  sequelize,
  User,
  Expense,
  Category,
  PaymentMethod,
  Budget,
};
