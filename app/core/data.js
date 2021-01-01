/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 12/27/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {getProductsApi} from '../apis/health';
import {replaceProduct} from '../core/db/table/product';

export const handleGetProducts = () => {
  getProductsApi(
    (response) => {
      const {data} = response;
      for (let i = 0; i < data.length; i++) {
        replaceProduct(data[i]);
      }
    },
    () => {},
  );
};
