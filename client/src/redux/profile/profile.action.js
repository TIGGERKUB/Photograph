import axios from 'axios';
import * as actionTypes from './profile.types';
import jwt_decode from 'jwt-decode';
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
        no_followers:result.no_followers
    };
};

export const profileFail = (error) => {
    return {
        type: actionTypes.PROFILE_FAIL,
        error: error
    };
};

export const profileInfo = (username) => {
    return dispatch => {
        // dispatch(profileStart());
        // const visited = localStorage.getItem('visited');
        let url = '/profile/'+username;
        if(!username){
            localStorage.getItem('token');
            const result = jwt_decode(localStorage.getItem('token'));
            url = '/profile/'+ result.username;
        }
        axios.get(url)
        .then(response => {
            console.log(response);
            if(!response.data.user){
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
        })
    }
}