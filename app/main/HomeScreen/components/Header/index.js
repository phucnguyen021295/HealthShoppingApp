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
import {Header, Button, Icon} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import styles from './styles/index.css';
import {color} from '../../../../core/color';

class HeaderHomeTab extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeMenu = this.onChangeMenu.bind(this);
    this.onShopping = this.onShopping.bind(this);
  }

  onChangeMenu() {}

  onShopping() {}

  renderLeftComponent() {
    return (
      <Button
        buttonStyle={{backgroundColor: color}}
        icon={<MaterialCommunityIcons name="menu" size={25} color="white" />}
        onPress={this.onChangeMenu}
      />
    );
  }

  renderRightComponent() {
    return (
      <Button
        buttonStyle={{backgroundColor: color}}
        icon={
          <MaterialCommunityIcons name="shopping" size={25} color="white" />
        }
        onPress={this.onShopping}
      />
    );
  }

  render() {
    return (
      <Header
        placement="center"
        leftComponent={this.renderLeftComponent()}
        centerComponent={{text: 'Nguyen Hong Phuc', style: {color: '#fff'}}}
        rightComponent={this.renderRightComponent()}
        containerStyle={styles.containerStyle}
      />
    );
  }
}

export default HeaderHomeTab;
