import NotificationActionTypes from "./notification.types";
const INITIAL_STATE = {
  hidden: true,
  allRequested: null
};



const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotificationActionTypes.NOTIFICATION_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case NotificationActionTypes.ALLREQUEST_SUCCESS: 
      return {
        ...state,
        allRequested:action.payload.allRequested
      }
    default:
      return state;
  }
};
export default notificationReducer;