const User = require("../models/User");
const ProfileView = require("../models/Profile.View");

exports.test = (req, res) => {
    // console.log('test');
    User.findOne({
		where: {
			user_id: req.user_id
		}
	}).then(user => {
        res.json({user:user});
        // console.log('tested');
    }).catch(err => {
        res.status(500).send('Error -> ' + err);
        // console.log('Error = ' + err);
    })
}

exports.profileInfo =(req,res) => {
    // console.log('profileInfo');
    const getUsername = req.params.id;
    ProfileView.findOne({
		where: {
			username: getUsername
		}
	}).then(user => {
        res.json({user:user});
        // console.log('profileInfo success');
    }).catch(err => {
        res.status(500).send('Error -> ' + err);
        // console.log('Error = ' + err);
    })
}