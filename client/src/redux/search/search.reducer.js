import _ from "lodash";
import searchActionTypes from "./search.types";

const INITIAL_STATE = {
  users: null,
  searchField: ""
};


const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchActionTypes.SEARCH_START:
      return {
        ...state,
        searchField: _.toLower(action.payload)
      };
    case searchActionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        users:action.payload.user
      };
    default:
      return state;
  }
};
export default searchReducer;
