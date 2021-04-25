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
            height={300}
            speed={1}
            backgroundColor={'#cbcbcb'}
            foregroundColor={'#e3e1e1'}
            viewBox="0 0 360 300">
            <Circle x={20} y={15} cx="26" cy="26" r="26" />
            <Rect x="90" y="15" rx="5" ry="5" width="250" height="175" />
            <Rect x="90" y="200" rx="5" ry="5" width="160" height="10" />
            <Rect x="90" y="220" rx="5" ry="5" width="250" height="10" />
            <Rect x="90" y="240" rx="5" ry="5" width="200" height="10" />
            <Rect x="90" y="260" rx="5" ry="5" width="225" height="10" />
            <Rect x="90" y="280" rx="5" ry="5" width="250" height="10" />
        </ContentLoader>
    );
}

export default Loading;
