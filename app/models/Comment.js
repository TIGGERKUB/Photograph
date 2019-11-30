const Sequelize = require('sequelize');
const db = require("../config/db.config");

module.exports = db.sequelize.define(
    'comment',
        {
            comment_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            comment:{
                type:Sequelize.STRING
            },
            timestamp: {
                type: Sequelize.DATE
            },
            photo_id: {
                type: Sequelize.INTEGER,
                referencies : 'photo',
                referenceKey: 'photo_id'
            },
            user_id: {
                type: Sequelize.INTEGER,
                referencies : 'user',
                referenceKey: 'user_id'
            },
            
            
        },
        { freezeTableName: true , 
            timestamps: false}
);