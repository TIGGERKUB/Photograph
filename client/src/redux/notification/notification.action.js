import NotificationActionTypes from "./notification.types";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const toggleNotificationHidden = () => ({
  type: NotificationActionTypes.NOTIFICATION_HIDDEN
});

export const allRequestedSuccess = allRequested => {
  return {
    type: NotificationActionTypes.ALLREQUEST_SUCCESS,
    payload:allRequested
  };
};

export const allRequested = () => {
  return dispatch => {
    const result = jwt_decode(localStorage.getItem("token"));
    let url ='/follow/unfollow/' + result.username;
    axios.post(url)
    .then(response => {
      console.log(response.data);
      dispatch(allRequestedSuccess(response.data));
    })
    .catch(err => {
      // handle error
      console.log("error = " + err);
    });
  }
}

