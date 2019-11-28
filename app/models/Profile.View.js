const Sequelize = require("sequelize");
const db = require("../config/db.config");

module.exports = db.sequelize.define(
  "profile",
  {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING
    },
    no_photo: {
      type: Sequelize.INTEGER
    },
    no_following: {
      type: Sequelize.INTEGER
    },
    no_followers: {
      type: Sequelize.INTEGER
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    profile_pic: {
      type: Sequelize.STRING
    },
    birthday: {
      type: Sequelize.DATE
    },
    bio: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.INTEGER
    }
  },
  { freezeTableName: true, timestamps: false }
);
