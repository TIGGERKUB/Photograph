import axios from 'axios';

export default function setAuthorizationToken(token) {
    if(token){
        console.log("created headers ");
        axios.defaults.headers.common['authorization-access-token'] = `${token}`;
    }else{
        console.log("deleted headers");
        delete axios.defaults.headers.common['authorization-access-token'];
    }
}