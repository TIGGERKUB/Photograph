import NotificationActionTypes from "./notification.types";

const INITIAL_STATE = {
  hidden: true,
  notificationBox:[]
};
const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotificationActionTypes.NOTIFICATION_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};
export default notificationReducer;