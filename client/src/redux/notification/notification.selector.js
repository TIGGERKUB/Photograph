import { createSelector } from "reselect";
const selectNotification = state => state.notification;
export const selectNotificationHidden = createSelector(
  [selectNotification],
  notification => notification.hidden
);
export const selectNoticationAllRequest = createSelector(
  [selectNotification],
  notification => notification.allRequested
)