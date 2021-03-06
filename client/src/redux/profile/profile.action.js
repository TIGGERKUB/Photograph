import axios from "axios";
import * as actionTypes from "./profile.types";
import jwt_decode from "jwt-decode";

export const profileStart = () => {
  return {
    type: actionTypes.PROFILE_START
  };
};

export const profileSuccess = (info) => {
  return {
    type: actionTypes.PROFILE_SUCCESS,
    payload:info
  };
};

export const profileFail = error => {
  return {
    type: actionTypes.PROFILE_FAIL,
    error: error
  };
};

export const profileInfo = username => {
  return async dispatch => {
    dispatch(profileStart())
    let url = "/profile/" + username;
    if (!username) {
      localStorage.getItem("token");
      const result = jwt_decode(localStorage.getItem("token"));
      url = "/profile/" + result.username;
    }
    await axios.get(url)
      .then(response => {
        if (!response.data.user) {
          console.log("user not found!!");
        }
        dispatch(profileSuccess(response.data));

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

export const editProfile = (info,avatar) => {
  return async dispatch => {
    await dispatch(editProfileStart());
    if(info.file){
      await uploadPhotoS3andProfileInfo(dispatch,info,'edit');
    }else{
      await updateProfileInfo(dispatch,info,avatar,'edit');
    }
  }
};

export const createPostSuccess = postData => {
  return {
    type: actionTypes.CREATE_POST_SUCCESS,
    payload:postData
  };
};

export const createPost = newPost => {
  return async dispatch => {
    console.log(newPost);
    await uploadPhotoS3andProfileInfo(dispatch,newPost,'postPhoto');
  }
}

export const clearStateSuccess = () => {
  return {
    type: actionTypes.CLEAR_PROFILE_STATE
  };
};

export const clearState = () => {
  return async dispatch => {
    await dispatch(clearStateSuccess());
  }
}

export const followRequest = () => {
  return{
    type: actionTypes.FOLLOW_REQUEST
  }
}

function uploadPhotoS3andProfileInfo(dispatch,info,task){
  const data = new FormData();
  data.append( 'profileImage',info.file,info.file.name );
  console.log('data : '+ data);
  let url = null;
  if(task === 'edit'){
    url = '/profile/profile-img-upload';
  }else{
    url = '/profile/create-post-img-upload';
  }
  axios.post( url, data, {
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
        updateProfileInfo(dispatch,info,locationPhoto,task);
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

function updateProfileInfo(dispatch,info,locationPhoto,task){
  console.log('updateProfileInfo |action|');
  let profileData = null;
  let url =null;
  if(task === 'edit'){
    profileData = {
      first_name:info.firstname,
      last_name:info.lastname,
      birthday:info.birth,
      phone:info.phone,
      bio:info.bio,
      avatar:locationPhoto
    };
    url = '/profile/profile-update';
  }else{
    profileData = {
      photo:locationPhoto,
      caption:info.caption
    };
    url = '/profile/create-post';
  }

  axios.post(url, profileData)
  .then(response => {
    console.log('status : ' + response.data);
    console.log(response.data);
    if(task === 'edit'){

      dispatch(editProfileSuccess(profileData));
    }else{
      dispatch(createPostSuccess(response.data));
    }
  })
  .catch(err => {
    console.log('err : '+err);
  })
}

