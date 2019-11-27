const express = require("express");
const cors = require("cors");
const profileController = require('../controllers/profile.controller');
const authJwt = require('./verifyJwtToken');
const uploadPhoto = require('./uploadPhoto');

const profile = express.Router();
profile.use(cors());

profile.get('/:id',[authJwt.verifyToken],profileController.profileInfo);
profile.post('/profile-img-upload',[uploadPhoto],profileController.edit);

module.exports = profile;
