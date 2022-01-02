import React, {PureComponent} from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import {SearchBar, Button} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {injectIntl, intlShape} from 'react-intl';

// Components
import LinearGradient from '../../base/components/LinearGradient';
import OderList from './components/OderList';

// Styles
import styles from './styles/index.css';
import Modal from 'react-native-modal';
import Text, {SemiBoldText} from '../../base/components/Text';
import {isIphoneX} from '../../core/utils/isIphoneX';
import {color} from '../../core/color';
import global from '../../global';

import message from '../../msg/oder';
import {heightToDP} from '../../core/utils/dimension';
import SafeAreaViewBase from '../../base/components/SafeAreaViewBase';

const orderType = [
  {
    oderType: '0',
    name: 'Mua hàng lần đầu',
    nameEn: 'Buy for the first time',
  },
  {
    oderType: '1',
    name: 'Mua hàng nâng cấp',
    nameEn: 'Buy upgrades',
  },
  {
    oderType: '2',
    name: 'Mua hàng active',
    nameEn: 'Buy active',
  },
];

class OderScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      oderType: '0',
      isVisible: false,
    };
  }

  updateSearch = (search) => {
    this.setState({search});
  };

  onSelectTypeOder = () => {
    this.setState({isVisible: true});
  };

  onSelectItem = (item) => {
    this.setState({isVisible: false, oderType: item.oderType});
  };

  onGoBack = () => {
    this.props.navigation.goBack();
    return true;
  };

  render() {
    const {Language} = global;
    const {intl} = this.props;
    const {formatMessage} = intl;
    const {search, oderType, isVisible} = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient>
          <SafeAreaView />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: heightToDP(46),
            }}>
            <Ionicons
              name={'chevron-back-outline'}
              size={heightToDP(23)}
              color={'#ffffff'}
              style={{
                paddingLeft: heightToDP(15),
                paddingRight: heightToDP(12),
              }}
              onPress={this.onGoBack}
            />
            <View style={styles.search}>
              <Ionicons
                name={'ios-search-outline'}
                size={heightToDP(18)}
                color={'#ffffff'}
                style={{paddingHorizontal: heightToDP(10)}}
              />
              <TextInput
                style={styles.textInput}
                placeholder={'Tìm kiếm'}
                placeholderTextColor={'#dddddd'}
                selectionColor={'#ffffff'}
              />
            </View>
            <Button
              icon={
                <MaterialCommunityIcons
                  name="format-list-bulleted-type"
                  size={heightToDP(20)}
                  color="white"
                />
              }
              iconRight
              buttonStyle={{
                paddingRight: heightToDP(16),
                paddingLeft: heightToDP(14),
                backgroundColor: '#fffffff',
              }}
              onPress={this.onSelectTypeOder}
            />
          </View>
        </LinearGradient>
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
          <OderList oderType={oderType} search={search} />
        </View>
        <Modal
          testID={'modal'}
          isVisible={isVisible}
          onBackdropPress={() => this.setState({isVisible: false})}
          style={{justifyContent: 'flex-end', margin: 0}}>
          <View style={styles.modalContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <SemiBoldText
                text={formatMessage(message.selectProduct)}
                style={styles.titleSelect}
              />
              <Button
                icon={<Ionicons name="ios-close" size={22} color={'#181818'} />}
                iconRight
                buttonStyle={{
                  paddingHorizontal: 20,
                  backgroundColor: '#fffffff',
                }}
                onPress={() => this.setState({isVisible: false})}
              />
            </View>
            {orderType.map((item) => (
              <View
                style={[
                  {
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 18,
                  },
                  item.oderType === oderType && {backgroundColor: '#dddddd'},
                ]}>
                <MaterialCommunityIcons
                  name={'label-variant-outline'}
                  size={22}
                  color={color}
                />
                <Text
                  text={Language === 'vi' ? item.name : item.nameEn}
                  style={[styles.itemSelect]}
                  onPress={() => this.onSelectItem(item)}
                />
              </View>
            ))}
            <SafeAreaView />
          </View>
        </Modal>
        <SafeAreaViewBase />
      </View>
    );
  }
}

OderScreen.propTypes = {
  intl: intlShape.isRequired,
};

OderScreen.defaultProps = {
  showBack: false,
};

export default injectIntl(OderScreen);
