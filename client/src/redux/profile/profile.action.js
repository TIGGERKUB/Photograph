import axios from 'axios';
import * as actionTypes from './profile.types';
// import covertArr from '../../shared/objConvertArr';

export const profileStart = () => {
    return {
        type: actionTypes.PROFILE_START
    };
};

export const profileSuccess = (result) => {
    return {
        type: actionTypes.PROFILE_SUCCESS,
        username:result.username,
        no_photo:result.no_photo,
        no_following:result.no_following,
        no_follwers:result.no_follwers
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
        // const visited = localStorage.getItem('visited');
        const url = '/profile/'+ 'a';
        axios.get(url)
        .then(response => {
            console.log();
            // handle success
            //  const result = covertArr(response.data.user);
            //  console.log(result[1][1]);
            console.log(response.data.user);
            dispatch(profileSuccess(response.data.user));


        })
        .catch(err => {
            // handle error
            console.log("error = " + err);
        })
    }
}