/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/20/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Input} from 'react-native-elements';

// Components
import ImageBackGround from '../../base/components/ImageBackGround';
import Text, {MediumText} from '../../base/components/Text';

// Styles
import {color} from '../../core/color';
import styles from './styles/index.css';

function TransferScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackGround
        source={require('./styles/images/background.jpeg')}
        blurRadius={4}>
        <View style={{flex: 1, backgroundColor: '#4846469e'}}>
          <MediumText text={'Nhập thông tin'} style={styles.textInfo} />

          <View>
              <MediumText text={'Mã thành viên:'} style={styles.textRow} />
              <View style={{flexDirection: 'row'}}>
                  <Input
                      placeholder='BASIC INPUT'
                  />
              </View>
          </View>
        </View>
      </ImageBackGround>
    </SafeAreaView>
  );
}

export default TransferScreen;
