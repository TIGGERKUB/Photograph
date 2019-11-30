const User = require("../models/User");
const Photo = require("../models/Photo");
const ProfileView = require("../models/Profile.View");
const Followers = require("../models/Followers_info.View");
const Following = require("../models/Following_info.View");

exports.test = (req, res) => {
    // console.log('test');
    User.findOne({
		where: {
			user_id: req.user_id
		}
	}).then(user => {
        res.json({user:user});
        // console.log('tested');
    }).catch(err => {
        res.status(500).send('Error -> ' + err);
        // console.log('Error = ' + err);
    })
}

exports.profileInfo =(req,res) => {
    console.log('profileInfo');
    const getUsername = req.params.id;
    ProfileView.findOne({
		where: {
			username: getUsername
		}
	}).then(user => {
        // // console.log(user);
        Photo.findAll({
            where: {
                user_id: user.user_id
            }
        }).then(photo => {
            Following.findAll({
                where: {
                    user_id: user.user_id,
                    status: 'Following'
                }
            }).then(following => {
                Followers.findAll({
                    where: {
                        user_id: user.user_id
                    }
                }).then(followers => { 
                    Following.findOne({
                        where: {
                            user_username: req.username,
                            following_username: user.username
                        }
                    }).then(getStatus => {
                        let statusFriend = null;
                        if(req.username === user.username){
                            statusFriend = 'Following'
                        }else if(getStatus.status === 'Following'){
                            statusFriend = getStatus.status
                        }else if(getStatus.status === 'Requested'){
                            statusFriend = getStatus.status
                        }else{
                            statusFriend = 'no no no'
                        }
                        // console.log(statusFriend)
                        // console.log(req.username)
                        // console.log(user.username)
                        // console.log(getStatus)
                        
                        res.json({user:user,photo:photo,following:following,followers:followers,status:statusFriend})
                    }).catch(err => {
                        res.json({user:user,photo:photo,following:following,followers:followers,status:'no_relationship'})
                    })
                })
            })
        })
        
    }).catch(err => {
        res.status(500).send('Error -> ' + err);
        // console.log('Error = ' + err);
    })
}


exports.updatePhotoLinkToDB =(req,res) => {
    console.log('updatePhotoLinkToDB');
//     User.findOne({
// 		where: {
// 			username: req.username
// 		}
// 	})
//     .on('success', function (user) {
//         // Check if record exists in db
//         if (user) {
//         user.update({
//             profile_pic:req.file.location
//         })
//         .success(function () {})
//         }
//   })
    // console.log('test');
    User.findOne({
		where: {
			username: req.username
		}
	}).then(user => {
        user.update({
            profile_pic: req.file.location
        }).then(success => {
            console.log('Success Update file link to DB');
            const imageName = req.file.key;
            const imageLocation = req.file.location;
            // Save the file name into database into profile model
            res.json( {
                image: imageName,
                location: imageLocation
            } );
        }).catch(err => {
            console.log('Can not update file link to DB');
        })
        // console.log('tested');
    }).catch(err => {
        res.status(500).send('Error -> ' + err);
        // console.log('Error = ' + err);
    })
}


exports.updateProfile =(req,res) => {
    console.log('updateProfile |controllers|');
    User.findOne({
		where: {
			username: req.username
		}
	}).then(user => {
        user.update({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            birthday:req.body.birthday,
            phone:req.body.phone,
            bio:req.body.bio
        }).then(success => {
            // console.log('status : '+success);
            
            res.send('Success Update Profile info to DB');
        }).catch(err => {
            console.log('Can not update Profile info to DB');
        })
        // console.log('tested');
    }).catch(err => {
        res.status(500).send('Error -> ' + err);
        // console.log('Error = ' + err);
    })
}

exports.createPost =(req,res) => {
    console.log('createPost |controllers|');
    User.findOne({
		where: {
			username: req.username
		}
	}).then(user => {
        Photo.create({
            photo :   req.body.photo,
            caption : req.body.caption,
            user_id : user.user_id
        }).then(success => {
            // console.log('status : '+success);

            console.log('Success Create Post Photo info to DB');
            Photo.findAll({
                where: {
                    user_id: user.user_id
                }
            }).then(photo => {
                res.json({photo:photo})
            })

        }).catch(err => {
            console.log('Can not Create Post Photo info to DB');
        })
        // console.log('tested');
    }).catch(err => {
        res.status(500).send('Error -> ' + err);
        // console.log('Error = ' + err);
    })
}

exports.testPost = (req, res) => {
    console.log('testPost |controllers|');
    res.json( {
        location: req.file.location
    } );
}


// exports.statusFriend = (req, res) => {
//     console.log("statusFriend |controller|");
//     if(req.username = req.params.id){
        
//     }
   
//    User.findAll({
// 	   where: {
//            username: req.body.username,
           
// 	   }
//    }).then(user => {
// 	   if (!user) {
// 		   return res.status(404).send('User Not Found.');
// 	   }

// 	   var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
// 	   if (!passwordIsValid) {
// 		   return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
// 	   }
	   
// 	   var token = jwt.sign({ username: user.username }, config.secret, {
// 		 expiresIn: 86400 // expires in 24 hours
// 	   });
	   
// 	   res.status(200).json({token:token});
	   
//    }).catch(err => {
// 	   res.status(500).send('Error -> ' + err);
//    });
// }