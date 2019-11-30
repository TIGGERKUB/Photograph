const User = require("../models/User");
const Followers = require("../models/Followers");
const Following = require("../models/Following");

exports.Following = (req, res) => {
    // console.log('test');.
    User.findOne({
		where: {
			username: req.username
		}
	}).then(user => {
        Following.findAll({
            where: {
                user_id: user.user_id
            }
        }).then(following => {
            res.json({following:following})
        })
    }).catch(err => {
        res.status(500).send('Error -> ' + err);
        // console.log('Error = ' + err);
    })       
}