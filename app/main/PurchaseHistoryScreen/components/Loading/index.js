/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 25/04/2021.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import {heightToDP, widthToDP} from '../../../../core/utils/dimension';

const HEIGHT_CONTENT = heightToDP(120);
const WIDTH_CONTENT = widthToDP(360);
const WIDTH_CONTENT_250 = widthToDP(320);
const X_CONTENT_90 = widthToDP(20);
const X_CONTENT_20 = widthToDP(20);
const HEIGHT_CONTENT_175 = heightToDP(120);
const HEIGHT_CONTENT_10 = heightToDP(10);
const Y_CONTENT_15 = heightToDP(15);
const Y_CONTENT_200 = heightToDP(200);
const Y_CONTENT_220 = heightToDP(220);
const Y_CONTENT_240 = heightToDP(240);
const Y_CONTENT_260 = heightToDP(260);
const Y_CONTENT_280 = heightToDP(280);

function Loading() {
  return (
    <ContentLoader
      height={HEIGHT_CONTENT}
      speed={1}
      backgroundColor={'#cbcbcb'}
      foregroundColor={'#e3e1e1'}
      viewBox={`0 0 ${WIDTH_CONTENT} ${HEIGHT_CONTENT}`}>
      <Rect x={X_CONTENT_20} y={Y_CONTENT_15} rx="5" ry="5" width={WIDTH_CONTENT_250} height={HEIGHT_CONTENT_175} />
    </ContentLoader>
  );
}

export default Loading;
