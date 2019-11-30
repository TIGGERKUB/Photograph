const User = require("../models/User");
const Followers = require("../models/Followers");
const Following = require("../models/Following");

const Followers_View = require("../models/Followers_info.View");
const Following_View  = require("../models/Following_info.View");

exports.requestedFriend = (req, res) => {
    // console.log('test');.
    const currentUser = req.username;
    const anotherUser = req.body.username;
    User.findOne({
		where: {
			username: anotherUser
        }
    }).then(another_user => {
        Following.create({
            where: {
                user_id: currentUser,
                following_id:anotherUser,
                status:'Requested'
            }
        }).then(created => {
            res.send('Requested Success');
        }).catch(err => {
            res.status(500).send("Fail! Error -> " + err);
        })
            
    })    
}

