var express = require("express");
var cors = require('cors');
var bodyParser = require("body-parser");
// var connection = require("./database/connection");
var port = process.env.PORT || 5000

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));

// app.get("/test",(req, res) => {
//     var sql = "SELECT * FROM user"
//     connection.query(sql,(err, test) => {
//         if (err) throw err;
//         return res.json({
//             data: test
//         })
//     })
// })

// app.get("/test/add",(req, res) => {
//     const {name,price} = req.query;
//     console.log(name,price);
//     res.send('adding Product');
// })

var Users = require('./routes/Users');
app.use('/users',Users);

var server=app.listen(port, () => {
    console.log("We have started our server on port : " +port);
});