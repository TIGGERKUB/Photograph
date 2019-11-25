import _ from "lodash";
import searchActionTypes from "./search.types";

const INITIAL_STATE = {
  users: [
    {
      id: 1,
      username: "musicrvy",
      status: "following",
      avatar: "https://i.ibb.co/bKwJCf0/luisa-denu-M-Pj-O6th-MKk-unsplash.jpg"
    },
    {
      id: 2,
      username: "pong.ptw",
      status: "following",
      avatar:
        "https://i.ibb.co/djnsQnF/aleksander-borzenets-t-Tfh-Dsh-DEI-unsplash.jpg"
    },
    {
      id: 3,
      username: "__popound",
      status: "none",
      avatar:
        "https://i.ibb.co/yk0xD2q/murilo-bahia-VUn-Kf-R2-REGw-unsplash.jpg"
    },
    {
      id: 4,
      username: "pluem",
      status: "following",
      avatar: "https://i.ibb.co/TL05KP7/park-street-Sg9-BGgv-E5rk-unsplash.jpg"
    },
    {
      id: 5,
      username: "jui",
      status: "none",
      avatar: "https://i.ibb.co/7J2ZD84/woodwatch-7hye-LUn6388-unsplash.jpg"
    }
  ],
  searchField: ""
};
const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchActionTypes.SEARCH_START:
      return {
        ...state,
        searchField: _.toLower(action.payload)
      };
    default:
      return state;
  }
};
export default searchReducer;
