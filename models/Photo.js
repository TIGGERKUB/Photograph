const Sequelize = require('sequelize');
const db = require("../database/config");

module.exports = db.sequelize.define(
    'photo',
        {
            photo_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            
            photo : {
                type:Sequelize.STRING
            },

            caption : {
                type:Sequelize.STRING
            },
           
            group_id: {
                type: Sequelize.INTEGER,
                referencies : 'group_detail',
                referenceKey: 'group_id'
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