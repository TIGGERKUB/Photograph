const jwt = require('jsonwebtoken');
const config = require('../config/config.js');

verifyToken = (req, res, next) => {
	let token = req.headers['authorization-access-token'];
	console.log('check verifyToken = ' + token);
	if (!token){
		return res.status(403).send({ 
			auth: false, message: 'No token provided.' 
		});
	}

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err){
			console.log('err verifyToken = ' + err);
			return res.status(500).send({ 
					auth: false, 
					message: 'Fail to Authentication. Error -> ' + err 
				});
		}
		req.user_id = decoded.user_id;
		console.log("req.user_id = " + req.user_id);
		next();
	});
}

const authJwt = {};
authJwt.verifyToken = verifyToken;

module.exports = authJwt;