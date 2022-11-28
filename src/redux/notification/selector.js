import notificationReducer from './reducer';

export const getNotificationSelector = state => state.notification.listNotification;

export const getDeviceTokenSelector = state => state.notification.deviceToken;
