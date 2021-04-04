/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 20/03/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import firebase from 'react-native-firebase';
import {Platform} from 'react-native';

const FCM_CHANNEL_ID = 'MyNewWayId';
const FCM_CHANNEL_NAME = 'My New Way';
const FCM_CHANNEL_DES = 'My New Way';

// Cấp quyên thông báo
function requestPermission(success, failure) {
  firebase.messaging().requestPermission().then(success).catch(failure);
}

// Trả về TokenFirebase mới nhất
function getTokenFirebase(success, failure) {
  firebase.messaging().getToken().then(success).catch(failure);
}

function registerTokenRefresh(callback) {
  firebase.messaging().onTokenRefresh(callback);
}

function setChanel() {
  if (Platform.OS === 'android') {
    const channel = new firebase.notifications.Android.Channel(
      FCM_CHANNEL_ID,
      FCM_CHANNEL_NAME,
      firebase.notifications.Android.Importance.Max,
    ).setDescription(FCM_CHANNEL_DES);

    // Create the channel
    firebase.notifications().android.createChannel(channel);
  }
}

function registerMessageHandler(callback) {
  return firebase.messaging().onMessage(callback);
}

function registerNotificationDisplay(callback) {
  return firebase.notifications().onNotificationDisplayed(callback);
}

const registerNotificationOpened = (callback) => {
  return firebase.notifications().onNotificationOpened(callback);
};

const registerNotification = (callback) => {
  return firebase.notifications().onNotification(callback);
};

const registerInitialNotification = (callback) => {
  firebase.notifications().getInitialNotification().then(callback);
};

const removeDeliveredNotification = (id) => {
  firebase.notifications().removeDeliveredNotification(id);
};

const removeDeliveredNotificationsByTag = (id) => {
  firebase.notifications().android.removeDeliveredNotificationsByTag(id);
};

const displayNotification = (notification) => {
  firebase.notifications().displayNotification(notification);
};

const cancelNotification = (id) => {
  firebase.notifications().cancelNotification(id);
};

const cancelAllNotifications = () => {
  firebase.notifications().cancelAllNotifications();
};

const scheduleNotification = (notification, options) => {
  firebase.notifications().scheduleNotification(notification, options);
};

const createNotification = () => {
  return new firebase.notifications.Notification();
};

const setBadge = (count) => {
  firebase.notifications().setBadge(count);
};

export {
  requestPermission,
  getTokenFirebase,
  registerTokenRefresh,
  setChanel,
  registerMessageHandler,
  registerNotificationDisplay,
  registerNotificationOpened,
  registerNotification,
  registerInitialNotification,
  removeDeliveredNotification,
  removeDeliveredNotificationsByTag,
  displayNotification,
  cancelNotification,
  cancelAllNotifications,
  scheduleNotification,
  createNotification,
  setBadge,
};
