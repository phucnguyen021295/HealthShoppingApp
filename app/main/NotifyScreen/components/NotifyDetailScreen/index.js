/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 22/03/2021.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {ScrollView, View} from 'react-native';

import SafeAreaViewBase from '../../../../base/components/SafeAreaViewBase';
import HeaderCustom from '../../../../base/components/HeaderCustom';
import LinearGradient from '../../../../base/components/LinearGradient';
import ImageBackGround from '../../../../base/components/ImageBackGround';
import {widthToDP} from '../../../../core/utils/dimension';
import Text, {MediumText} from '../../../../base/components/Text';
import {convertDate} from '../../../../utils/convertDate';

import styles, {CUSTOM_STYLES} from './styles/index.css';
import FastImage from 'react-native-fast-image';

function NotifyDetailScreen(props) {
  const {route} = props;
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <SafeAreaViewBase />
      <HeaderCustom
        title={'Thông báo'}
        color={'#ffffff'}
        ViewComponent={LinearGradient}
      />
      <ImageBackGround
        source={require('../../../../images/backgroundHome.png')}
        blurRadius={4}>
        <ScrollView contentContainerStyle={{paddingHorizontal: widthToDP(20), backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View style={styles.imageRow}>
            <FastImage source={{uri: item.image150}} style={styles.image150} />
            <View style={styles.body}>
              <FastImage
                source={{uri: item.image500}}
                style={styles.image500}
              />
              <Text text={convertDate(item.time)} style={styles.date} />
              <MediumText text={item.title} style={styles.title} />
              <Text text={item.des} style={styles.des} />
            </View>
          </View>
        </ScrollView>
      </ImageBackGround>
      <SafeAreaViewBase />
    </View>
  );
}

export default NotifyDetailScreen;
