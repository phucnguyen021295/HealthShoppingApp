import * as NOTIFICATION_TYPE from '../core/notification';
import {navigate} from '../../RootNavigation';
import {cancelNotification} from '../core/fcm';

function jsonParse(string) {
  let object = '';
  try {
    object = JSON.parse(string);
  } catch (e) {
    object = '';
  }
  return object;
}

export function handleNotificationOpen(notify) {
  const {notification} = notify;
  const {data} = notification;
  const {NotifyId, Notify, Type} = data;

  const dataNotify = jsonParse(Notify);
  if (!dataNotify) {
    return;
  }

  switch (Type) {
    case NOTIFICATION_TYPE.HISTORY_TYPE:
      navigate('HistoryDetail', {item: dataNotify});
      break;
    case NOTIFICATION_TYPE.NEWS_TYPE:
      navigate('NewDetail', {item: dataNotify});
      break;
    case NOTIFICATION_TYPE.NOTIFY_TYPE:
      navigate('NotifyDetail', {item: dataNotify});
      break;
  }
  cancelNotification(NotifyId);
}
