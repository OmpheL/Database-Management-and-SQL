const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./User");
const Category = require("./Category");

const Expense = sequelize.define(
  "Expense",
  {
    expense_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: "category_id",
      },
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Expense;
