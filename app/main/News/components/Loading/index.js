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

const HEIGHT_CONTENT = heightToDP(80);
const WIDTH_CONTENT = widthToDP(360);
const WIDTH_CONTENT_250 = widthToDP(250);
const WIDTH_CONTENT_230 = widthToDP(230);
const WIDTH_CONTENT_160 = widthToDP(160);
const X_CONTENT_20 = widthToDP(20);
const X_CONTENT_90 = widthToDP(90);
const HEIGHT_CONTENT_10 = heightToDP(10);
const Y_CONTENT_15 = heightToDP(15);
const Y_CONTENT_20 = heightToDP(20);
const Y_CONTENT_40 = heightToDP(40);
const Y_CONTENT_60 = heightToDP(60);

function Loading() {
  return (
    <ContentLoader
      height={HEIGHT_CONTENT}
      speed={2}
      backgroundColor={'#cbcbcb'}
      foregroundColor={'#dddddd'}
      viewBox={`0 0 ${WIDTH_CONTENT} ${HEIGHT_CONTENT}`}>
      <Circle x={X_CONTENT_20} y={Y_CONTENT_15} cx="26" cy="26" r="26" />
      <Rect
        x={X_CONTENT_90}
        y={Y_CONTENT_20}
        rx="5"
        ry="5"
        width={WIDTH_CONTENT_250}
        height={HEIGHT_CONTENT_10}
      />
      <Rect
        x={X_CONTENT_90}
        y={Y_CONTENT_40}
        rx="5"
        ry="5"
        width={WIDTH_CONTENT_160}
        height={HEIGHT_CONTENT_10}
      />
      <Rect
        x={X_CONTENT_90}
        y={Y_CONTENT_60}
        rx="5"
        ry="5"
        width={WIDTH_CONTENT_230}
        height={HEIGHT_CONTENT_10}
      />
    </ContentLoader>
  );
}

export default Loading;
