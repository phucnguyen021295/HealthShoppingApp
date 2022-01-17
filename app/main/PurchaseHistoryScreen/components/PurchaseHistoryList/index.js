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

import React, {PureComponent} from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {withNavigation} from '@react-navigation/compat';

// Components
import Text, {MediumText, SemiBoldText} from '../../../../base/components/Text';
import NotifyItem from '../PurchaseHistoryItem';
import decorateGetList from '../../../decorateGetList';
import Loading from '../Loading';

// Apis
import {getHistoryShoppingApi} from '../../../../apis/health';

import {heightToDP} from '../../../../core/utils/dimension';
import message from '../../../../msg/purchaseHistory';


class PurchaseHistoryList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timeCurrent: '0',
    };
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
    const {loadingOlder} = this.props;
    if (loadingOlder) {
      return <Loading />;
    }

    return null;
  }

  renderListLoading() {
    return (
      <View style={{alignItems: 'center', paddingTop: heightToDP(30)}}>
        <ActivityIndicator size={'small'} color="#ffffff" />
      </View>
    );
  }

  onViewableItemsChanged = ({viewableItems, changed}) => {};

  renderItem = ({item}) => <NotifyItem item={item} />;

  render() {
    const {timeCurrent} = this.state;
    const {data, loadingFirst, loadingNewer, intl} = this.props;
    const {formatMessage} = intl;

    return (
      <View style={{flex: 1}}>
        {/*<View style={styles.search}>*/}
        {/*  <Ionicons name={'ios-search-outline'} size={22} color={'#dddddd'} />*/}
        {/*  <TextInput*/}
        {/*    style={styles.textInput}*/}
        {/*    placeholder={'Tìm kiếm'}*/}
        {/*    placeholderTextColor={'#dddddd'}*/}
        {/*    selectionColor={'#ffffff'}*/}
        {/*  />*/}
        {/*</View>*/}
        <View style={{flex: 1}}>
          {data.length > 0 ? (
            <FlatList
              data={data}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.time}
              onScroll={this.onScroll}
              ref={this.setRef}
              showsVerticalScrollIndicator={false}
              // ListHeaderComponent={this.ListHeaderComponent}
              ListFooterComponent={
                data.length === 0 && !loadingFirst && this.ListFooterComponent
              }
              onViewableItemsChanged={this.onViewableItemsChanged}
              contentContainerStyle={{paddingBottom: 60}}
            />
          ) : loadingNewer ? (
            this.renderListLoading()
          ) : (
            <SemiBoldText
              text={formatMessage(message.noData)}
              style={{textAlign: 'center', color: '#ffffff', paddingTop: 30}}
            />
          )}
        </View>
      </View>
    );
  }
}

PurchaseHistoryList.propTypes = {
  intl: intlShape.isRequired,
};

export default decorateGetList(
  injectIntl(withNavigation(PurchaseHistoryList)),
  getHistoryShoppingApi,
  {page: 1},
);
