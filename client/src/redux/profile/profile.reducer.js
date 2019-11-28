import * as actionTypes from './profile.types';
import { updateObject } from '../../shared/utility';

const INITIAL_STATE = {
    username:null,
    no_photo:0,
    no_following:0,
    no_followers:0,
    bio:null,
    avatar:null,
    photo:null,
    error:null,
    loading: false,
    status: "request",
    followers: [
    {
      id: 1,
      avatar:
        "https://i.ibb.co/djnsQnF/aleksander-borzenets-t-Tfh-Dsh-DEI-unsplash.jpg",
      username: "__popound",
      status: "following"
    },
    {
      id: 2,
      avatar:
        "https://i.ibb.co/yk0xD2q/murilo-bahia-VUn-Kf-R2-REGw-unsplash.jpg",
      username: "pong.ptw",
      status: "none"
    },
    {
      id: 3,
      avatar: "https://i.ibb.co/TL05KP7/park-street-Sg9-BGgv-E5rk-unsplash.jpg",
      username: "issa_dia",
      status: "following"
    }
  ]
    // authRedirectPath: '/'
};

const profileStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const profileSuccess = (state, action) => {
    return updateObject( state, {
        username:action.username,
        no_photo:action.no_photo,
        no_following:action.no_following,
        error:null,
    })
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
    avatar:action.payload.locationPhoto,
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
        default:
            return state;
    }
};

export default profileReducer;
