import React, {PureComponent} from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  View,
  ScrollView,
} from 'react-native';
import {Image, Button, CheckBox} from 'react-native-elements';

// Components
import Text, {SemiBoldText} from '../../../base/components/Text';
import ModalBase from '../../../base/components/ModalBase';
// import DetailItemScreen from '../../DetailItemScreen';

// Styles
import styles from './styles/index.css';
import {color} from '../../../core/color';
import {
  deleteShoppingItem,
  replaceShopping,
} from '../../../core/db/table/shopping';
import {broadcastShoppingCardChange} from '../../../core/shoppingCart';
import Quantity from '../../DetailItemScreen/components/Quantity';
import {getPackageByProductId} from '../../../core/db/table/package_product';
import {getProduct} from '../../../core/db/table/product';
import {injectIntl, intlShape} from 'react-intl';

import message from '../../../msg/shoppingCart';
import {
  ButtonClose,
  ButtonConfirm,
} from '../../../base/components/ButtonText/ButtonModal';

class CartItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      totalUpdate: props.item.total,
      listPackage: [],

      isRemoveProduct: false,
      isEditProduct: false,
      isEditProductPack: false,
      quality: 1,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.item !== this.props.item) {
      this.setState({item: this.props.item});
    }
  }

  onCloseModal = () => {
    this.setState({
      isEditProduct: false,
      isRemoveProduct: false,
      isEditProductPack: false,
    });
  };

  onShoppingCard = () => {
    this.onCloseModal();
  };

  onCancelPackageProduct = () => {
    const {item} = this.state;
    const {packid, productid} = item;
    deleteShoppingItem(
      packid,
      productid,
      () => {
        broadcastShoppingCardChange();
        this.onCloseModal();
      },
      () => {
        this.onCloseModal();
      },
    );
  };

  onDetailCart = () => {
    const {item} = this.state;
    if (item.packid !== '-1') {
      this.setState({isEditProductPack: true});
    } else {
      this.setState({isEditProduct: true});
    }
  };

  setQuantity = (total) => {
    this.setState({totalUpdate: total});
  };

  onUpdateProduct = () => {
    const {item, totalUpdate} = this.state;

    if (totalUpdate === 0) {
      deleteShoppingItem(item.packid, item.productid, () => {
        broadcastShoppingCardChange();
      });
    } else {
      const data = {
        packid: item.packid,
        productid: item.productid,
        nameProduct: item.nameProduct,
        namePack: item.namePack,
        type: item.type,
        packpriceusd: item.packpriceusd,
        image: item.image,
        quantity: 1,
        total: totalUpdate,
      };

      this.setState({item: data}, () => this.onCloseModal());
      replaceShopping(data, () => {
        broadcastShoppingCardChange();
      });
    }
  };

  onChangeItem = (item) => {
    const {data} = this.state;
    const itemPack = data.filter((it) => it.packid === item.value);
    this.setState({
      valueSelected: item.value,
      packSelected: itemPack[0],
    });
  };

  onRemoveProduct = () => {
    this.setState({isRemoveProduct: true});
  };

  onModalShow1 = () => {
    const {item} = this.state;
    getPackageByProductId(item.productid, item.type, (data) => {
      const _listPackage = data.filter((item) => item.packid !== '-1');
      // alert(JSON.stringify(data));
      this.setState({
        listPackage: _listPackage,
      });
    });
  };

  onUpdateProductPack = (packSelected) => {
    const {item} = this.state;
    if (item.packid === packSelected.packid) {
      this.onCloseModal();
      return;
    }
    const data = {
      packid: packSelected.packid,
      productid: packSelected.productid,
      nameProduct: item.nameProduct,
      namePack: packSelected.title,
      type: packSelected.type,
      packpriceusd: packSelected.packpriceusd,
      image: item.image,
      quantity: 1,
      total: 1,
    };
    replaceShopping(data, () => {
      deleteShoppingItem(item.packid, item.productid, () => {
        broadcastShoppingCardChange();
      });
    });
    this.setState({item: data}, () => this.onCloseModal());
  };

  onModalShow = () => {
    const {item} = this.state;
    getProduct(item.productid, (data) => {
      this.setState({quality: data[0].quality});
    });
  };

  renderModal() {
    const {
      isEditProduct,
      isRemoveProduct,
      item,
      listPackage,
      isEditProductPack,
      quality,
    } = this.state;

    const {intl} = this.props;
    const {formatMessage} = intl;

    return (
      <>
        <ModalBase
          isVisible={isRemoveProduct}
          title={item.name}
          description={formatMessage(message.desModal)}>
          <View
            style={{
              flexDirection: 'row',
              borderTopColor: '#dddddd',
              borderTopWidth: 1,
            }}>
            <ButtonClose
              text={formatMessage(message.btnCancel)}
              onPress={this.onCancelPackageProduct}
            />
            <View style={styles.border} />
            <ButtonConfirm
              text={formatMessage(message.btnClose)}
              onPress={this.onCloseModal}
            />
          </View>
        </ModalBase>

        <ModalBase
          isVisible={isEditProduct}
          title={item.nameProduct}
          onModalShow={this.onModalShow}>
          <View>
            <View
              style={{
                fjustifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 20,
              }}>
              <Quantity
                packid={item.packid}
                productid={item.productid}
                setQuantity={this.setQuantity}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderTopColor: '#dddddd',
                borderTopWidth: 1,
              }}>
              <ButtonClose
                text={formatMessage(message.btnClose)}
                onPress={this.onCloseModal}
              />
              <View style={styles.border} />
              <ButtonConfirm
                text={formatMessage(message.btnUpdate)}
                onPress={this.onUpdateProduct}
              />
            </View>
          </View>
        </ModalBase>

        <ModalBase
          isVisible={isEditProductPack}
          onModalShow={this.onModalShow1}
          title={item.nameProduct}
          styleTitle={styles.styleTitle}>
          <View style={{maxHeight: 500}}>
            <Text
              text={formatMessage(message.desModal2)}
              style={styles.textSelect}
            />
            <ScrollView>
              {listPackage.map((item, index) => (
                <TouchableOpacity
                  style={styles.viewPackage}
                  onPress={() => this.onUpdateProductPack(item)}>
                  <SemiBoldText text={item.title} style={styles.titlePackage} />
                  <CheckBox
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={item.title === this.state.item.namePack}
                    onPress={() => this.setState({checked: 'home'})}
                    containerStyle={{
                      backgroundColor: '#ffffff',
                      borderColor: '#ffffff',
                    }}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View
              style={{
                flexDirection: 'row',
                borderTopColor: '#dddddd',
                borderTopWidth: 1,
              }}>
              <ButtonConfirm
                text={formatMessage(message.btnBack)}
                onPress={this.onCloseModal}
              />
            </View>
          </View>
        </ModalBase>
      </>
    );
  }

  render() {
    const {item} = this.state;
    const {intl} = this.props;
    const {formatMessage} = intl;
    return (
      <TouchableOpacity onPress={this.onDetailCart} style={styles.container}>
        <Button
          title={'x'}
          containerStyle={{marginRight: 12}}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          onPress={this.onRemoveProduct}
        />
        <Image
          source={{uri: item.image}}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode={'contain'}
        />
        <View style={styles.priceContainer}>
          <SemiBoldText
            text={item.nameProduct}
            style={styles.nameProduct}
            numberOfLines={1}
          />
          <Text
            text={
              item.packid === '-1' ? `${item.total} Bottles` : item.namePack
            }
            style={styles.title}
            numberOfLines={1}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={this.onDetailCart}>
              <SemiBoldText
                text={formatMessage(message.btnEdit)}
                style={styles.textUpdate}
              />
            </TouchableOpacity>
            <Text
              text={`${item.packpriceusd * item.total} $`}
              style={styles.price}
            />
          </View>
        </View>
        {this.renderModal()}
      </TouchableOpacity>
    );
  }
}

CartItem.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(CartItem);
