import searchActionTypes from './search.types'
import axios from "axios";

export const onSearchChange = character => ({
    type: searchActionTypes.SEARCH_START,
    payload: character
})

export const searchSuccess = allUser => ({
    type: searchActionTypes.SEARCH_SUCCESS,
    payload: allUser
})

export const allUser = () => {
    return dispatch => {
      let url ='/search/all-user';
      axios.get(url)
      .then(response => {
        console.log(response.data);
        dispatch(searchSuccess(response.data));
      })
      .catch(err => {
        // handle error
        console.log("error = " + err);
      });
    }
  }



