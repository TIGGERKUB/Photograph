const Sequelize = require("sequelize");
const db = require("../config/db.config");

module.exports = db.sequelize.define(
  "followers_info",
  {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    follower_id: {
      type: Sequelize.INTEGER
    },
    follower_username: {
      type: Sequelize.STRING
    },
    follower_avatar: {
      type: Sequelize.STRING
    }
  },
  { freezeTableName: true, timestamps: false }
);
