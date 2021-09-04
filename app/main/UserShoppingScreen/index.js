import React, {PureComponent} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';

// Component
import AppHeader from '../../base/components/AppHeader';
import Text, {MediumText, SemiBoldText} from '../../base/components/Text';

// Db
import {getListCarts} from '../../core/db/table/shopping';
import {getUserApi} from '../../apis/health';

// Styles
import styles from './styles/index.css';
import ButtonBase from '../../base/components/ButtonBase';
import {sumMoneyTotal} from '../../core/db/Sqlitedb';
import {registerShoppingCardChange} from '../../core/shoppingCart';
import {Input} from 'react-native-elements';
import global from '../../global';

import message from '../../msg/userShopping';

class UserShoppingScreen extends PureComponent {
  constructor(props) {
    super(props);
    const {
      membercode,
      name,
      mobile,
      address,
      email,
      state,
      city,
      postalcode,
    } = global;
    this.state = {
      data: [],
      totalMoney: 0,
      code: '',
      membercode: membercode,
      receiver: {
        name: name,
        mobile: mobile,
        address: address,
        email: email,
        state: state,
        city: city,
        postalcode: postalcode || '+84',
        country: 'Viet Nam',
      },
      paymenttype: 0,
      receivingtype: 1,
    };
  }

  componentDidMount() {
    registerShoppingCardChange(this.onSumMoney);

    getListCarts((data) => {
      this.setState({data: data, isDataEmpty: data.length === 0});
    });

    this.onSumMoney();
  }

  onSumMoney = () => {
    sumMoneyTotal((data) => {
      if (data.length > 0) {
        this.setState({
          totalMoney: data[0].totalMoney,
        });
      }
    });
  };

  onChangeCode = (code) => {
    this.setState({code: code});
  };

  onContinue = () => {
    const {totalMoney} = this.props;
    const {membercode, receiver, paymenttype, data, receivingtype} = this.state;
    this.props.navigation.navigate('AddressShopping', {
      membercode: membercode,
      receiver: receiver,
      paymenttype: paymenttype,
      carts: data,
      receivingtype: receivingtype,
      totalMoney: totalMoney,
    });
  };

  onCheckInfo = () => {
    const {code} = this.state;
    getUserApi(
      code,
      (response) => {
        const {data} = response;
        const receiver = {
          name: data.name,
          mobile: data.mobile,
          address: data.address,
          email: data.email,
          state: data.state,
          city: data.city,
          postalcode: data.postalcode || '+84',
          country: 'Viet Nam', // data.countryname,
        };
        this.setState({
          receiver: receiver,
          membercode: data.membercode,
          address: data.address,
        });
      },
      () => {
        alert('Có lỗi xảy ra vui lòng thử lại sau');
      },
    );
  };

  render() {
    const {code, membercode, receiver} = this.state;
    const {intl} = this.props;
    const {formatMessage} = intl;
    return (
      <SafeAreaView style={styles.container}>
        <AppHeader title={formatMessage(message.titleHeader)} />
        <ScrollView>
          <Input
            value={code}
            placeholder={formatMessage(message.inputCode)}
            containerStyle={{paddingHorizontal: 20, marginVertical: 20}}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            renderErrorMessage={false}
            onChangeText={this.onChangeCode}
          />
          <ButtonBase
            title={formatMessage(message.btnCheck)}
            buttonStyle={styles.btnButtonStyle}
            onPress={this.onCheckInfo}
            styleLinearGradient={{marginHorizontal: 20}}
          />
          <SemiBoldText
            text={formatMessage(message.textPurchase)}
            style={styles.titleShopping}
          />
          <Text style={[styles.textName, {marginTop: 12}]}>
            <SemiBoldText text={formatMessage(message.textMemberCode)} />
            <Text text={`: ${membercode}`} />
          </Text>
          <Text style={styles.textName}>
            <SemiBoldText text={formatMessage(message.fullName)} />
            <Text text={`: ${receiver.name}`} />
          </Text>
          <Text style={styles.textName}>
            <SemiBoldText text={formatMessage(message.phoneNumber)} />
            <Text text={`: ${receiver.mobile}`} />
          </Text>
          <Text style={styles.textName}>
            <SemiBoldText text={formatMessage(message.address)} />
            <Text text={`: ${receiver.address}`} />
          </Text>
          <Text style={styles.textName}>
            <SemiBoldText text={formatMessage(message.email)} />
            <Text text={`: ${receiver.email}`} />
          </Text>
          <Text style={styles.textName}>
            <SemiBoldText text={formatMessage(message.infoDistrict)} />
            <Text text={`: ${receiver.state}`} />
          </Text>
          <Text style={styles.textName}>
            <SemiBoldText text={formatMessage(message.city)} />
            <Text text={`: ${receiver.city}`} />
          </Text>
          <Text style={styles.textName}>
            <SemiBoldText text={formatMessage(message.postalCode)} />
            <Text text={`: ${receiver.postalcode}`} />
          </Text>
          <Text style={styles.textName}>
            <SemiBoldText text={formatMessage(message.nation)} />
            <Text text={`: ${receiver.country}`} />
          </Text>
          {/*<View>*/}
          {/*  <MediumText*/}
          {/*    text={'Tóm tắt đơn hàng:'}*/}
          {/*    style={styles.titleShopping}*/}
          {/*  />*/}
          {/*  {data.map((item) => {})}*/}
          {/*</View>*/}
        </ScrollView>
        <View style={styles.btnBottom}>
          <ButtonBase
            title={formatMessage(message.btnContinue)}
            buttonStyle={styles.btnButtonStyle}
            onPress={this.onContinue}
          />
        </View>
      </SafeAreaView>
    );
  }
}

UserShoppingScreen.defaultProps = {};

UserShoppingScreen.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(UserShoppingScreen);
