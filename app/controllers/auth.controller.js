const config = require('../config/config.js');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const User = require("../models/User");


exports.signup = (req, res) => {
	// Save User to Database
	console.log("Processing func -> SignUp");
	const today = new Date();

	User.create({
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 10),
		created: today
	}).then(user => {
		User.findOne({
			where: {
				username: req.body.username
			}
		}).then(user => {
			var token = jwt.sign({ user_id: user.user_id }, config.secret, {
				expiresIn: 86400 // expires in 24 hours
			  });
			console.log('registerd!');
			res.status(200).json({token:token});
		}).catch(err => {
			res.status(500).send('Error -> ' + err);
		});
	}).catch(err => {
		res.status(500).send("Fail! Error -> " + err);
	});
}

exports.signin = (req, res) => {
	console.log("Sign-In");
	
	User.findOne({
		where: {
			username: req.body.username
		}
	}).then(user => {
		if (!user) {
			return res.status(404).send('User Not Found.');
		}

		var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
		if (!passwordIsValid) {
			return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
		}
		
		var token = jwt.sign({ user_id: user.user_id }, config.secret, {
		  expiresIn: 86400 // expires in 24 hours
		});
		
		res.status(200).json({token:token});
		
	}).catch(err => {
		res.status(500).send('Error -> ' + err);
	});
}