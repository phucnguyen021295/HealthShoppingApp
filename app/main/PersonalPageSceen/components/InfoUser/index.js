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

const GENDER = {
  1: {
    vi: 'Nam',
    en: 'Male',
  },
  0: {
    vi: 'Nữ',
    en: 'Female',
  },
  2: {
    vi: 'Khác',
    en: 'Other',
  },
};

function InfoUser(props) {
  const {
    Language,
    name,
    email,
    mobile,
    sex,
    birthday,
    identitycard,
    membercode,
    accountbank,
    accountnumber,
    status,
    joinedtime,
  } = global;
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
          <TextInfo
            label={formatMessage(message.sex)}
            value={GENDER[sex][Language]}
          />
          <TextInfo label={formatMessage(message.phone)} value={mobile} />
          <TextInfo
            label={formatMessage(message.identitycard)}
            value={identitycard}
          />
          <TextInfo label={formatMessage(message.email)} value={email} />
          <TextInfo
            label={formatMessage(message.membercode)}
            value={membercode}
          />
          <TextInfo
            label={formatMessage(message.accountbank)}
            value={accountbank}
          />
          <TextInfo
            label={formatMessage(message.accountnumber)}
            value={accountnumber}
          />
          <TextInfo
            label={formatMessage(message.status)}
            value={
              status === 0
                ? formatMessage(message.noActive)
                : formatMessage(message.active)
            }
          />
          <TextInfo
            label={formatMessage(message.joinedtime)}
            value={convertDate(joinedtime)}
          />
        </View>
      )}
    </View>
  );
}

InfoUser.defaultProps = {
  showInfo: true,
};

export default injectIntl(InfoUser);
