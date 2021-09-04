/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/28/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React, {PureComponent} from 'react';
import {
  ActivityIndicator,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Animated,
} from 'react-native';
import {Button, Image} from 'react-native-elements';
import HTML from 'react-native-render-html';
import {injectIntl, intlShape} from 'react-intl';

// Components
import Quantity from './components/Quantity';
import ButtonBase from '../../base/components/ButtonBase';
import ModalBase from '../../base/components/ModalBase';
import DropDownPicker from '../../base/components/DropDownPicker';

import {broadcastShoppingCardChange} from '../../core/shoppingCart';

// db
import {
  replaceShopping,
  deleteShoppingItem,
} from '../../core/db/table/shopping';
import {getPackageByProductId} from '../../core/db/table/package_product';

// Styles
import styles, {CUSTOM_STYLES, HEIGHT_HEADER} from './styles/index.css';
import IconEntypo from 'react-native-vector-icons/Entypo';
import global from '../../global';
import {sumMoneyTotal} from '../../core/db/Sqlitedb';
import {heightToDP, widthToDP} from '../../core/utils/dimension';
import {color} from '../../core/color';

import message from '../../msg/detailItem';

class DetailItemScreen extends PureComponent {
  constructor(props) {
    super(props);
    const {intl} = props;
    const {formatMessage} = intl;
    this.state = {
      search: '',
      total: 1,
      updateCart: false,
      isGetCart: false,
      totalMoney: 0,
      isVisibleWarning: false,
      listPackage: [
        {
          label: formatMessage(message.selectPackage),
          value: 0,
        },
      ],
      packSelected: {},
      valueSelected: 0,
      data: [],
    };

    this.headerAnimated = new Animated.Value(0);
    this.clampedScroll = this.headerAnimated.interpolate({
      inputRange: [0, HEIGHT_HEADER],
      outputRange: [HEIGHT_HEADER, HEIGHT_HEADER],
      extrapolate: 'clamp',
    });
  }

  componentDidMount() {
    const {item, oderType} = this.props;
    this.onSumMoney();

    getPackageByProductId(item.productid, oderType, (data) => {
      const _listPackage = data.map((item) => ({
        label: item.title,
        value: item.packid,
      }));
      this.setState({
        listPackage: _listPackage,
        data: data,
      });
    });

    this.clampedScroll = this.headerAnimated.interpolate({
      inputRange: [0, HEIGHT_HEADER],
      outputRange: [HEIGHT_HEADER, HEIGHT_HEADER],
      extrapolate: 'clamp',
    });
  }

  onSumMoney = () => {
    sumMoneyTotal((data) => {
      if (data.length > 0) {
        this.setState({
          totalMoney: data[0].totalMoney,
        });
      }
    });
  };

  updateTotal = (status) => {
    this.setState(status);
  };

  addShoppingCard = () => {
    const {total, totalMoney, packSelected} = this.state;
    const {item} = this.props;
    const {balance} = global;

    let totalItem = item.packpriceusd;
    if (packSelected.packid === '-1') {
      totalItem = packSelected.packpriceusd * total;
    }

    if (balance < totalMoney + totalItem) {
      this.setState({isVisibleWarning: true});
    } else {
      this.props.onShoppingCard();
      if (total === 0) {
        deleteShoppingItem(packSelected.packid, item.productid, () => {
          broadcastShoppingCardChange();
        });
      } else {
        const data = {
          packid: packSelected.packid,
          productid: packSelected.productid,
          nameProduct: item.title,
          namePack: packSelected.title,
          type: packSelected.type,
          packpriceusd: packSelected.packpriceusd,
          image: item.image150,
          quantity: 1,
          total: packSelected.packid === '-1' ? total : 1,
        };
        replaceShopping(data, () => {
          broadcastShoppingCardChange();
        });
      }
    }
  };

  onCloseModal = () => {
    this.props.onShoppingCard();
  };

  setQuantity = (total) => {
    this.setState({total: total});
  };

