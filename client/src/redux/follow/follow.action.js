import axios from "axios";
import jwt_decode from "jwt-decode";
import * as actionTypes from "./follow.types";

export const sendRequested = (anotherUser) => {
  return dispatch => {
    let url ='/follow/requested-friend/' + anotherUser;
    axios.post(url)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      // handle error
      console.log("error = " + err);
    });
  }
}

export const cancelRequested = (anotherUser) => {
  return dispatch => {
    let url ='/follow/cancel-requested/' + anotherUser;
    axios.post(url)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      // handle error
      console.log("error = " + err);
    });
  }
}

export const acceptRequested = (anotherUser) => {
  return dispatch => {
    let url ='/follow/accept-requested/' + anotherUser;
    axios.post(url)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      // handle error
      console.log("error = " + err);
    });
  }
}

export const sendRequested = (anotherUser) => {
  return dispatch => {
    let url ='/follow/unfollow/' + anotherUser;
    axios.post(url)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      // handle error
      console.log("error = " + err);
    });
  }
}

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

export const allRequestedSuccess = allRequested => {
  return {
    type: actionTypes.ALLREQUEST_SUCCESS,
    payload:allRequested
  };
};