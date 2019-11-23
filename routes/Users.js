const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = express.Router();
const Sequelize = require('sequelize');
const User = require("../models/User");
users.use(cors());

process.env.SECRET_KEY = "IssaPongTigerPound";

users.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    // email: req.body.email,
    // first_name: req.body.first_name,
    // last_name: req.body.last_name,
    // gender: req.body.gender,
    // age: req.body.age,
    // birthday: req.body.birthday,
    // phone: req.body.phone,
    // profile_pic: req.body.profile_pic,
    // profile_caption: req.body.profile_caption,
    created: today
  };
  const Op = Sequelize.Op;
  User.findAll({
    where: {
      [Op.or]: [{username: req.body.username}, {email: req.body.email}]
    }
  })
    .then(user => {
      if (!user || user == '') {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then(user => {
              User.findOne({
                where: {
                  username: req.body.username
                }
              })
              .then(user => {
                let token = jwt.sign({_id:user.user_id}, process.env.SECRET_KEY,{
                  expiresIn: 1440
              })
              res.json({token,username:user.username,expiresIn:1440});
              })
            })
            .catch(err => {
              res.send("error: ", err);
            });
        });
      } else {
        res.json({ err: 'user or email already exist' });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

users.post('/login',(req,res) => {
    User.findOne({
        where: {
          username: req.body.username
        }
    })
    .then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.password,user.password)){
                let token = jwt.sign({_id:user.user_id}, process.env.SECRET_KEY,{
                    expiresIn: 1440
                })
                res.json({token,username:user.username,expiresIn:1440});
            }else{
                res.status(400).json({ error: 'user input username or password wrong'});
            }
        }else{
            res.status(400).json({ error: 'user does not exist'});
        }
    })
    .catch(err => {
        res.status(400).json({error:err})
    })
})

module.exports = users;
