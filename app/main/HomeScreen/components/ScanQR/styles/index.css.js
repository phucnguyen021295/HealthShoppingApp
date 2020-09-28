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

import {Dimensions, StyleSheet} from 'react-native';
import {color} from '../../../../../core/color';

const styles = StyleSheet.create({
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    opacity: 0.3,
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    width: 40,
    height: 40,
    tintColor: 'white',
  },
  buttonActive: {
    backgroundColor: color,
    opacity: 1,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 5,
    backgroundColor: '#e3e3e3',
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCardContainer: {
    width: (Dimensions.get('window').width / 5) * 4,
    padding: 5,
  },
  modalCardContent: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
    alignSelf: 'stretch',
  },
  navigationBarContainer: {
    paddingTop: 5,
    marginBottom: 5,
    backgroundColor: '#F8F8F8',
  },
  navigationBar: {
    backgroundColor: '#F8F8F8',
  },
  navigationBarButton: {
    marginTop: 5,
    backgroundColor: '#F8F8F8',
    borderWidth: 0,
  },
  historyModalContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    justifyContent: 'flex-start',
    top: 0,
  },
  historyRowItemStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    marginTop: 3,
    marginBottom: 3,
  },
});

export default styles;
