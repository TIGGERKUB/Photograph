const Sequelize = require('sequelize');
const db = require("../database/config");

module.exports = db.sequelize.define(
    'followers',
        {
            user_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                referencies : 'user',
                referenceKey: 'user_id'
            },
            follower_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                referencies : 'user',
                referenceKey: 'user_id'
            },
            timestamp: {
                type: Sequelize.DATE
            }
            
        },
        { freezeTableName: true , 
            timestamps: false}
);