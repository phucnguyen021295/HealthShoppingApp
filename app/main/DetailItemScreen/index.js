/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/28/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {ActivityIndicator, Dimensions, SafeAreaView, View} from 'react-native';
import {Button, Image, SearchBar} from 'react-native-elements';

// Components
import Text, {MediumText} from '../../base/components/Text';

// Styles
import styles from './styles/index.css';

const {width} = Dimensions.get('window');
const HEIGHT_IMAGE = (width * 2) / 3;

class DetailItemScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  updateSearch = (search) => {
    this.setState({search});
  };

  render() {
    const {item} = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode={'contain'}
        />
        <View style={styles.row1}>
          <MediumText text={item.name} style={styles.title} numberOfLines={2} />
          <MediumText text={`${item.price}$`} style={styles.price} />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <MediumText text={'Thông tin sẳn phẩm:'} style={styles.description} />
          <MediumText text={'Công dụng:'} style={styles.detail} />
          <Text
            text={
              '- Bổ sung Canxi, Vitamin D3 cho cơ thể, hỗ trợ tăng cường hấp thu canxi, giúp xương và răng chắc khỏe.'
            }
            style={styles.detail}
          />
          <Text
            text={
              '- Hỗ trợ phát triển chiều cao ở trẻ, giảm nguy cơ loãng xương ở người lớn.'
            }
            style={styles.detail}
          />
        </View>
        <View>
          <Button
            title="Thêm vào giỏ hàng"
            buttonStyle={styles.btnButtonStyle}
            onPress={this.addShoppingCard}
          />
        </View>
      </View>
    );
  }
}

DetailItemScreen.defaultProps = {
  showBack: false,
};

export default DetailItemScreen;
