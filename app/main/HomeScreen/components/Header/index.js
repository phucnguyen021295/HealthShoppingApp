/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/20/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {Button, Badge} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import {MediumText} from '../../../../base/components/Text';
import NotificationModal from '../../../../base/components/NotificationModal';

// Styles
import styles, {SIZE_ICON} from './styles/index.css';
import {registerShoppingCardChange} from '../../../../core/shoppingCart';
import {sumMoneyTotal} from '../../../../core/db/Sqlitedb';
import {injectIntl} from 'react-intl';
import message from '../../../../msg/home';

class HeaderHomeTab extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      valueBadge: 0,
      isVisible: false,
    };

    this.onChangeMenu = this.onChangeMenu.bind(this);
    this.onShopping = this.onShopping.bind(this);
  }

  componentDidMount() {
    registerShoppingCardChange(this.onSumMoney);

    this.onSumMoney();
  }

  onSumMoney = () => {
    sumMoneyTotal((data) => {
      if (data.length > 0) {
        this.setState({
          valueBadge: data[0].totalProduct,
        });
      }
    });
  };

  onChangeMenu() {
    const {navigation} = this.props;
    navigation.openDrawer();
  }

  onShopping() {
    const {valueBadge} = this.state;
    if (valueBadge > 0) {
      this.props.navigation.navigate('ShoppingCart');
    } else {
      this.setState({isVisible: true});
    }
  }

  renderLeftComponent() {
    return (
      <Button
        buttonStyle={styles.buttonStyle}
        icon={
          <MaterialCommunityIcons name="menu" size={SIZE_ICON} color="white" />
        }
        onPress={this.onChangeMenu}
      />
    );
  }

  onCloseModal = () => {
    this.setState({isVisible: false});
  };

  onShowQR = () => {
    this.props.navigation.navigate('ShowQRCode');
  };

  renderRightComponent() {
    const {intl} = this.props;
    const {valueBadge, isVisible, isShowQR} = this.state;
    const {formatMessage} = intl;
    return (
      <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
        <Button
          buttonStyle={styles.buttonQRStyle}
          icon={<Ionicons name="qr-code-outline" size={22} color="white" />}
          onPress={this.onShowQR}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          icon={
            <MaterialCommunityIcons
              name="shopping"
              size={SIZE_ICON}
              color="white"
            />
          }
          onPress={this.onShopping}
        />
        <Badge
          value={valueBadge}
          status="error"
          containerStyle={styles.containerStyleBadge}
          textStyle={styles.textStyle}
        />
        <NotificationModal
          isVisible={isVisible}
          title={formatMessage(message.notification)}
          description={formatMessage(message.description)}
          titleButton={formatMessage(message.btnClose)}
          onPress={this.onCloseModal}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={{width: 104}} />
        <MediumText text={'MY NEW WAY'} style={styles.textTitle} />
        {this.renderRightComponent()}
      </View>
    );
  }
}

export default injectIntl(HeaderHomeTab);
