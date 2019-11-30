const Sequelize = require('sequelize');
const db = require("../config/db.config");

module.exports = db.sequelize.define(
    'following',
        {
            user_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                referencies : 'user',
                referenceKey: 'user_id'
            },
            following_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                referencies : 'user',
                referenceKey: 'user_id'
            },
            timestamp: {
                type: Sequelize.DATE
            },
            status : {
                type:Sequelize.STRING
            }
            
        },
        { freezeTableName: true , 
            timestamps: false}
);