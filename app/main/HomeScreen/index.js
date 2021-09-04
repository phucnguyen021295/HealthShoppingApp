import React, {PureComponent} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {injectIntl, intlShape} from 'react-intl';

// Components
import Header from './components/Header';
import Text, {MediumText, SemiBoldText} from '../../base/components/Text';
import ImageBackGround from '../../base/components/ImageBackGround';
import ChartScreen from '../ChartScreen';
import Carousel from './components/Carousel';
import ListApp from './components/ListApp';
import LinearGradient from '../../base/components/LinearGradient';

// Data
import {handleGetProducts} from '../../core/data';

// styles
import styles from './styles/index.css';

import global, {setAccountBalanceGlobal} from '../../global';
import {registerShoppingCardChange} from '../../core/shoppingCart';
import {sumMoneyTotal} from '../../core/db/Sqlitedb';
import {getBalanceApi} from '../../apis/health';

import message from '../../msg/home';
import {heightToDP} from '../../core/utils/dimension';

class HomeDrawer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: global.balance,
    };
  }

  componentDidMount() {
    handleGetProducts();
    registerShoppingCardChange(this.onSumMoney);

    this.onSumMoney();

    getBalanceApi((response) => {
      const {data} = response;
      this.setState({accountBalance: data.balance});
      setAccountBalanceGlobal(data.balance);
    });
  }

  onSumMoney = () => {
    sumMoneyTotal((data) => {
      this.setState({accountBalance: global.balance});
    });
  };

  onPersonalPage = () => {
    this.props.navigation.navigate('PersonalPage');
  };

  render() {
    const {accountBalance} = this.state;
    const {name, membercode, image} = global;
    const {navigation, intl} = this.props;
    const {formatMessage} = intl;
    const urlImage = image
      ? {uri: image}
      : require('./styles/images/avatar.png');
    return (
      <View style={styles.container}>
        <ImageBackGround source={require('../../images/backgroundHome.png')}>
          <View style={styles.background} />
          <LinearGradient>
            <SafeAreaView />
            <Header navigation={navigation} />
          </LinearGradient>

          <TouchableOpacity
            style={styles.infoUser}
            onPress={this.onPersonalPage}>
            <Avatar size={66} rounded activeOpacity={1} source={urlImage} />
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[styles.viewRow]}>
              <Carousel navigation={navigation} />
              <View style={{paddingTop: heightToDP(13)}}>
                <ListApp />
              </View>

              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('./styles/images/Bank.png')}
                  style={styles.imageBank}
                />
                <SemiBoldText text={name} style={styles.name} />
                <SemiBoldText
                  text={`${formatMessage(
                    message.accountBalance,
                  )} ${accountBalance} $`}
                  style={styles.name}
                />
                <SemiBoldText
                  text={'Nhánh trái: 300 - Nhánh phải: 500'}
                  style={styles.name}
                />
              </View>
            </View>

            <View style={styles.viewChart}>
              <SemiBoldText
                text={formatMessage(message.statistical)}
                style={styles.textReport}
              />
              <ChartScreen />
            </View>
          </ScrollView>
        </ImageBackGround>
      </View>
    );
  }
}

HomeDrawer.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(HomeDrawer);
