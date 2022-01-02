/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 12/27/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {getProductsApi, getPackageProductsApi} from '../apis/health';
import {replaceProduct} from '../core/db/table/product';
import {replacePackageProduct} from '../core/db/table/package_product';

// Get danh sách sẳn phẩm.
export const handleGetProducts = (success, failure) => {
  getProductsApi(
    (response) => {
      const {data} = response;
      success(data);
      for (let i = 0; i < data.length; i++) {
        replaceProduct(data[i]);
      }
    },
    () => {
      failure();
    },
  );
};

// Get danh sách các gói sản phẩm
export const handleGetPackageProduct = (orderType, success, failure) => {
  getPackageProductsApi(
    orderType,
    (response) => {
      const {data} = response;
      for (let i = 0; i < data.length; i++) {
        // Fix truong hop loc theo type
        if (orderType !== 0 && data[i].packid === -1) {
          data[i].type = orderType;
        }
        replacePackageProduct(data[i]);
      }
      success(data);
    },
    (error) => failure(error),
  );
};

export let callBack = {};
