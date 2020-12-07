/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/8/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {BackHandler, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withNavigation} from '@react-navigation/compat';

import {MediumText} from '../Text';

// Styles
import styles, {ICON_SIZE} from './styles/index.css';
import {color} from '../../../core/color';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.onGoBack = this.onGoBack.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onGoBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onGoBack);
  }

  onGoBack() {
    const {onBack, showBack} = this.props;

    if (!showBack) {
      return;
    }

    if (onBack) {
      onBack();
      return;
    }
    this.props.navigation.goBack();
    return true;
  }

  render() {
    const {showBack, title, styleHeader, styleTitle, color} = this.props;
    return (
      <View style={[styles.container, styleHeader]}>
        {showBack && (
          <TouchableOpacity onPress={this.onGoBack} style={styles.btnBack}>
            <Ionicons
              name={'chevron-back-outline'}
              size={ICON_SIZE}
              style={styles.icon}
              color={color}
            />
          </TouchableOpacity>
        )}
        <View style={styles.title}>
          <MediumText style={[styles.textTitle, {color: color}, styleTitle]}>
            {title}
          </MediumText>
        </View>
      </View>
    );
  }
}

Header.defaultProps = {
  color: color,
  showBack: true,
};

export default withNavigation(Header);
