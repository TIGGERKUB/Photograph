import FeedActionTypes from "./feed.types";
const INITIAL_STATE = {
  posts: [
    {
      id: 1,
      likes: 0,
      comment: [],
      imageUrl:
        "https://i.ibb.co/tBPLhTs/alex-azabache-8-L7m-OETNg-HA-unsplash.jpg",
      avatar: "https://i.ibb.co/7J2ZD84/woodwatch-7hye-LUn6388-unsplash.jpg",
      username: "__popound",
      isLike: false
    },
    {
      id: 2,
      likes: 0,
      comment: [],
      imageUrl:
        "https://i.ibb.co/R71JQHM/pixasquare-4ojhpg-Kp-S68-unsplash.jpg",
      avatar: "https://i.ibb.co/wS3mwNn/mahkeo-RLB93-NSEg-U-unsplash.jpg",
      username: "musicrvy",
      isLike: false
    },
    {
      id: 3,
      likes: 0,
      comment: [],
      imageUrl:
        "https://i.ibb.co/vzF26hK/alex-azabache-QLv-Tm-Zmwbf-M-unsplash.jpg",
      avatar:
        "https://i.ibb.co/C6t1gt1/ruslan-petrov-85-CI5-do-Rvg-unsplash.jpg",
      username: "pong.ptw",
      isLike: false
    }
  ],
  isLike: false
};
const feedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case FeedActionTypes.ADD_LIKE:
        return{
          ...state,
          isLike:!state.isLike
        }
    default:
      return state;
  }
};
export default feedReducer;
