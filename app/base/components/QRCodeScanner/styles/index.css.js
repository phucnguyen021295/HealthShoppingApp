/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/21/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  infoView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },

  camera: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },

  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },

  btnClose: {
    position: 'absolute',
    bottom: 50,
    right: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  bClose: {
    backgroundColor: '#ffffff99',
    borderRadius: 20,
  },

  textClose: {
    color: '#000000',
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },

  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    zIndex: 9999
  },
});

export default styles;
