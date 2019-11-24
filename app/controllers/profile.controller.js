const User = require("../models/User");

exports.test = (req, res) => {
    console.log('test');
    User.findOne({
		where: {
			user_id: req.user_id
		}
	}).then(user => {
        res.json({user:user});
        console.log('tested');
    }).catch(err => {
        res.status(500).send('Error -> ' + err);
        console.log('Error = ' + err);
    })
}