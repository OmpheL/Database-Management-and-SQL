// app.js
const express = require("express");
const { sequelize } = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database & tables created!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
