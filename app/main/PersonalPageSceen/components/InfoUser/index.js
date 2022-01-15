/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 14/01/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React, {useState} from 'react';
import {View, TouchableOpacity, LayoutAnimation} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {SemiBoldText} from '../../../../base/components/Text';
import TextInfo from '../TextInfo';

// Styles
import styles from './styles/index.css';
import global from '../../../../global';
import message from '../../../../msg/personalPage';
import {injectIntl} from 'react-intl';
import {large} from '../../../../core/fontSize';
import {convertDate} from '../../../../utils/convertDate';

function InfoUser(props) {
  const {name, email, mobile, birthday} = global;
  const {intl, containerStyle, showInfo} = props;
  const {formatMessage} = intl;
  const [isShowInfo, setShowInfo] = useState(showInfo);

  const onShowInfo = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(300, 'easeInEaseOut', 'opacity'),
    );
    setShowInfo(!isShowInfo);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={styles.rowFullName}
        activeOpacity={1}
        onPress={onShowInfo}>
        <SemiBoldText text={name} style={styles.fullName} />
        <Ionicons
          name={isShowInfo ? 'chevron-up' : 'chevron-down'}
          color={'#fff'}
          size={large}
        />
      </TouchableOpacity>
      {isShowInfo && (
        <View>
          <TextInfo
            label={formatMessage(message.birthDate)}
            value={convertDate(birthday)}
          />
          <TextInfo label={formatMessage(message.sex)} value={'Nam'} />
          <TextInfo label={formatMessage(message.phone)} value={mobile} />
          <TextInfo label={formatMessage(message.email)} value={email} />
        </View>
      )}
    </View>
  );
}

InfoUser.defaultProps = {
    showInfo: true
};

export default injectIntl(InfoUser);
