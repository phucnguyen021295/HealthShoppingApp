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
import {SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import {Avatar, Accessory, ListItem} from 'react-native-elements';

// Components
import {MediumText} from '../../../../base/components/Text';

// styles
import styles from './styles/index.css';
import global from '../../../../global';

const list = [
  {
    name: 'Home',
    icon:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Rlkh11FlrOTKvgA5jIYsAqw92VMXXCbnHQ&usqp=CAU',
  },
  {
    name: 'History',
    icon:
      'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_history_48px-512.png',
  },
  {
    name: 'Detail',
    icon:
      'https://e7.pngegg.com/pngimages/961/286/png-clipart-computer-icons-statistics-bar-chart-histogram-statistics-miscellaneous-angle-thumbnail.png',
  },
];

class DrawerContent extends PureComponent {
  constructor(props) {
    super(props);
  }

  onPress = (item) => {
    const {name} = item;
    this.props.navigation.navigate(name);
  };

  onPersonalPage = () => {
    this.props.navigation.navigate('PersonalPage');
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <ListItem
      style={{paddingHorizontal: 6}}
      bottomDivider
      onPress={() => this.onPress(item)}>
      <Avatar source={{uri: item.icon}} size="small" />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  render() {
    const {name, image} = global;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.infoUser} onPress={this.onPersonalPage}>
          <Avatar
            rounded
            size="small"
            source={{
              uri: image
                ? image
                : 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png',
            }}>
            <Accessory />
          </Avatar>
          <MediumText text={name} style={styles.fullName} />
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
