/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 11/1/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {FlatList, View} from 'react-native';

// Components
import HeaderCustom from '../../base/components/HeaderCustom';
import LinearGradient from '../../base/components/LinearGradient';
import ImageBackGround from '../../base/components/ImageBackGround';
import Text, {MediumText} from '../../base/components/Text';
import SafeAreaViewBase from '../../base/components/SafeAreaViewBase';
import NotifyItem from './components/NotifyItem';
import decorateGetList from '../decorateGetList';

// Apis
import {getNotifyApi} from '../../apis/health';

// styles
import styles from './styles/index.css';

const DATA = [
  {
    time: '1612685842',
    title: 'TPHCM: Ghi nhận thêm 24 ca dương tính SARS-CoV-2',
    brief:
      'Báo cáo tại cuộc họp, ông Nguyễn Trí Dũng, Giám đốc Trung tâm Kiểm soát bệnh tật TPHCM (HCDC) cho biết, thành phố vừa ghi nhận thêm 24 ca dương tính với SARS-CoV-2. Những người này đã được đưa đi cách ly, điều trị.',
    des:
      'Báo cáo tại cuộc họp, ông Nguyễn Trí Dũng, Giám đốc Trung tâm Kiểm soát bệnh tật TPHCM (HCDC) cho biết, thành phố vừa ghi nhận thêm 24 ca dương tính với SARS-CoV-2. Những người này đã được đưa đi cách ly, điều trị.\n' +
      '\n' +
      'Đại diện Q.Bình Thạnh (TPHCM) cho biết: liên quan đến BN 1979, 6 ca F1, F2 là 14 ca. Trong 6 ca F1 đã có kết quả tất cả đều âm tính; 14 ca F2 thì có 5 ca nghi nhiễm cao ở P. 28 Thanh Đa (3 trường hợp), P.21 Thị Nghè 2 trường hợp.',
    image150:
      'https://vieclam247pro.vn/uploads/plugin/company/779/1603260716-1991128617-cong-ty-tnhh-d-c-ph-m-vang.png',
    image500:
      'https://i.ndh.vn/2017/11/20/48athiet-ke-web-duoc-pham5-1511145035.jpg',
  },
  {
    time: '1612309031',
    title: 'TPHCM: Ghi nhận thêm 24 ca dương tính SARS-CoV-2',
    brief:
      'Báo cáo tại cuộc họp, ông Nguyễn Trí Dũng, Giám đốc Trung tâm Kiểm soát bệnh tật TPHCM (HCDC) cho biết, thành phố vừa ghi nhận thêm 24 ca dương tính với SARS-CoV-2. Những người này đã được đưa đi cách ly, điều trị.',
    des:
      'Báo cáo tại cuộc họp, ông Nguyễn Trí Dũng, Giám đốc Trung tâm Kiểm soát bệnh tật TPHCM (HCDC) cho biết, thành phố vừa ghi nhận thêm 24 ca dương tính với SARS-CoV-2. Những người này đã được đưa đi cách ly, điều trị.\n' +
      '\n' +
      'Đại diện Q.Bình Thạnh (TPHCM) cho biết: liên quan đến BN 1979, 6 ca F1, F2 là 14 ca. Trong 6 ca F1 đã có kết quả tất cả đều âm tính; 14 ca F2 thì có 5 ca nghi nhiễm cao ở P. 28 Thanh Đa (3 trường hợp), P.21 Thị Nghè 2 trường hợp.',
    image150:
      'https://vieclam247pro.vn/uploads/plugin/company/779/1603260716-1991128617-cong-ty-tnhh-d-c-ph-m-vang.png',
    image500:
      'https://i.ndh.vn/2017/11/20/48athiet-ke-web-duoc-pham5-1511145035.jpg',
  },
];

class NotifyScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  onScroll = (event) => {
    const {isGetDataFull} = this.props;
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    if (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 500 &&
      !isGetDataFull &&
      !this.progetData
    ) {
      this.progetData = true;
      this.props.getOlder();
    }
  };

  ListFooterComponent() {
    return (
      <MediumText
        text={'Chưa có thông báo nào.'}
        style={{textAlign: 'center', color: '#ffffff'}}
      />
    );
  }

  renderItem = ({item}) => <NotifyItem item={item} />;

  render() {
    const {data, loadingFirst} = this.props;
    return (
      <View style={styles.container}>
        <SafeAreaViewBase />
        <HeaderCustom
          title={'THÔNG BÁO'}
          color={'#ffffff'}
          showBack={false}
          ViewComponent={LinearGradient}
        />
        <ImageBackGround
          source={require('../../images/backgroundHome.jpeg')}
          blurRadius={4}>
          <FlatList
            data={DATA}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.time}
            onScroll={this.onScroll}
            ref={this.setRef}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              data.length === 0 && !loadingFirst && this.ListFooterComponent
            }
            style={{marginTop: 2}}
          />
        </ImageBackGround>
        <SafeAreaViewBase />
      </View>
    );
  }
}

export default decorateGetList(NotifyScreen, getNotifyApi);
