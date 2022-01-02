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
import {SemiBoldText} from '../../base/components/Text';
import ImageBackGround from '../../base/components/ImageBackGround';
import ChartScreen from '../ChartScreen';
import Carousel from './components/Carousel';
import ListApp from './components/ListApp';
import LinearGradient from '../../base/components/LinearGradient';
import RCl from './components/RCl';

// styles
import styles from './styles/index.css';

import global, {setRCIGlobal} from '../../global';
import {registerShoppingCardChange} from '../../core/shoppingCart';
import {getRCIApi} from '../../apis/health';

import message from '../../msg/home';
import {heightToDP} from '../../core/utils/dimension';

class HomeDrawer extends PureComponent {
  constructor(props) {
    super(props);
    const {balance, left, right, directpp} = global;
    this.state = {
      balance: balance,
      left: left || 0,
      right: right || 0,
      directpp: directpp,
      isVisibleRCl: false,
    };
  }

  componentDidMount() {
    getRCIApi((response) => {
      const {data} = response;
      this.setState(data);
      setRCIGlobal(data);
    });

    registerShoppingCardChange(this.onSumMoney);
  }

  onSumMoney = () => {
    this.setState({balance: global.balance});
  };

  onPersonalPage = () => {
    this.props.navigation.navigate('PersonalPage');
  };

  onPostRCl = () => {
    this.setState({isVisibleRCl: true});
  };

  onCancelRCl = () => {
    this.setState({isVisibleRCl: false});
  };

  render() {
    const {balance, left, right, isVisibleRCl} = this.state;
    const {name, image} = global;
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
            <Avatar
              size={heightToDP(60)}
              rounded
              activeOpacity={1}
              source={urlImage}
            />
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[styles.viewRow]}>
              <Carousel navigation={navigation} />
              <View style={{paddingTop: heightToDP(13)}}>
                <ListApp onPostRCl={this.onPostRCl} />
              </View>

              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('./styles/images/Bank.png')}
                  style={styles.imageBank}
                  resizeMode={'contain'}
                />
                <SemiBoldText text={name} style={styles.name} />
                <SemiBoldText
                  text={`${formatMessage(message.accountBalance)} ${balance}$`}
                  style={styles.name}
                />
                <SemiBoldText
                  text={`${formatMessage(
                    message.leftBranch,
                  )} ${left} - ${formatMessage(message.rightBranch)} ${right}`}
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
        {isVisibleRCl && (
          <RCl isVisible={isVisibleRCl} onCancel={this.onCancelRCl} />
        )}
      </View>
    );
  }
}

HomeDrawer.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(HomeDrawer);
