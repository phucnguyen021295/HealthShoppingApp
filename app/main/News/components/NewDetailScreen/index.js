/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 08/02/2021.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import HTML from 'react-native-render-html';

// Components
import ImageBackGround from '../../../../base/components/ImageBackGround';
import LinearGradient from '../../../../base/components/LinearGradient';
import HeaderCustom from '../../../../base/components/HeaderCustom';
import SafeAreaViewBase from '../../../../base/components/SafeAreaViewBase';
import Text, {MediumText} from '../../../../base/components/Text';

// Utils
import {convertDate} from '../../../../utils/convertDate';

// styles
import styles from './styles/index.css';
import {widthToDP} from '../../../../core/utils/dimension';
import {CUSTOM_STYLES} from './styles/index.css';

function NewDetailScreen(props) {
  const {route} = props;
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <SafeAreaViewBase />
      <HeaderCustom
        title={'Tin tức'}
        color={'#ffffff'}
        ViewComponent={LinearGradient}
      />
      <ImageBackGround
        source={require('../../../../images/backgroundHome.png')}
        blurRadius={4}>
        <ScrollView contentContainerStyle={{paddingHorizontal: widthToDP(20), backgroundColor: 'rgba(0,0,0,0.5)',}}>
          <MediumText text={item.title} style={styles.title} />
          <Text text={convertDate(item.time)}  style={styles.date} />
            <HTML
              source={{html: item.brief}}
              imagesMaxWidth={Dimensions.get('window').width - 40}
              allowFontScaling={false}
              tagsStyles={CUSTOM_STYLES}
            />
        </ScrollView>
      </ImageBackGround>
      <SafeAreaViewBase />
    </View>
  );
}

export default NewDetailScreen;
