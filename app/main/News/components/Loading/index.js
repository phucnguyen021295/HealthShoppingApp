/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 25/04/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';

function Loading() {
    return (
        <ContentLoader
            height={80}
            speed={2}
            backgroundColor={'#f3f3f3'}
            foregroundColor={'#dddddd'}
            viewBox="0 0 360 80">
            <Circle x={20} y={15} cx="26" cy="26" r="26" />
            <Rect x="90" y="20" rx="5" ry="5" width="250" height="10" />
            <Rect x="90" y="40" rx="5" ry="5" width="160" height="10" />
            <Rect x="90" y="60" rx="5" ry="5" width="230" height="10" />
        </ContentLoader>
    );
}

export default Loading;
