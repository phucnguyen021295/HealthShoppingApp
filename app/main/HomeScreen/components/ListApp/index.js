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
import {View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Components
import ButtonBase from '../../../../base/components/ButtonBase';
import Text from '../../../../base/components/Text';

// Styles
import styles from './styles/index.css';
import {withNavigation} from '@react-navigation/compat';

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
    title: 'Setting',
    icon: <Icon name="ios-settings-outline" size={25} color="white" />,
    screen: '',
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
    this.props.navigation.navigate(item.screen);
  }

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
