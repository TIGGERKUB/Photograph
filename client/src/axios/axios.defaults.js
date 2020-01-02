import axios from 'axios';

export default function setAuthorizationToken(token) {
    if(token){
        //create header
        axios.defaults.headers.common['authorization-access-token'] = `${token}`;
    }else{
        //delete header
        delete axios.defaults.headers.common['authorization-access-token'];
    }
}