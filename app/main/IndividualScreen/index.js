/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 05/09/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {useState, useContext} from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  Animated,
  UIManager,
  Platform,
  LayoutAnimation,
} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Avatar} from 'react-native-elements';

// Components
import HeaderCustom from '../../base/components/HeaderCustom';
import LinearGradient from '../../base/components/LinearGradient';
import SafeAreaViewBase from '../../base/components/SafeAreaViewBase';
import Text from '../../base/components/Text';

// styles
import styles from './styles/index.css';

import global, {setLanguageGlobal} from '../../global';

import {clearData} from '../../core/storage';
import {callBack} from '../../core/data';
import {LanguageContext} from '../../../ContextProvider';
import message from '../../msg/individual';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

function IndividualScreen(props) {
  const {route, navigation, intl} = props;
  const {name, Language, image} = global;
  const showBack = route?.params?.showBack || false;
  const [showLanguage, setShowLanguage] = useState(false);
  const [language, setLanguage] = useState(Language);
  const context = useContext(LanguageContext);
  const {formatMessage} = intl;

  const onNavigatePersonalPage = () => navigation.navigate('PersonalPage');

  const onNavigateQR = () => navigation.navigate('ShowQRCode');

  const onChangeLanguage = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(300, 'easeInEaseOut', 'opacity'),
    );
    setShowLanguage(!showLanguage);
  };

  const onSetLanguage = (language) => {
    if (language === Language) {
      return;
    }
    setLanguage(language);
    setLanguageGlobal(language);
    context.updateLanguage(language);
  };

  const onLogout = () => {
    Alert.alert(
      formatMessage(message.notification),
      formatMessage(message.logout1),
      [
        {
          text: formatMessage(message.btnCancel),
          onPress: () => console.log('Cancel Pressed'),
        },
        {
          text: formatMessage(message.agree),
          onPress: () => {
            clearData().then(() => {
              callBack.onLogout();
            });
          },
        },
      ],
      {cancelable: false},
    );
  };

  const urlImage = image
    ? {uri: image}
    : require('../HomeScreen/styles/images/avatar.png');
  return (
    <View style={styles.container}>
      <SafeAreaViewBase />
      <HeaderCustom
        title={formatMessage(message.titleHeader)}
        color={'#ffffff'}
        showBack={showBack}
        ViewComponent={LinearGradient}
      />
      <View style={{flex: 1}}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.edit}
          onPress={onNavigatePersonalPage}>
          <Avatar size={55} rounded activeOpacity={1} source={urlImage} />
          <View style={styles.editRight}>
            <Text text={name} style={styles.fullName} />
            <Text
              text={formatMessage(message.editInfo)}
              style={styles.editInfo}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.row}
          activeOpacity={1}
          onPress={onNavigateQR}>
          <Ionicons name="qr-code-outline" size={22} color="#e39307" />
          <Text text={formatMessage(message.qr)} style={styles.textRow} />
          <Ionicons name="chevron-forward-outline" size={22} color="#b5b4b4" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.row}
          activeOpacity={1}
          onPress={onChangeLanguage}>
          <Ionicons name={'ios-globe-outline'} size={22} color={'#e39307'} />
          <Text text={formatMessage(message.language)} style={styles.textRow} />
          <Ionicons
            name={
              showLanguage ? 'chevron-up-outline' : 'chevron-forward-outline'
            }
            size={22}
            color={'#b5b4b4'}
          />
        </TouchableOpacity>
        {showLanguage && (
          <Animated.View>
            <TouchableOpacity
              style={styles.row1}
              activeOpacity={1}
              onPress={() => onSetLanguage('en')}>
              <Text
                text={formatMessage(message.english)}
                style={styles.textRow}
              />
              <Ionicons
                name={
                  language === 'en'
                    ? 'ios-radio-button-on-outline'
                    : 'ios-radio-button-off-outline'
                }
                size={22}
                color={language === 'en' ? '#e39307' : '#b5b4b4'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.row1}
              activeOpacity={1}
              onPress={() => onSetLanguage('vi')}>
              <Text
                text={formatMessage(message.vietnam)}
                style={styles.textRow}
              />
              <Ionicons
                name={
                  language === 'vi'
                    ? 'ios-radio-button-on-outline'
                    : 'ios-radio-button-off-outline'
                }
                size={22}
                color={language === 'vi' ? '#e39307' : '#b5b4b4'}
              />
            </TouchableOpacity>
          </Animated.View>
        )}

        <TouchableOpacity
          activeOpacity={1}
          style={styles.row}
          onPress={onLogout}>
          <AntDesign name={'logout'} size={20} color={'#e39307'} />
          <Text text={formatMessage(message.logout)} style={styles.textRow} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

IndividualScreen.propTypes = {
  intl: intlShape.isRequired,
};

IndividualScreen.contextType = LanguageContext;

export default injectIntl(IndividualScreen);