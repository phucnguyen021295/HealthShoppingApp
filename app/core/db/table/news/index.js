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

export const news = {
  time: 'time',
  title: 'title',
  brief: 'brief',
  image150: 'image150',
  image500: 'image500',
};

export const replaceNews = (news, success = () => {}, failure = () => {}) => {
  const query =
    'REPLACE INTO news(time, title, brief, image150, image500) VALUES (?,?,?,?,?);';
  const values = [
    news.time,
    news.title,
    news.brief,
    news.image150,
    news.image500,
  ];
  replaceDataBase(query, values, success, failure);
};

export const getNews = (success = () => {}, failure = () => {}) => {
  const query = 'SELECT * FROM news';
  getDatabase(query, success, failure);
};
