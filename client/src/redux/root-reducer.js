import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userReducer from './user/user.reducer';
import notificationReducer from './notification/notification.reducer';

import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  user: userReducer,
  notification: notificationReducer
});


export default persistReducer(persistConfig, rootReducer);