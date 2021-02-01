/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 11/1/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {View, SafeAreaView} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

// Components
import HeaderCustom from '../../base/components/HeaderCustom';
import LinearGradient from '../../base/components/LinearGradient';
import Text from '../../base/components/Text';

// styles
import styles from './styles/index.css';
import global from '../../global';

function ShowQRCodeScreen(props) {
  const {membercode, image} = global;
  const urlImage = image
    ? {uri: image}
    : require('../HomeScreen/styles/images/avatar.png');
  return (
    <View style={styles.container}>
      <HeaderCustom
        title={'Mã QR Code của '}
        color={'#ffffff'}
        ViewComponent={LinearGradient}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{borderWidth: 3, borderColor: '#ffffff'}}>
          <QRCode
            value={membercode}
            logo={urlImage}
            logoSize={80}
            size={250}
            logoBackgroundColor="#ffffff"
            logoBorderRadius={40}
          />
        </View>
        <Text
          text={'Bạn có thể dùng mã QR Code này để chia sẻ cho bạn bè'}
          style={styles.textNote}
        />
      </View>
      <SafeAreaView style={styles.styleHeader} />
    </View>
  );
}

export default ShowQRCodeScreen;
