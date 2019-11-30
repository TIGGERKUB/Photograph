const Followers = require("../models/Followers");
const Following = require("../models/Following");

const Following_View = require("../models/Following_info.View");

exports.requestedFriend = (req, res) => {
    const currentUser = req.currentUserID;
    const anotherUser = req.anotherUserID;
    Following.create({
        user_id: currentUser,
        following_id:anotherUser,
        status:'Requested'
    }).then(created => {
        res.send('Requested Success');
    }).catch(err => {
        res.status(500).send("Fail! Error -> " + err);
    })
}


exports.cancelRequestedFriend = (req, res) => {
    const currentUser = req.currentUserID;
    const anotherUser = req.anotherUserID;
    Following.destroy({
        where: {
            user_id:currentUser,
            following_id:anotherUser
        }
    }).then(deleted => {
        res.send('cancel requested friend Success');
    }).catch(err => {
        res.status(500).send("Fail! Error -> " + err);
    })
}



exports.acceptRequest = (req, res) => {
    const currentUser = req.currentUserID;
    const anotherUser = req.anotherUserID;
    Following.findOne({
        where: {
            user_id: anotherUser,
            following_id:currentUser
        }
    }).then(following => {
        following.update({
            status: 'Following'
        }).then(successAccept => {
            Followers.create({
                user_id:currentUser,
                follower_id:anotherUser
            }).then(createdFollower => {
                res.send('accept friend Success');
            }).catch(err => {
                res.status(500).send("Fail! Error -> " + err);
            })
        }).catch(err => {
            res.status(500).send("Fail! Error -> " + err);
        })
    }).catch(err => {
        res.status(500).send("Fail! Error -> " + err);
    })
}


exports.unfollow = (req, res) => {
    const currentUser = req.currentUserID;
    const anotherUser = req.anotherUserID;
    Following.destroy({
        where: {
            user_id: currentUser,
            following_id:anotherUser
            }
        }).then(destroyFollowing => {
            Followers.destroy({
                where: {
                    user_id:anotherUser,
                    follower_id:currentUser
                }
            }).then(destroyFollower => {
                res.send('unfriend Success');
            })
        }).catch(err => {
            res.status(500).send("Fail! Error -> " + err);
    }).catch(err => {
        res.status(500).send("Fail! Error -> " + err);
    })
}


exports.allRequested = (req, res) => {
    const currentUser = req.currentUserID;
    Following_View.findAll({
        where: {
            user_id: currentUser,
            status: 'Requested'
        }
    }).then(all_requested => {
        res.status(200).json({allRequested:all_requested});
    }).catch(err => {
        res.status(200).json({allRequested:'no_requested'});
    })
}
