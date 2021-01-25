/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/20/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React, {PureComponent} from 'react';
import {SafeAreaView, View} from 'react-native';
import {SearchBar, Button} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import LinearGradient from '../../base/components/LinearGradient';
import OderList from './components/OderList';

// Styles
import styles from './styles/index.css';
import Modal from 'react-native-modal';
import Text, {MediumText} from '../../base/components/Text';
import {isIPhoneX} from '../../core/utils/isIphoneX';

const orderType = [
  {
    oderType: '0',
    name: 'Mua hàng lần đầu',
  },
  {
    oderType: '1',
    name: 'Mua hàng nâng cấp',
  },
  {
    oderType: '2',
    name: 'Mua hàng active',
  },
];

class OderScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      oderType: 0,
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

  render() {
    const {search, oderType, isVisible} = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient>
          <SafeAreaView />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <SearchBar
              placeholder="Tìm kiếm"
              onChangeText={this.updateSearch}
              value={search}
              placeholderTextColor={'#ffffff'}
              searchIcon={styles.searchIcon}
              inputStyle={styles.inputStyle}
              containerStyle={{
                backgroundColor: 'transparent',
                borderTopWidth: 0,
                borderBottomWidth: 0,
                flex: 1,
                paddingHorizontal: 0,
                  paddingTop: isIPhoneX ? 0 : 20
              }}
              inputContainerStyle={styles.inputContainerStyle}
            />
            <Button
              icon={
                <MaterialCommunityIcons
                  name="format-list-bulleted-type"
                  size={25}
                  color="white"
                />
              }
              iconRight
              buttonStyle={{paddingHorizontal: 20, backgroundColor: '#fffffff', paddingTop: isIPhoneX ? 0 : 20}}
              onPress={this.onSelectTypeOder}
            />
          </View>
        </LinearGradient>
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
          <OderList oderType={oderType} />
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
              <MediumText
                text={'Chọn nhóm sản phẩm'}
                style={styles.titleSelect}
              />
              <Text
                text={'Đóng'}
                style={styles.textClose}
                onPress={() => this.setState({isVisible: false})}
              />
            </View>
            {orderType.map((item) => (
              <Text
                text={item.name}
                style={styles.itemSelect}
                onPress={() => this.onSelectItem(item)}
              />
            ))}
            <SafeAreaView />
          </View>
        </Modal>
      </View>
    );
  }
}

OderScreen.defaultProps = {
  showBack: false,
};

export default OderScreen;
