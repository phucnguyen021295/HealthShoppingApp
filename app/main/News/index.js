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

import React, {PureComponent} from 'react';
import {FlatList, View} from 'react-native';

// Components
import ImageBackGround from '../../base/components/ImageBackGround';
import LinearGradient from '../../base/components/LinearGradient';
import HeaderCustom from '../../base/components/HeaderCustom';
import SafeAreaViewBase from '../../base/components/SafeAreaViewBase';
import {MediumText} from '../../base/components/Text';
import NewItem from './components/NewItem';
import decorateGetList from '../decorateGetList';

// Apis
import {getNewHomeApi} from '../../apis/health';

// styles
import styles from './styles/index.css';

class NewsScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  onScroll = (event) => {
    const {isGetDataFull} = this.props;
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    if (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 500 &&
      !isGetDataFull &&
      !this.progetData
    ) {
      this.progetData = true;
      this.props.getOlder();
    }
  };

  ListFooterComponent() {
    return (
      <MediumText
        text={'Chưa có bài viết nào !'}
        style={{textAlign: 'center', color: '#ffffff'}}
      />
    );
  }

  renderItem = ({item}) => <NewItem item={item} />;

  render() {
    const {data, loadingFirst} = this.props;
    return (
      <View style={styles.container}>
        <SafeAreaViewBase />
        <HeaderCustom
          title={'Tin tức'}
          color={'#ffffff'}
          ViewComponent={LinearGradient}
        />
        <ImageBackGround
          source={require('../../images/backgroundHome.jpeg')}
          blurRadius={4}>
          <FlatList
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.time}
            onScroll={this.onScroll}
            ref={this.setRef}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingTop: 6}}
            ListFooterComponent={
              data.length === 0 && !loadingFirst && this.ListFooterComponent
            }
          />
        </ImageBackGround>
        <SafeAreaViewBase />
      </View>
    );
  }
}

export default decorateGetList(NewsScreen, getNewHomeApi);
