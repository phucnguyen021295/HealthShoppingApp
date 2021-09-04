/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 10/6/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';
import * as fontSize from '../../../core/fontSize';
import {transparent} from '../../../core/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    btnBottom: {
        position: 'absolute',
        bottom: 34,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
    },

    titleShopping: {
        fontSize: fontSize.normal,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#d7e5fa',
        color: '#666666',
    },

    textName: {
        fontSize: fontSize.normal,
        paddingHorizontal: 20,
        paddingVertical: 8,
        color: '#666666',
    },

    btnButtonStyle: {
        paddingVertical: 12,
        backgroundColor: transparent,
        marginHorizontal: 10,
    },

    total: {
        paddingBottom: 15,
        paddingTop: 8,
        fontSize: fontSize.normal,
    },

    inputContainerStyle: {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#666666',
        backgroundColor: '#ffffff52',
        paddingHorizontal: 12,
        borderRadius: 8,
    },
});

export default styles;
