import axios from "axios";

export const sendRequested = (anotherUser) => {
  return async dispatch => {
    let url ='/follow/requested-friend/' + anotherUser;
    await axios.post(url)
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
  return async dispatch => {
    let url ='/follow/cancel-requested/' + anotherUser;
    await axios.post(url)
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
  return async dispatch => {
    let url ='/follow/accept-requested/' + anotherUser;
    await axios.post(url)
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
  return async dispatch => {
    let url ='/follow/unfollow/' + anotherUser;
    await axios.post(url)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      // handle error
      console.log("error = " + err);
    });
  }
}

