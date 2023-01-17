const Sequelize = require("sequelize");
const db = require("../db_setup.js");
const User = require("./Users.js");

const Profile = db.define(
  "profile",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    starting_weight: {
      type: Sequelize.FLOAT,
    },
    goal_weight: {
      type: Sequelize.FLOAT,
    },
    start_date: {
      type: Sequelize.DATE,
    },
    max_chain: {
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
  },
  {
    underscored: true,
  }
);

User.hasOne(Profile);
Profile.belongsTo(User);

module.exports = Profile;
