import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userReducer from './user/user.reducer';
import notificationReducer from './notification/notification.reducer';
import galleryReducer from './data/data.reducer';
import feedReducer from './feed/feed.reducer'

import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  user: userReducer,
  notification: notificationReducer,
  gallery: galleryReducer,
  feed: feedReducer
});


export default persistReducer(persistConfig, rootReducer);
