/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 08/02/2021.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {replaceDataBase, getDatabase} from '../../Sqlitedb';

export const notify = {
  time: 'time',
  title: 'title',
  brief: 'brief',
  des: 'des',
  image150: 'image150',
  image500: 'image500',
};

export const replaceNotify = (news, success = () => {}, failure = () => {}) => {
  const query =
    'REPLACE INTO news(time, title, brief, des, image150, image500) VALUES (?,?,?,?,?,?);';
  const values = [
    notify.time,
    notify.title,
    notify.brief,
    notify.des,
    notify.image150,
    notify.image500,
  ];
  replaceDataBase(query, values, success, failure);
};

export const getNotifies = (success = () => {}, failure = () => {}) => {
  const query = 'SELECT * FROM news';
  getDatabase(query, success, failure);
};
