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
import message from '../../../../msg/history';

class WithdrawalLogList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timeCurrent: '0',
      isCancelGetPaidSuccess: false,
      isCancelGetPaidFailure: false,
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
  };

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
            text={formatMessage(message.noData)}
            style={{textAlign: 'center', color: '#ffffff', paddingTop: 30}}
          />
        )}

        <ModalBase
          isVisible={isCancelGetPaidSuccess}
          title={formatMessage(message.titleSuccess)}>
          <View style={styles.btnStyles}>
            <ButtonConfirm
              text={formatMessage(message.btnArgee)}
              onPress={this.onCloseModal}
            />
          </View>
        </ModalBase>

        <ModalBase
          isVisible={isCancelGetPaidFailure}
          title={formatMessage(message.titleFailure)}
          description={formatMessage(message.description2)}>
          <View style={styles.btnStyles}>
            <ButtonConfirm
              text={formatMessage(message.btnClose)}
              onPress={this.onCloseModalFailure}
            />
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
