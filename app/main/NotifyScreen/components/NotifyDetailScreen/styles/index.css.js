/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 08/02/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';
import * as fontSize from '../../../../../core/fontSize';
import {heightToDP} from '../../../../../core/utils/dimension';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageRow: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 12,
        marginBottom: 10,
    },

    image150: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    body: {
        flex: 1,
        marginLeft: 20,
    },

    image500: {
        width: '100%',
        height: 180,
        borderRadius: 6,
    },

    date: {
        color: '#ffffff',
        fontSize: fontSize.normal,
        paddingTop: 12,
    },

    title: {
        color: '#ffffff',
        fontSize: fontSize.large,
        paddingVertical: 12
    },

    des: {
        color: '#ffffff',
        fontSize: fontSize.normal,
    }
});

export const CUSTOM_STYLES = {
    div: {
        color: '#ffffff',
        fontSize: fontSize.large,
        lineHeight: fontSize.large * 1.6,
        fontFamily: 'Roboto-Regular',
        marginBottom: heightToDP(7),
    },
    p: {
        color: '#ffffff',
        fontSize: fontSize.large,
        lineHeight: fontSize.large * 1.6,
        fontFamily: 'Roboto-Regular',
        marginBottom: heightToDP(7),
    },
    br: {
        display: 'none',
    },
    strong: {
        // lineHeight: 32,
        fontFamily: 'Roboto-Medium',
    },
    h1: {
        // marginBottom: heightToDP(10),
        color: '#000',
        fontSize: fontSize.huge,
        lineHeight: fontSize.huge * 1.38,
    },
    h2: {
        marginBottom: heightToDP(7),
        color: '#000',
        fontSize: fontSize.huge,
        lineHeight: fontSize.huge * 1.38,
    },

    h3: {
        marginBottom: heightToDP(7),
        fontSize: fontSize.huge,
        lineHeight: fontSize.huge * 1.38,
    },
    h4: {
        marginBottom: heightToDP(7),
        fontSize: fontSize.huge,
        lineHeight: fontSize.huge * 1.38,
    },
    ul: {
        paddingLeft: 5,
    },
    li: {
        lineHeight: fontSize.normal * 1.53,
        color: '#000',
        fontSize: fontSize.normal,
    },
    a: {
        fontSize: fontSize.normal,
    },

    figure: {
        marginVertical: heightToDP(6),
    },

    img: {
        marginBottom: 5,
        marginHorizontal: 20,
        borderRadius: heightToDP(15),
    },

    i: {
        fontFamily: 'OpenSans-Italic',
    },
};

export default styles;
