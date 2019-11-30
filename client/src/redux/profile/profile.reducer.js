import * as actionTypes from './profile.types';
import { updateObject } from '../../shared/utility';

const INITIAL_STATE = {
    username:null,
    no_photo:0,
    no_following:0,
    no_followers:0,
    first_name: null,
    last_name: null,
    birthday: null,
    phone: null,
    bio:null,
    avatar:null,
    photo:null,
    error:null,
    loading: false,
    status: null,
    followers:null,
    following:null
  //   followers: [
  //   {
  //     id: 1,
  //     avatar:
  //       "https://i.ibb.co/djnsQnF/aleksander-borzenets-t-Tfh-Dsh-DEI-unsplash.jpg",
  //     username: "__popound",
  //     status: "following",
  //   },
  //   {
  //     id: 2,
  //     avatar:
  //       "https://i.ibb.co/yk0xD2q/murilo-bahia-VUn-Kf-R2-REGw-unsplash.jpg",
  //     username: "pong.ptw",
  //     status: "none"
  //   },
  //   {
  //     id: 3,
  //     avatar: "https://i.ibb.co/TL05KP7/park-street-Sg9-BGgv-E5rk-unsplash.jpg",
  //     username: "issa_dia",
  //     status: "following"
  //   }
  // ]
    // authRedirectPath: '/'
};

const profileStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true, } );
};

const profileSuccess = (state, action) => {
    return updateObject(state, {
      username: action.payload.user.username,
      no_photo: action.payload.user.no_photo,
      no_followers: action.payload.user.no_followers,
      no_following: action.payload.user.no_following,
      first_name: action.payload.user.first_name,
      last_name: action.payload.user.last_name,
      birthday: action.payload.user.birthday,
      phone: action.payload.user.phone,
      bio: action.payload.user.bio,
      avatar: action.payload.user.profile_pic,

      photo:action.payload.photo,
      following:action.payload.following,
      followers:action.payload.followers,
      status: action.payload.status,
      error: null
    });
  }

const profileFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};


const editProfileSuccess = (state, action) => {
  return updateObject( state, {
    first_name:action.payload.firstname,
    last_name:action.payload.lastname,
    birthday:action.payload.birth,
    phone:action.payload.phone,
    bio:action.payload.bio,
    avatar:action.payload.avatar,
    error: null
  });
};


const createPostSuccess = (state, action) => {
  return updateObject( state, {
    photo: action.payload.photo,
    error: null
  });
};

const clearStateSuccess = (state, action) => {
  return updateObject( state, {
    username:null,
    no_photo:0,
    no_following:0,
    no_followers:0,
    first_name: null,
    last_name: null,
    birthday: null,
    phone: null,
    bio:null,
    avatar:null,
    photo:null,
    status: null,
    followers:null,
    following:null,
    loading: false,
    error: null
  });
};
// const setAuthRedirectPath = (state, action) => {
//     return updateObject(state, { authRedirectPath: action.path })
// }

const profileReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case actionTypes.PROFILE_START: return profileStart(state, action);
        case actionTypes.PROFILE_SUCCESS: return profileSuccess(state, action);
        case actionTypes.PROFILE_FAIL: return profileFail(state, action);

        case actionTypes.EDIT_PROFILE_SUCCESS: return editProfileSuccess(state, action);
        // case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);

        case actionTypes.CREATE_POST_SUCCESS: return createPostSuccess(state, action);

        case actionTypes.CLEAR_PROFILE_STATE: return clearStateSuccess(state, action);
        default:
            return state;
    }
};

export default profileReducer;
