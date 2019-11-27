const User = require("../models/User");
const ProfileView = require("../models/Profile.View");

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
        res.json({user:user});
        // console.log('profileInfo success');
    }).catch(err => {
        res.status(500).send('Error -> ' + err);
        // console.log('Error = ' + err);
    })
}

exports.edit =(req,res) => {
    console.log('edit profile');
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
            res.json({
                image:req.file.key
            })
        }).catch(err => {
            console.log('Can not update file link to DB');
        })
        // console.log('tested');
    }).catch(err => {
        res.status(500).send('Error -> ' + err);
        // console.log('Error = ' + err);
    })
}

