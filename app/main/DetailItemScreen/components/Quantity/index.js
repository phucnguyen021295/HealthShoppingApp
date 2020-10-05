/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/29/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import IconEntypo from 'react-native-vector-icons/Entypo';

import {MediumText} from '../../../../base/components/Text';

// Styles
import styles from './styles/index.css';
import {color} from '../../../../core/color';
import {getCartItem} from '../../../../core/db/table/shopping';

class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 1,
    };
  }

  componentDidMount() {
    const {productId} = this.props;
    getCartItem(productId, (data) => {
      const status = {
        updateCart: data.length > 0,
        total: data[0].total,
        isGetCart: true,
      };
      this.setState(status);
      this.props.updateTotal(status);
    });
  }

  onMimus = () => {
    this.setState((prevState) => {
      const _total = prevState.total === 0 ? 0 : prevState.total - 1;
      this.props.setQuantity(_total);
      return {
        total: _total,
      };
    });
  };

  onPlus = () => {
    this.setState((prevState) => {
      const _total = prevState.total + 1;
      this.props.setQuantity(_total);
      return {total: _total};
    });
  };

  render() {
    const {total} = this.state;
    return (
      <View style={styles.container}>
        <Button
          icon={<IconEntypo name="minus" size={22} color={color} />}
          buttonStyle={styles.buttonStyle}
          onPress={this.onMimus}
        />
        <MediumText text={total.toString()} style={styles.total} />
        <Button
          icon={<IconEntypo name="plus" size={22} color={color} />}
          buttonStyle={styles.buttonStyle}
          onPress={this.onPlus}
        />
      </View>
    );
  }
}

Quantity.defaultProps = {
  showBack: false,
};

export default Quantity;
