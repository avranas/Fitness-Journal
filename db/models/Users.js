const Sequelize = require("sequelize");
const db = require("../db_setup.js");
const User = db.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    underscored: true,
  }
);

module.exports = User;
