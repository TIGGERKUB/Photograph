const User = require("../models/User");


exports.allUser = (req, res) => {
    User.findAll({
        attributes: ['user_id','username','profile_pic']
    }).then(user => {
        res.json({user:user});
    }).catch(err => {
        res.status(500).send("Fail! Error -> " + err);
    })
}
