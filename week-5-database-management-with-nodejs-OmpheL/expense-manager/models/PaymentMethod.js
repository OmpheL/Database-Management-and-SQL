const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./User");

const PaymentMethod = sequelize.define(
  "PaymentMethod",
  {
    payment_method_id: {
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
    payment_method_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = PaymentMethod;
