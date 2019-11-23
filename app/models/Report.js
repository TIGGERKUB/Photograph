const Sequelize = require('sequelize');
const db = require("../database/config");

module.exports = db.sequelize.define(
    'report',
        {
            report_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            
            reason : {
                type:Sequelize.STRING
            },

            timestamp: {
                type: Sequelize.DATE
            },
            
            status : {
                type:Sequelize.STRING
            },
           
            photo_id: {
                type: Sequelize.INTEGER,
                referencies : 'photo',
                referenceKey: 'photo_id'
            },

            reporter: {
                type: Sequelize.INTEGER,
                referencies : 'user',
                referenceKey: 'user_id'
            },
            
            
        },
        { freezeTableName: true , 
            timestamps: false}
);