  setBtnText = () => {
    const {intl} = this.props;
    const {formatMessage} = intl;
    const {total, updateCart, packSelected} = this.state;
    // const {item} = this.props;

    let totalMoney = 0;

    if (packSelected.packid === '-1') {
      if (total === 0) {
        return formatMessage(message.goBack);
      }
      totalMoney = total * packSelected.packpriceusd;
    } else {
      totalMoney = packSelected.packpriceusd;
    }

    if (updateCart) {
      return `${formatMessage(message.updateCart)} - ${totalMoney} $`;
    }

    return `${formatMessage(message.addCart)} - ${totalMoney} $`;
  };

  onCloseModalWarning = () => {
    this.setState({isVisibleWarning: false});
  };

  onPay = () => {
    this.setState({isVisibleWarning: true});
  };

  onChangeItem = (item) => {
    const {data} = this.state;
    const itemPack = data.filter((it) => it.packid === item.value);
    this.setState({
      valueSelected: item.value,
      packSelected: itemPack[0],
    });
  };

  render() {
    const {intl, item} = this.props;
    const {formatMessage} = intl;
    const {
      isVisibleWarning,
      listPackage,
      valueSelected,
      packSelected,
    } = this.state;

    const headerHeight = this.headerAnimated.interpolate({
      inputRange: [0, HEIGHT_HEADER],
      outputRange: [0, -HEIGHT_HEADER],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.container}>
        <Animated.ScrollView
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.headerAnimated}}}],
            {
              useNativeDriver: true,
            },
          )}>
          <Image
              source={{uri: item?.image500}}
              style={styles.image}
              PlaceholderContent={<ActivityIndicator />}
              resizeMode={'contain'}
          />
          <DropDownPicker
              items={listPackage}
              defaultValue={this.state.valueSelected}
              containerStyle={{height: 40, marginTop: 20, marginHorizontal: 20}}
              style={{backgroundColor: '#fafafa', zIndex: 100}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              placeholderStyle={{color: 'blue'}}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={this.onChangeItem}
          />
          {valueSelected === '-1' ? (
            <View
              style={{
                fjustifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 20,
              }}>
              <Quantity
                productid={item.productid}
                packid={valueSelected}
                quantity={item.quality}
                setQuantity={this.setQuantity}
                updateTotal={this.updateTotal}
              />
            </View>
          ) : null}

          <View style={{paddingHorizontal: widthToDP(20)}}>
            <HTML
              source={{html: item?.des}}
              imagesMaxWidth={Dimensions.get('window').width - 40}
              allowFontScaling={false}
              tagsStyles={CUSTOM_STYLES}
            />
          </View>
        </Animated.ScrollView>
        {packSelected?.packpriceusd ? (
          <View style={styles.btnAddShopping}>
            <ButtonBase
              title={this.setBtnText()}
              buttonStyle={styles.btnButtonStyle}
              textStyle={styles.textStyle}
              onPress={this.addShoppingCard}
            />
          </View>
        ) : null}

        <Button
          icon={
            <IconEntypo name="cross" size={heightToDP(22)} color={'#ffffff'} />
          }
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.containerStyle}
          onPress={this.onCloseModal}
        />
        <ModalBase
          isVisibleModal={isVisibleWarning}
          title={formatMessage(message.titleModal)}
          description={formatMessage(message.notMoney)}>
          <View style={{flexDirection: 'row'}}>
            <Button
              title={formatMessage(message.total)}
              containerStyle={{flex: 1, borderRadius: 0}}
              buttonStyle={{
                backgroundColor: color,
                borderRadius: 0,
                borderTopColor: color,
                borderTopWidth: 1,
                borderBottomLeftRadius: 14,
              }}
              onPress={this.onCloseModal}
            />
            <Button
              title={formatMessage(message.goBack)}
              containerStyle={{flex: 1, borderRadius: 0}}
              buttonStyle={{
                backgroundColor: '#ffffff',
                borderRadius: 0,
                borderTopColor: color,
                borderTopWidth: 1,
                borderBottomRightRadius: 14,
              }}
              titleStyle={{color: color}}
              onPress={this.onCloseModalWarning}
            />
          </View>
        </ModalBase>
        <SafeAreaView />
      </View>
    );
  }
}

DetailItemScreen.propTypes = {
  intl: intlShape.isRequired,
};

DetailItemScreen.defaultProps = {
  showBack: false,
  updateTotal: false,
};

export default injectIntl(DetailItemScreen);
