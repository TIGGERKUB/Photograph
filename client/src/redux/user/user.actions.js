import axios from 'axios';
import setAuthorizationToken from '../../axios/axios.defaults';
import jwt_decode from 'jwt-decode';

import * as actionTypes from './user.types';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token,username) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        username: username
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    // localStorage.removeItem('visited');
    setAuthorizationToken(null);
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const login = (username,password) => {
    return async dispatch => {
        const authData = {
            username: username,
            password: password
        };
        const url = '/auth/signin';
        await dispatch(auth(authData,url));
    }
}

export const register = (email,username,password) => {
    return async dispatch => {
        const authData = {
            email: email,
            username: username,
            password: password
        };
        const url = '/auth/signup';
        await dispatch(auth(authData,url));
    }
}

export const auth = (authData,url) => {
    return async dispatch => {
        dispatch(authStart());
        await axios.post(url, authData)
            .then(response => {
                console.log(response);
                // console.log(response);
                //const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                 const expirationDate = new Date(new Date().getTime() + 864000 * 1000);
                 localStorage.setItem('token', response.data.token);
                 localStorage.setItem('expirationDate', expirationDate);
                 setAuthorizationToken(response.data.token);
                 if(response.data.token){
                    const result = jwt_decode(response.data.token);
                    dispatch(authSuccess(response.data.token,result.username));
                 }
                //  const username = jwt_decode(response.data.token);
                //  console.log("username = " + username);
                //  dispatch(authSuccess(response.data.token,username));
                 //dispatch(checkAuthTimeout(response.data.expiresIn));
                 dispatch(checkAuthTimeout(864000));
            })
            .catch(err => {
                console.log(err.response.data);
                dispatch(authFail(err.response.data));
            });
    };
};

export const authCheckState = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
           await dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                await dispatch(logout());
            } else {
                if(token){
                    const result = await jwt_decode(token);
                    await dispatch(authSuccess(token,result.username));
                 }
               await dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    };
};