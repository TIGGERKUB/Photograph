import searchActionTypes from './search.types'
import axios from "axios";

export const onSearchChange = character => ({
    type: searchActionTypes.SEARCH_START,
    payload: character
})

export const searchSuccess = targetUser => ({
    type: searchActionTypes.SEARCH_SUCCESS,
    payload: targetUser
})

export const allUser = () => {
    return async dispatch => {
      let url ='/search/all-user';
      await axios.get(url)
      .then(response => {
        console.log(response.data);
        dispatch(searchSuccess(response.data.user));
      })
      .catch(err => {
        // handle error
        console.log("error = " + err);
      });
    }
  }



