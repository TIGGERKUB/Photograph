const express = require("express");
const cors = require("cors");
const profileController = require('../controllers/profile.controller');
const authJwt = require('./verifyJwtToken');

const profile = express.Router();
profile.use(cors());

profile.get('/:id',[authJwt.verifyToken],profileController.profileInfo);

module.exports = profile;
