/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 10/4/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import SQLite from 'react-native-sqlite-storage';

// import {product} from './table/product/modal';

SQLite.DEBUG(true);
SQLite.enablePromise(false);

const database_name = 'health.db';
const database_version = '1.0';
const database_displayname = 'SQLite Database';
const database_size = 20 * 1024 * 1024;
let db = null;

const open = () => {
  if (db != null) {
    return db;
  }
  db = SQLite.openDatabase(
    database_name,
    database_version,
    database_displayname,
    database_size,
    () => {},
    () => {},
  );
  return db;
};

const close = () => {
  if (db) {
    db.close();
    db = null;
  }
};

const initDatabase = (success, failure) => {
  db = open();
  db.transaction(function (txn) {
    // Tạo bảng product
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='product'",
      [],
      function (tx, res) {
        if (res.rows.length === 0) {
          tx.executeSql('DROP TABLE IF EXISTS product');
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS product(id INTEGER PRIMARY KEY AUTOINCREMENT, productid TEXT, title TEXT, des TEXT, quality INTEGER, image TEXT, pv INTEGER, brief TEXT, priceusd INTEGER, image150 TEXT, image500 TEXT)',
          );
          tx.executeSql(
            'CREATE UNIQUE INDEX idx_positions_title ON product (productid)',
          );
        }
      },
    );

    // Tạo bảng shopping
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='shopping'",
      [],
      function (tx, res) {
        if (res.rows.length === 0) {
          tx.executeSql('DROP TABLE IF EXISTS shopping');
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS shopping(packid TEXT, productid TEXT, nameProduct TEXT, namePack TEXT, packpriceusd TEXT, image TEXT, quantity INTEGER, total INTEGER)',
          );
          tx.executeSql(
            'CREATE UNIQUE INDEX idx_positions_shopping ON shopping (packid, productid)',
          );
        }
      },
    );

    // Tạo bảng transaction_history
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='transaction_history'",
      [],
      function (tx, res) {
        if (res.rows.length === 0) {
          tx.executeSql('DROP TABLE IF EXISTS transaction_history');
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS transaction_history(transactionId TEXT, description TEXT, totalPrice INTEGER, accountBalance INTEGER, time INTEGER)',
          );
        }
      },
    );

    // Tạo bảng package_product
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='package_product'",
      [],
      function (tx, res) {
        if (res.rows.length === 0) {
          tx.executeSql('DROP TABLE IF EXISTS package_product');
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS package_product(packid TEXT, title TEXT, productid TEXT, quantity TEXT, type TEXT, countryid TEXT, membertype TEXT, bonus TEXT, onlinequota TEXT, packpriceusd INTEGER, packpv INTEGER)',
          );
          tx.executeSql(
            'CREATE UNIQUE INDEX idx_positions_package ON package_product (packid, productid)',
          );
        }
      },
    );
  });
};

const replaceDataBase = (query = '', values = [], success, failure) => {
  db = open();
  db.transaction(function (txn) {
    txn.executeSql(query, values, success, failure);
  });
};

const getDatabase = (query, success, failure) => {
  db = open();
  db.transaction(function (txn) {
    txn.executeSql(
      query,
      [],
      (tx, results) => {
        let temp = [];
        if (results.rows.length > 0) {
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
        }
        success(temp);
      },
      failure(),
    );
  });
};

const deleteDataBase = (query, success, failure) => {
  db = open();
  db.transaction(function (txn) {
    txn.executeSql(query, [], success, failure);
  });
};

const sumMoneyTotal = (success, failure) => {
  db = open();
  db.transaction(function (txn) {
    txn.executeSql(
      'select sum(total) totalProduct, sum(packpriceusd * total) totalMoney from shopping',
      [],
      (tx, results) => {
        let temp = [];
        if (results.rows.length > 0) {
          temp.push(results.rows.item(0));
        }
        success(temp);
      },
      failure,
    );
  });
};

export {
  open,
  close,
  initDatabase,
  replaceDataBase,
  getDatabase,
  deleteDataBase,
  sumMoneyTotal,
};
