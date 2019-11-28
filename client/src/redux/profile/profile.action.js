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
    payload: result
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
        console.log(response.data.user);
        dispatch(profileSuccess(response.data.user));
      })
      .catch(err => {
        // handle error
        console.log("error = " + err);
      });
  };
};

// edit

export const editProfileStart = () => {
  return {
    type: actionTypes.EDIT_PROFILE_START
  };
};
export const editProfileSuccess = profileData => {
  return {
    type: actionTypes.EDIT_PROFILE_SUCCESS,
    payload:profileData
  };
};
export const editProfileFailure = error => {
  return {
    type: actionTypes.EDIT_PROFILE_FAILURE,
    error: error
  };
};

export const editProfile = (info) => {
  return dispatch => {
    console.log(info);
    dispatch(editProfileStart());
    // uploadPhotoS3andDB and Update ProfileInfo to database
    uploadPhotoS3andProfileInfo(dispatch,info.file,info);
  }
};



function uploadPhotoS3andProfileInfo(dispatch,file,info){
  const data = new FormData();
  data.append( 'profileImage',file,file.name );
  console.log('data : '+ data);
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
          // dispatch(editProfileFailure('error : Max size: 2MB'));
          // errorMesage="error : Max size: 2MB";
        } else {
          console.log( 'errpr : ' + response.data.error );
          // // dispatch(editProfileFailure(response.data.error));
          // errorMesage = response.data.error;
          // If not the given file type
          // this.ocShowAlert( response.data.error, 'red' );
        }
      } else {
        // Success
        let fileName = response.data;
        let locationPhoto = response.data.location;
        console.log( 'fileName', fileName );
        // this.ocShowAlert( 'File Uploaded', '#3089cf' );
        console.log( 'File Uploaded');
        updateProfileInfo(dispatch,info,locationPhoto);
        // dispatch(editProfileSuccess(info));
          //start update data to database
        }
      }
    }).catch( ( err ) => {
    // If another error
    console.log( 'errpr : ' + err );
    // dispatch(editProfileFailure(error));
    })
}

function updateProfileInfo(dispatch,info,locationPhoto){
  console.log('updateProfileInfo |action|');
  const profileData = {
    first_name:info.firstname,
    last_name:info.lastname,
    birthday:info.birth,
    phone:info.phone,
    bio:info.bio,
    avatar:locationPhoto
  };
  let url = '/profile/profile-update';
  axios.post(url, profileData)
  .then(response => {
    console.log('status : ' + response.data);
    console.log(profileData);
    dispatch(editProfileSuccess(profileData));
  })
  .catch(err => {
    console.log('err : '+err);
  })
  
}