const express = require("express");
const cors = require("cors");
const authController = require('../controllers/auth.controller');
const verifySignUp = require('../routers/verifySignUp');

const auth = express.Router();
auth.use(cors());



auth.post('/signup', [verifySignUp.checkDuplicateUserNameOrEmail], authController.signup);
auth.post('/signin', authController.signin);
  
module.exports = auth;
