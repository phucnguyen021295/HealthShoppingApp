/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 1/3/21.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {View} from 'react-native';
import * as PropTypes from 'prop-types';
import {Button} from 'react-native-elements';

// Components
import ModalBase from '../ModalBase';

// Styles
import styles from './styles/index.css';

function NotificationModal(props) {
  const {isVisible, title, description, titleButton, onPress} = props;
  return (
    <ModalBase
      isVisibleModal={isVisible}
      title={title}
      description={description}
      styleTitle={styles.titleModalStyle}
      styleDescription={styles.descriptionModalStyle}
    >
      <View style={{flexDirection: 'row'}}>
        <Button
          title={titleButton}
          containerStyle={styles.containerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          onPress={onPress}
        />
      </View>
    </ModalBase>
  );
}

NotificationModal.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  titleButton: PropTypes.string,
  onPress: PropTypes.func,
};

export default NotificationModal;
