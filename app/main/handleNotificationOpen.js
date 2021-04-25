/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 06/04/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

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
    if(!dataNotify) return;

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
    cancelNotification(NotifyId)
}
