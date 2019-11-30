const User = require("../models/User");
getUserID = (req, res, next) => {
    const currentUser = req.username;
    const anotherUser = req.params.username;
    User.findOne({
        where: {
			username: currentUser
        }
    }).then(current_user => {
        User.findOne({
            where: {
                username: anotherUser
            }
        }).then(another_user => {
            req.currentUserID = current_user.user_id,
            req.anotherUserID = another_user.user_id
            console.log(req.currentUserID);
            console.log(req.anotherUserID);
            next();
        })
    }).catch(err => {
        res.status(500).send("Fail! Error -> " + err);
    })
} 


module.exports = getUserID;