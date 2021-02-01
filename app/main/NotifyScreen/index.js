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

// Components
import HeaderCustom from '../../base/components/HeaderCustom';
import LinearGradient from '../../base/components/LinearGradient';
import ImageBackGround from '../../base/components/ImageBackGround';
import Text from '../../base/components/Text';

// styles
import styles from './styles/index.css';

function NotifyScreen(props) {
  return (
    <View style={styles.container}>
      <HeaderCustom
        title={'THÔNG BÁO'}
        color={'#ffffff'}
        showBack={false}
        ViewComponent={LinearGradient}
      />
        <ImageBackGround
            source={require('../../images/backgroundHome.jpeg')}
            blurRadius={4}>
            <Text text={'Chưa có thông báo nào'} style={{textAlign: 'center', fontSize: 18, color: '#ffffff', paddingTop: 20}} />
        </ImageBackGround>
      <SafeAreaView style={styles.styleHeader} />
    </View>
  );
}

export default NotifyScreen;
