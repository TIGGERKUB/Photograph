const express = require("express");
const cors = require("cors");
const followController = require('../controllers/follow.controller');
const authJwt = require('./verifyJwtToken');
const getUserID = require('./getUserID');


const follow = express.Router();
follow.use(cors());

follow.post('/requested-friend/:username', [authJwt.verifyToken,getUserID], followController.requestedFriend);
follow.post('/cancel-requested/:username', [authJwt.verifyToken,getUserID], followController.cancelRequestedFriend);
follow.post('/accept-requested/:username', [authJwt.verifyToken,getUserID], followController.acceptRequest);
follow.post('/unfollow/:username', [authJwt.verifyToken,getUserID], followController.unfollow);


module.exports = follow;
