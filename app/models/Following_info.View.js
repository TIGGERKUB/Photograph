const Sequelize = require("sequelize");
const db = require("../config/db.config");

module.exports = db.sequelize.define(
  "following_info",
  {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    following_id: {
      type: Sequelize.INTEGER
    },
    following_username: {
      type: Sequelize.STRING
    },
    following_avatar: {
      type: Sequelize.STRING
    }
  },
  { freezeTableName: true, timestamps: false }
);
