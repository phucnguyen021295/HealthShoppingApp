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

import React from 'react';
import {SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import {Avatar, Accessory, ListItem} from 'react-native-elements';

// Components
import {MediumText} from '../../../../base/components/Text';

// styles
import styles from './styles/index.css';

const list = [
  {
    name: 'Home',
    icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    name: 'History',
    icon:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
];

class DrawerContent extends React.Component {
  constructor(props) {
    super(props);
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <ListItem bottomDivider>
      <Avatar source={{uri: item.icon}} />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.infoUser}>
          <Avatar
            rounded
            size="medium"
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}>
            <Accessory />
          </Avatar>
          <MediumText text={'Nguyen Hong Phuc'} style={styles.fullName} />
        </TouchableOpacity>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

export default DrawerContent;
