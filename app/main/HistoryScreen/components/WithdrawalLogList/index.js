/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 15/01/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {FlatList, View, TextInput, ActivityIndicator} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {withNavigation} from '@react-navigation/compat';

// Components
import Text, {MediumText, SemiBoldText} from '../../../../base/components/Text';
import WithdrawalLogItem from '../WithdrawalLogItem';
import decorateGetList from '../../../decorateGetList';
import Loading from '../../../PurchaseHistoryScreen/components/Loading';

// Apis
import {getPaidApi, cancelGetPaidApi} from '../../../../apis/health';
import {heightToDP} from '../../../../core/utils/dimension';
import styles from '../../../GetPaidScreen/styles/index.css';
import {ButtonConfirm} from '../../../../base/components/ButtonText/ButtonModal';
import ModalBase from '../../../../base/components/ModalBase';

class WithdrawalLogList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timeCurrent: '0',
      isCancelGetPaidSuccess: false,
      isCancelGetPaidFailure: false,
    };
  }

  componentDidMount() {
    // const {navigation} = this.props;
    // this.unsubscribe = navigation.addListener('focus', (e) => {
    //   // Prevent default action
    //   this.props.getNewer();
    // });
    // getOnlineOrderApi();
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
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

  onReport = (id) => {
    cancelGetPaidApi(
      id,
      (data) => {
        this.setState({isCancelGetPaidSuccess: true});
      },
      () => {
        this.setState({isCancelGetPaidFailure: true});
      },
    );
  };

  onCloseModal = () => {
    this.setState({isCancelGetPaidSuccess: false}, () => {
      this.props.getNewer();
    });
  };

  onCloseModalFailure = () => {
    this.setState({isCancelGetPaidFailure: false});
  }

  onViewableItemsChanged = ({viewableItems, changed}) => {};

  renderItem = ({item}) => (
    <WithdrawalLogItem item={item} onReport={this.onReport} />
  );

  render() {
    const {isCancelGetPaidSuccess, isCancelGetPaidFailure} = this.state;
    const {data, loadingFirst, loadingNewer, intl} = this.props;
    const {formatMessage} = intl;

    return (
      <View style={{flex: 1}}>
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.time}
            onScroll={this.onScroll}
            ref={this.setRef}
            showsVerticalScrollIndicator={false}
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
            text={'Chưa có đơn chờ xử lý nào'}
            style={{textAlign: 'center', color: '#ffffff', paddingTop: 30}}
          />
        )}

        <ModalBase
          isVisible={isCancelGetPaidSuccess}
          title={'Yêu cầu thành công!'}>
          <View style={styles.btnStyles}>
            <ButtonConfirm text={'Đòng ý'} onPress={this.onCloseModal} />
          </View>
        </ModalBase>

        <ModalBase
          isVisible={isCancelGetPaidFailure}
          title={'êu cầu thất bại!'}
          description={'Đã có lỗi xảy ra. Vui lòng thử lại sau.'}>
          <View style={styles.btnStyles}>
            <ButtonConfirm text={'Đóng'} onPress={this.onCloseModalFailure} />
          </View>
        </ModalBase>
      </View>
    );
  }
}

WithdrawalLogList.propTypes = {
  intl: intlShape.isRequired,
};

export default decorateGetList(
  injectIntl(withNavigation(WithdrawalLogList)),
  getPaidApi,
  // {page: 1},
);
