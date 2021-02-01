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
import {View, FlatList, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Components
import ButtonBase from '../../../../base/components/ButtonBase';
import Text from '../../../../base/components/Text';

// Styles
import styles from './styles/index.css';
import {withNavigation} from '@react-navigation/compat';
import {clearData} from '../../../../core/storage';
import {callBack} from '../../../../core/data';

const data = [
  {
    id: '1',
    title: 'Report',
    icon: <Icon name="md-stats-chart-outline" size={23} color="white" />,
    screen: 'Report',
  },
  {
    id: '2',
    title: 'Balance History',
    icon: <Icon name="time-outline" size={25} color="white" />,
    screen: 'History',
  },
  {
    id: '3',
    title: 'Transfer History',
    icon: <Icon name="trending-up" size={25} color="white" />,
    screen: 'History',
  },
  {
    id: '4',
    title: 'Logout',
    icon: <Icon name="ios-power-sharp" size={25} color="white" />,
    screen: 'Logout',
  },
];

class ListApp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  onChangeNavigate = (item) => {
    if (item.screen === 'Logout') {
      Alert.alert(
        'Thông báo',
        'Đăng xuất tài khoản?',
        [
          {
            text: 'Hủy bỏ',
            onPress: () => console.log('Cancel Pressed'),
          },
          {
            text: 'Đồng ý',
            onPress: () => {
              clearData().then(() => {
                callBack.onLogout();
              });
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      this.props.navigation.navigate(item.screen);
    }
  };

  keyExtractor = (item) => item.id;

  renderItem = ({item}) => {
    return (
      <View style={styles.row}>
        <ButtonBase
          styleLinearGradient={styles.containerStyle}
          buttonStyle={styles.btnButtonStyle}
          icon={item.icon}
          onPress={() => this.onChangeNavigate(item)}
        />
        <Text text={item.title} style={styles.text} />
      </View>
    );
  };

  render() {
    const {data} = this.state;
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={this.renderItem}
        horizontal={true}
        contentContainerStyle={styles.container}
      />
    );
  }
}

export default withNavigation(ListApp);
