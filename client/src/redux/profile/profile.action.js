import axios from "axios";
import * as actionTypes from "./profile.types";
import jwt_decode from "jwt-decode";
// import covertArr from '../../shared/objConvertArr';

export const profileStart = () => {
  return {
    type: actionTypes.PROFILE_START
  };
};

export const profileSuccess = result => {
  return {
    type: actionTypes.PROFILE_SUCCESS,
    username: result.username,
    no_photo: result.no_photo,
    no_following: result.no_following,
    no_followers: result.no_followers
  };
};

export const profileFail = error => {
  return {
    type: actionTypes.PROFILE_FAIL,
    error: error
  };
};

export const profileInfo = username => {
  return dispatch => {
    // dispatch(profileStart());
    // const visited = localStorage.getItem('visited');
    let url = "/profile/" + username;
    if (!username) {
      localStorage.getItem("token");
      const result = jwt_decode(localStorage.getItem("token"));
      url = "/profile/" + result.username;
    }
    axios.get(url)
      .then(response => {
        //console.log(response);
        if (!response.data.user) {
          console.log("user not found!!");
        }
        // handle success
        //  const result = covertArr(response.data.user);
        //  console.log(result[1][1]);
        // console.log(response.data.user);
        dispatch(profileSuccess(response.data.user));
      })
      .catch(err => {
        // handle error
        console.log("error = " + err);
      });
  };
};

export const editProfileStart = () => {
  return {
    type: actionTypes.EDIT_PROFILE_START
  };
};
export const editProfileSuccess = info => {
  return {
    type: actionTypes.EDIT_PROFILE_SUCCESS,
    payload: info
  };
};
export const editProfileFailure = error => {
  return {
    type: actionTypes.EDIT_PROFILE_FAILURE,
    payload: error
  };
};
export const editProfile = (info) => {
  console.log(info);
  const data = new FormData();
  data.append( 'profileImage',info.file, info.file.name );
  axios.post( '/profile/profile-img-upload', data, {
    headers: {
     'accept': 'application/json',
     'Accept-Language': 'en-US,en;q=0.8',
     'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    }
   })
  .then( ( response ) => {
    if ( 200 === response.status ) {
        // If file size is larger than expected.
      if( response.data.error ) {
        if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
          // this.ocShowAlert( 'Max size: 2MB', 'red' );
          console.log( 'error : Max size: 2MB');
        } else {
          console.log( 'errpr : ' + response.data.error );
          // If not the given file type
          // this.ocShowAlert( response.data.error, 'red' );
        }
      } else {
        // Success
        let fileName = response.data;
        console.log( 'fileName', fileName );
        // this.ocShowAlert( 'File Uploaded', '#3089cf' );
        console.log( 'File Uploaded');

        //start update data to database

      }
    }
  }).catch( ( error ) => {
  // If another error
  console.log( 'errpr : ' + error );
  })
};
