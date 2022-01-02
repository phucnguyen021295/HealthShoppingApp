import React, {PureComponent} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {injectIntl, intlShape} from 'react-intl';

// Components
import ImageBackGround from '../../base/components/ImageBackGround';
import ButtonBase from '../../base/components/ButtonBase';
import {MediumText, SemiBoldText} from '../../base/components/Text';
import InputScrollView from '../../base/components/InputScrollView';
import ScanQR from '../HomeScreen/components/ScanQR';
import NotificationModal from '../../base/components/NotificationModal';

// Apis
import {transferApi, getUserApi} from '../../apis/health';
import global, {setAccountBalanceGlobal} from '../../global';
import {broadcastShoppingCardChange} from '../../core/shoppingCart';

// Styles
import styles from './styles/index.css';
import {heightToDP} from '../../core/utils/dimension';

import message from '../../msg/transfer';
import LinearGradient from '../../base/components/LinearGradient';
import HeaderCustom from '../../base/components/HeaderCustom';
import SafeAreaViewBase from '../../base/components/SafeAreaViewBase';

class TransferScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      membercode: '',
      amount: '',
      reason: '',
      descriptionModal: '',
      titleButton: '',
      isVisible: false,
      loading: false,
    };
  }

  onChangeCode = (membercode) => {
    this.setState({membercode: membercode});
  };

  onChangeMoney = (amount) => {
    this.setState({amount: amount});
  };

  onChangeDes = (reason) => {
    this.setState({reason: reason});
  };

  onCheckUser = () => {
    const {membercode} = this.state;
    const {intl} = this.props;
    const {formatMessage} = intl;
    getUserApi(
      membercode,
      () => {
        this.setState({
          isVisible: true,
          descriptionModal: formatMessage(message.descriptionModal5),
          titleButton: formatMessage(message.btnClose),
        });
      },
      () => {
        this.setState({
          isVisible: true,
          descriptionModal: formatMessage(message.descriptionModal4),
          titleButton: formatMessage(message.btnClose),
        });
      },
    );
  };

  onTransfer = () => {
    const {membercode, amount, reason} = this.state;
    const {intl} = this.props;
    const {formatMessage} = intl;

    if (!membercode) {
      this.setState({
        isVisible: true,
        descriptionModal: formatMessage(message.descriptionModal3),
        titleButton: formatMessage(message.btnEnterCode),
      });
      return;
    }

    if (!amount) {
      this.setState({
        isVisible: true,
        descriptionModal: formatMessage(message.descriptionModal2),
        titleButton: formatMessage(message.btnEnterAmount),
      });
      return;
    }

    const data = {
      membercode: membercode,
      amount: amount,
      reason: reason,
    };

    this.setState({loading: true}, () => {
      transferApi(
        data,
        () => {
          this.setState(
            {
              membercode: '',
              amount: '',
              reason: '',
              isVisible: true,
              descriptionModal: formatMessage(message.descriptionModal1),
              titleButton: formatMessage(message.btnConfirm),
            },
            () => {
              const {balance} = global;
              setAccountBalanceGlobal(balance - amount);
              broadcastShoppingCardChange();
            },
          );
        },
        () => {
          this.setState({
            isVisible: true,
            descriptionModal: formatMessage(message.descriptionModal),
            titleButton: formatMessage(message.btnAgree),
          });
        },
      );
    });
  };

  onCloseModal = () => {
    this.setState({isVisible: false, loading: false});
  };

  render() {
    const {
      membercode,
      amount,
      reason,
      isVisible,
      descriptionModal,
      titleButton,
      loading,
    } = this.state;
    const {intl, showBack} = this.props;
    const {formatMessage} = intl;
    return (
      <ImageBackGround source={require('../../images/backgroundHome.png')}>
        <View style={styles.backGround}>
          <SafeAreaViewBase />
          <HeaderCustom
            title={formatMessage(message.titleHeader)}
            color={'#ffffff'}
            showBack={showBack}
            ViewComponent={LinearGradient}
          />
          <InputScrollView>
            <View style={styles.container}>
              <View style={styles.item}>
                <SemiBoldText
                  text={`${formatMessage(message.memberCode)}:`}
                  style={styles.textRow}
                />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Input
                    value={membercode}
                    placeholder={formatMessage(message.memberCodeInput)}
                    containerStyle={{
                      paddingHorizontal: 0,
                      flex: 1,
                      paddingVertical: 0,
                    }}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                    renderErrorMessage={false}
                    placeholderTextColor={'#dddddd'}
                    onChangeText={this.onChangeCode}
                  />
                  <ScanQR
                    styleBtn={{marginLeft: 20}}
                    onChangeCode={this.onChangeCode}
                  />
                </View>

                <Button
                  title={formatMessage(message.btnCheck)}
                  buttonStyle={styles.btnButtonCheckStyle}
                  titleStyle={styles.btnTitleCheckStyle}
                  onPress={this.onCheckUser}
                />
              </View>
              <View style={styles.item}>
                <SemiBoldText
                  text={`${formatMessage(message.money)}:`}
                  style={styles.textRow}
                />
                <Input
                  value={amount}
                  placeholder={formatMessage(message.moneyInput)}
                  containerStyle={{paddingHorizontal: 0, paddingVertical: 0}}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  renderErrorMessage={false}
                  placeholderTextColor={'#dddddd'}
                  onChangeText={this.onChangeMoney}
                  keyboardType={'phone-pad'}
                />
              </View>
              <View style={styles.item}>
                <SemiBoldText
                  text={`${formatMessage(message.note)}:`}
                  style={styles.textRow}
                />
                <Input
                  value={reason}
                  placeholder={formatMessage(message.note)}
                  containerStyle={styles.containerStyleNote}
                  inputContainerStyle={styles.inputContainerStyleNote}
                  inputStyle={[
                    styles.inputStyle,
                    {height: heightToDP(120), textAlignVertical: 'top'},
                  ]}
                  multiline
                  renderErrorMessage={false}
                  numberOfLines={5}
                  placeholderTextColor={'#dddddd'}
                  onChangeText={this.onChangeDes}
                />
              </View>
              <View style={{paddingTop: 20}}>
                <ButtonBase
                  title={formatMessage(message.btnTransfer)}
                  buttonStyle={styles.btnButtonStyle}
                  onPress={this.onTransfer}
                  loading={loading}
                />
              </View>
            </View>
          </InputScrollView>
        </View>
        <NotificationModal
          isVisible={isVisible}
          title={formatMessage(message.titleModal)}
          description={descriptionModal}
          titleButton={titleButton}
          onPress={this.onCloseModal}
        />
      </ImageBackGround>
    );
  }
}

TransferScreen.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(TransferScreen);
