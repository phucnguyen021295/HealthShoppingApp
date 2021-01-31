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
import {Header, Button} from 'react-native-elements';
import {BackHandler} from 'react-native';
import {withNavigation} from '@react-navigation/compat';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Styles
import styles from './styles/index.css';
import {color} from '../../../core/color';
import {large} from '../../../core/fontSize';
import {MediumText} from '../Text';

class HeaderCustom extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      valueBadge: 0,
      isVisible: false,
    };

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

  renderLeftComponent() {
    const {color} = this.props;
    return (
      <Button
        buttonStyle={styles.buttonStyle}
        icon={
          <Ionicons
            name={'chevron-back-outline'}
            size={25}
            // style={styles.icon}
            color={color}
          />
        }
        onPress={this.onGoBack}
      />
    );
  }

  onCloseModal = () => {
    this.setState({isVisible: false});
  };

  render() {
    const {title, color, showBack, ...otherProps} = this.props;
    return (
      <Header
        placement="center"
        leftComponent={showBack && this.renderLeftComponent()}
        centerComponent={{
          text: () => <MediumText text={title} style={{color: color, fontSize: large}} />,
        }}
        containerStyle={styles.containerStyle}
        {...otherProps}
      />
    );
  }
}

HeaderCustom.defaultProps = {
  color: color,
  showBack: true,
};

export default withNavigation(HeaderCustom);
