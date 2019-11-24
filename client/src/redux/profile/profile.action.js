import axios from 'axios';
import * as actionTypes from './profile.types';

export const profileStart = () => {
    return {
        type: actionTypes.PROFILE_START
    };
};

export const profileSuccess = (token) => {
    return {
        type: actionTypes.PROFILE_SUCCESS,
        token: token
    };
};

export const profileFail = (error) => {
    return {
        type: actionTypes.PROFILE_FAIL,
        error: error
    };
};

export const profileInfo = () => {
    return dispatch => {
        // dispatch(profileStart());
        const url = '/profile/test';
        // axios.defaults.headers.common['authorization-access-token'] = `${localStorage.getItem("token")}`;
        axios.get(url)
        .then(response => {
            // handle success
            console.log(response);
        })
        .catch(err => {
            // handle error
            console.log("error = " + err);
        })
    }
}