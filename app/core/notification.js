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

import {FCM_CHANNEL_ID, SMALL_ICON, displayNotification} from '../core/fcm';

export const NOTIFY_TYPE = 'Notify';
export const NEWS_TYPE = 'News'
export const HISTORY_TYPE = 'History'

export const handleDisplayNotification = notify => {
    notify.android
        .setChannelId(FCM_CHANNEL_ID)
        .setNotificationId(notify.notificationId)
        .android.setSmallIcon(SMALL_ICON);
    displayNotification(notify);
};
