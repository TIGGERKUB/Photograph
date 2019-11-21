import { combineReducers } from "redux";
import notificationReducer from './notification/notification.reducer'

export default combineReducers({
  notification: notificationReducer
});
