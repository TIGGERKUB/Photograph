import * as actionTypes from './user.types';
import { updateObject } from '../../shared/utility';

const initialState = {
    username:null,
    no_photo:0,
    no_following:0,
    no_follwers:0,
    error:null,
    loading: false
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
        no_follwers:action.no_follwers,
        error:null,
        loading: false
     } );
};

const profileFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};


// const setAuthRedirectPath = (state, action) => {
//     return updateObject(state, { authRedirectPath: action.path })
// }

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.PROFILE_START: return profileStart(state, action);
        case actionTypes.PROFILE_SUCCESS: return profileSuccess(state, action);
        case actionTypes.PROFILE_FAIL: return profileFail(state, action);
        // case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};

export default reducer;