const express = require("express");
const cors = require("cors");
const searchController = require('../controllers/search.controller');
const authJwt = require('./verifyJwtToken');


const search = express.Router();
search.use(cors());

search.get('/all-user',[authJwt.verifyToken],searchController.allUser);

module.exports = search;

