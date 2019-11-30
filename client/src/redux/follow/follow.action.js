import axios from "axios";

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

export const unfollow = (anotherUser) => {
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