import NotificationActionTypes from "./notification.types";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const toggleNotificationHidden = () => ({
  type: NotificationActionTypes.NOTIFICATION_HIDDEN
});

export const allRequestedSuccess = allRequested => {
  return {
    type: NotificationActionTypes.ALL_REQUEST_SUCCESS,
    payload:allRequested
  };
};

export const allRequested = () => {
  return async dispatch => {
    const result = await jwt_decode(localStorage.getItem("token"));
    let url ='/follow/all-requested/' + result.username;
    await axios.post(url)
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

