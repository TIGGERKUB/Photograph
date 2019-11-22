import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import notificationReducer from './notification/notification.reducer'
import galleryReducer from './data/data.reducer'

const persistConfig = {
  key: "photograph",
  storage
};
const rootReducer = combineReducers({
  notification: notificationReducer,
  gallery: galleryReducer
});

export default persistReducer(persistConfig,rootReducer)
