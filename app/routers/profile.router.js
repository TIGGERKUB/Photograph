const express = require("express");
const cors = require("cors");
const profileController = require('../controllers/profile.controller');
const authJwt = require('./verifyJwtToken');

const profile = express.Router();
profile.use(cors());

profile.get('/test',[authJwt.verifyToken],profileController.test);

module.exports = profile;
