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
import {View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

// Components
import Header from '../Header';
import {MediumText} from '../../../../base/components/Text';
// import ChartScreen from '../../../ChartScreen';
import ImageBackGround from '../../../../base/components/ImageBackGround';
import ChartScreen from '../../../ChartScreen/BarChart';

// styles
import styles from './styles/index.css';

import {replaceProduct} from '../../../../core/db/table/product';
import data from '../../../OderScreen/components/OderList/data';

class HomeDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qrcode: '654321',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      for (let i = 0; i < data.length; i++) {
        replaceProduct(data[i]);
      }
    }, 1000);
  }

  render() {
    const {qrcode} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Header navigation={navigation} />
        <ImageBackGround
          source={require('../../../../images/backgroundHome.jpeg')}
          blurRadius={4}>
          <View style={styles.info}>
            <MediumText text={'Họ và tên: Nguyễn Văn A'} style={styles.name} />
            <MediumText text={'Mã code: 654321'} style={styles.name} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <View style={{borderWidth: 3, borderColor: '#ffffff'}}>
                <QRCode
                  value={qrcode}
                  logo={{
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  }}
                  logoSize={50}
                  size={160}
                  logoBackgroundColor="transparent"
                  logoBorderRadius={25}
                />
              </View>
            </View>
          </View>
          <View style={styles.chart}>
            <ChartScreen />
          </View>
        </ImageBackGround>
      </View>
    );
  }
}

export default HomeDrawer;
