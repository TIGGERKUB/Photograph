const Sequelize = require('sequelize');
const db = require("../config/db.config");

module.exports = db.sequelize.define(
    'user',
        {
            user_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username:{
                type:Sequelize.STRING
            },
            password:{
                type:Sequelize.STRING
            },
            email:{
                type:Sequelize.STRING
            },
            first_name:{
                type:Sequelize.STRING
            },
            last_name:{
                type:Sequelize.STRING
            },
            gender:{
                type:Sequelize.STRING
            },
            age:{
                type:Sequelize.INTEGER
            },
            birthday:{
                type:Sequelize.DATE,
            },
            phone:{
                type:Sequelize.INTEGER
            },
            profile_pic:{
                type:Sequelize.STRING
            },
            bio:{
                type:Sequelize.STRING
            },
            created:{
                type:Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
        },
        { freezeTableName: true , 
            timestamps: false}
);