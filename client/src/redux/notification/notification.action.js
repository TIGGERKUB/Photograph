import NotificationActionTypes from "./notification.types";

export const toggleNotificationHidden = () => ({
  type: NotificationActionTypes.NOTIFICATION_HIDDEN
});

export const addRequestToBox = user => ({
  type: NotificationActionTypes.ADD_REQUEST_TO_BOX,
  payload: user
});
