const Sequelize = require("sequelize");
const db = require("../db_setup.js");
const User = require("./Users.js");

const JournalEntry = db.define(
  "journal_entry",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    entry_date: {
      type: Sequelize.DATE,
    },
    weight: {
      type: Sequelize.FLOAT,
    },
    exercise_goal_met: {
      type: Sequelize.BOOLEAN,
    },
    caloric_intake: {
      type: Sequelize.FLOAT,
    },
    protein_intake: {
      type: Sequelize.FLOAT,
    },
    notes: {
      type: Sequelize.STRING,
    },
    user_id: {
      type: Sequelize.FLOAT,
    },
  },
  {
    underscored: true,
  }
);

User.hasMany(JournalEntry);
JournalEntry.belongsTo(User);

module.exports = JournalEntry;
