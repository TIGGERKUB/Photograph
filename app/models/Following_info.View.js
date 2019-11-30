const Sequelize = require("sequelize");
const db = require("../config/db.config");

module.exports = db.sequelize.define(
  "following_info",
  {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    user_username: {
      type: Sequelize.STRING
    },
    user_avatar: {
      type: Sequelize.STRING
    },
    following_id: {
      type: Sequelize.INTEGER
    },
    following_username: {
      type: Sequelize.STRING
    },
    following_avatar: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    }
  },
  { freezeTableName: true, timestamps: false }
);
