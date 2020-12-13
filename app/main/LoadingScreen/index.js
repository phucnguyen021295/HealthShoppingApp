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
import * as PropTypes from 'prop-types';
import {View, SafeAreaView, StatusBar, ActivityIndicator} from 'react-native';

// Components
import Text from '../../base/components/Text';

// Storage
import {getCheckIntroduce, getCheckVerifyOTP} from '../../core/storage';
import {initGlobal} from '../../global';

// Styles
import styles from './styles/index.css';
import {color} from '../../core/color';
import Logo from '../../base/components/Logo';

// TODO Can thuc hien doi text theo trang thai goi API that trong components nay. VD: Dang khoi tao cau hinh, Dang khoi tao resource....
class LoadingScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      level: null,
      renderLevel: true,
      isFirstLoading: false,
    };
    this.checkIntroduce();
  }

  componentDidMount() {
    // Get du lieu store len global
    initGlobal();

    // Check trạng thái lần đầu tiên vào app.
    // 4. Khởi tạo db.
    // initDatabase();
  }

  checkIntroduce = async () => {
    const checkIntroduce = await getCheckIntroduce();
    if (!checkIntroduce) {
      this.props.navigation.navigate('Introduce');
    } else {
      this.checkVerifyOTP();
    }
  };

  checkVerifyOTP = async () => {
    const checkVerifyOTP = await getCheckVerifyOTP();
    if (!checkVerifyOTP) {
      this.props.navigation.navigate('Login');
    } else {
      this.props.navigation.navigate('VerifyPIN');
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.modalFlash}>
          <Logo />
          <View style={styles.body}>
            <ActivityIndicator size="large" color={color} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

LoadingScreen.propTypes = {
  isFirstLoading: PropTypes.bool,
  name: PropTypes.string,
};

LoadingScreen.defaultProps = {
  isFirstLoading: false,
  name: '',
};

export default LoadingScreen;
