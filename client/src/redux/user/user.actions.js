import axios from 'axios';

import * as actionTypes from './user.types';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, username) => {
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
    localStorage.removeItem('username');
    localStorage.removeItem('persist:root')
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
    return dispatch => {
        const authData = {
            username: username,
            password: password
        };
        const url = '/users/login';
        dispatch(auth(authData,url));
    }
}

export const register = (email,username,password) => {
    return dispatch => {
        const authData = {
            email: email,
            username: username,
            password: password
        };
        const url = '/users/register';
        dispatch(auth(authData,url));
    }
}

export const auth = (authData,url) => {
    return dispatch => {
        dispatch(authStart());
        
        axios.post(url, authData)
            .then(response => {
              
                console.log(response);
                // console.log(response);
                 const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                 localStorage.setItem('token', response.data.token);
                 localStorage.setItem('expirationDate', expirationDate);
                 localStorage.setItem('username', response.data.username);
                 dispatch(authSuccess(response.data.token, response.data.username));
                 dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
    };
};

// export const setAuthRedirectPath = (path) => {
//     return {
//         type: actionTypes.SET_AUTH_REDIRECT_PATH,
//         path: path
//     };
// };

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const username = localStorage.getItem('username');
                dispatch(authSuccess(token, username));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};