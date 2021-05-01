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

import React, {PureComponent} from 'react';
import {FlatList, View} from 'react-native';
import {withNavigation} from '@react-navigation/compat';

// Components
import OderItem from '../OderItem';
import ButtonBase from '../../../../base/components/ButtonBase';

// db
import {sumMoneyTotal} from '../../../../core/db/Sqlitedb';
import {getProducts} from '../../../../core/db/table/product';
import {registerShoppingCardChange} from '../../../../core/shoppingCart';
import {handleGetPackageProduct} from '../../../../core/data';

// Styles
import styles from './styles/index.css';
import {injectIntl, intlShape} from 'react-intl';
import message from '../../../../msg/oder';

class OderList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      totalMoney: 0,
      totalProduct: 0,
    };
  }

  componentDidMount() {
    const {oderType} = this.props;
    this.onSumMoney();
    registerShoppingCardChange(this.onSumMoney);

    handleGetPackageProduct(
      oderType,
      (data) => {
        // this.setState({data});
      },
      (error) => {
        console.log('componentDidMount', '11111111111', error);
        alert('Có lỗi xảy ra');
      },
    );

    getProducts((data) => {
      this.setState({data: data});
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.oderType !== this.props.oderType) {
      console.log(
        'componentDidUpdate',
        prevProps.oderType,
        this.props.oderType,
      );
      handleGetPackageProduct(
        this.props.oderType,
        (data) => {
          // this.setState({data}, () => {
          //   this.handleMessageTop();
          // });
        },
        (error) => {
          console.log('componentDidUpdate', '11111111111', error);
          alert('Có lỗi xảy ra');
        },
      );
    }
  }

  onSumMoney = () => {
    sumMoneyTotal((data) => {
      if (data.length > 0) {
        this.setState({
          totalProduct: data[0].totalProduct,
          totalMoney: data[0].totalMoney,
        });
      }
    });
  };

  onShoppingCard = () => {
    this.props.navigation.navigate('ShoppingCart');
  };

  ListFooterComponent = () => {
    const {intl} = this.props;
    const {formatMessage} = intl;
    const {totalProduct, totalMoney} = this.state;
    return (
      <View style={styles.btnBottom}>
        <ButtonBase
          title={`${formatMessage(
            message.btnViewOder,
          )} - ${totalProduct} ${formatMessage(
            message.btnViewOder1,
          )} - ${totalMoney} $`}
          buttonStyle={styles.btnButtonStyle}
          onPress={this.onShoppingCard}
        />
      </View>
    );
  };

  renderItem = ({item}) => (
    <OderItem item={item} oderType={this.props.oderType} />
  );

  handleMessageTop = () => {
    this.flatListRef.scrollToOffset({animated: true, offset: 0});
  };

  setRefFlatList = (ref) => {
    this.flatListRef = ref;
  };

  render() {
    const {data, totalProduct} = this.state;
    return (
      <>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.packid}
          numColumns={2}
          ref={this.setRefFlatList}
          style={{marginBottom: totalProduct > 0 ? 80 : 0}}
        />
        {totalProduct > 0 && this.ListFooterComponent()}
      </>
    );
  }
}

OderList.propTypes = {
  intl: intlShape.isRequired,
};

export default withNavigation(injectIntl(OderList));
