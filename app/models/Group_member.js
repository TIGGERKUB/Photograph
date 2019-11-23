const Sequelize = require('sequelize');
const db = require("../database/config");

module.exports = db.sequelize.define(
    'group_member',
        {
            group_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                referencies : 'user',
                referenceKey: 'user_id'
            },
        },
        { freezeTableName: true , 
            timestamps: false}
);