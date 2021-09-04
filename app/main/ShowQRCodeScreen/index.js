/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 11/1/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {injectIntl, intlShape} from 'react-intl';

// Components
import HeaderCustom from '../../base/components/HeaderCustom';
import LinearGradient from '../../base/components/LinearGradient';
import Text from '../../base/components/Text';
import SafeAreaViewBase from '../../base/components/SafeAreaViewBase';

// styles
import styles from './styles/index.css';
import global from '../../global';

import message from '../../msg/showQRCode';

function ShowQRCodeScreen(props) {
  const {membercode, image} = global;
  const {intl} = props;
  const {formatMessage} = intl;
  const urlImage = image
    ? {uri: image}
    : require('../HomeScreen/styles/images/avatar.png');
  return (
    <View style={styles.container}>
      <SafeAreaViewBase />
      <HeaderCustom
        title={formatMessage(message.titleHeader)}
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
          text={formatMessage(message.shareQRCode)}
          style={styles.textNote}
        />
      </View>
      <SafeAreaViewBase />
    </View>
  );
}

ShowQRCodeScreen.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(ShowQRCodeScreen);
