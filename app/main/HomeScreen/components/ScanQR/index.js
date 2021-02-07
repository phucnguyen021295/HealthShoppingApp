/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/21/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import QRCodeScanner from '../../../../base/components/QRCodeScanner';
import {Avatar} from 'react-native-elements';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';

class BarcodeScannerApp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };

    this.onOpenQR = this.onOpenQR.bind(this);
    this.onCloseQR = this.onCloseQR.bind(this);
  }

  onOpenQR() {
    this.setState({isVisible: true});
  }

  onCloseQR() {
    this.setState({isVisible: false});
  }

  onSuccess = (e) => {
    // alert(e.data);
    this.props.onChangeCode(e.data);
    this.onCloseQR();
    // Linking.openURL(e.data).catch((err) =>
    //   console.error('An error occured', err),
    // );
  };

  renderModal() {
    const {isVisible} = this.state;
    return (
      <Modal
        isVisible={isVisible}
        onSwipeComplete={this.onCloseQR}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={{justifyContent: 'flex-end', margin: 0}}>
        <QRCodeScanner
          onRead={this.onSuccess}
          showMarker={true}
          buttonPositive
          onClose={this.onCloseQR}
        />
      </Modal>
    );
  }

  render() {
    const {styleBtn} = this.props;
    return (
      <TouchableOpacity onPress={this.onOpenQR} style={styleBtn}>
        <Ionicons name="ios-scan-outline" size={35} color="white" />
        {this.renderModal()}
      </TouchableOpacity>
    );
  }
}

export default BarcodeScannerApp;
