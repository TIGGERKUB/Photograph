import axios from "axios";
import * as actionTypes from "./follow.types";
import jwt_decode from "jwt-decode";

export const checkStatus = status => {
    return {
      type: actionTypes.CHECK_STATUS_FRIEND
    };
};

export const status = (friend) => {
    return dispatch => {
      let url = "/profile/status/" + friend;
  
      let statusFriend = null;
      const result = jwt_decode(localStorage.getItem("token"));
      if(friend === result.username){
        statusFriend = 'following'
      }else{
        axios.get(url)
        .then(response => {
          console.log(response.data);
          dispatch(checkStatus(response.data));
        })
        .catch(err => {
          // handle error
          console.log("error = " + err);
        });
      }
    }
  }