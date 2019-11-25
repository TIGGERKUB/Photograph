// import * as actionTypes from './profile.types'
const INITIAL_STATE = {
  followers: [
    {
      id: 1,
      avatar:
        "https://i.ibb.co/djnsQnF/aleksander-borzenets-t-Tfh-Dsh-DEI-unsplash.jpg",
      username: "__popound",
      status: "following"
    },
    {
      id: 2,
      avatar:
        "https://i.ibb.co/yk0xD2q/murilo-bahia-VUn-Kf-R2-REGw-unsplash.jpg",
      username: "pong.ptw",
      status: "none"
    },
    {
      id: 3,
      avatar: "https://i.ibb.co/TL05KP7/park-street-Sg9-BGgv-E5rk-unsplash.jpg",
      username: "issa_dia",
      status: "following"
    }
  ]
};
const profileReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}
export default profileReducer;