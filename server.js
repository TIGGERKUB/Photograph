var express = require("express");
var cors = require('cors');
var bodyParser = require("body-parser");
// var connection = require("./database/connection");
var port = process.env.PORT || 5000

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));


var Auth = require('./app/routers/auth.router');
var Profile = require('./app/routers/profile.router');
var Follow = require('./app/routers/follow.router');
var Search = require('./app/routers/search.router');
app.use('/auth',Auth);
app.use('/profile',Profile);
app.use('/follow',Follow);
app.use('/search',Search);

var server=app.listen(port, () => {
    console.log("We have started our server on port : " +port);
});