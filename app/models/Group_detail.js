const Sequelize = require('sequelize');
const db = require("../config/db.config");
module.exports = db.sequelize.define(
    'group_detail',
        {
            group_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: Sequelize.INTEGER,
                referencies : 'user',
                referenceKey: 'user_id'
            },
            group_name : {
                type:Sequelize.STRING
            },
            color : {
                type:Sequelize.STRING
            }
            
        },
        { freezeTableName: true , 
            timestamps: false}
);