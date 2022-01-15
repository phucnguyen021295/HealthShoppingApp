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
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {widthToDP} from '../../../../core/utils/dimension';
import global from '../../../../global';
import Text from '../../../../base/components/Text';
import {small} from '../../../../core/fontSize';
import {uploadImageApi} from '../../../../apis/health';

function UploadAvatar() {
  const {image} = global;
  const [uri, setUri] = useState(image);

  const openPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
        uploadImageApi(image.path, (data) => console.log('success', data), (error) => {
            console.log('fa;ủe', error)
        })
    });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={openPicker}>
      <Avatar
        size={64}
        rounded
        source={{
          uri: uri,
        }}
        title="Bj"
        containerStyle={{backgroundColor: 'grey'}}>
        <Avatar.Accessory size={23} />
      </Avatar>
      <Text text={'Chỉnh sửa'} style={styles.title} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDP(35),
  },

  title: {
    color: '#fff',
    paddingTop: widthToDP(6),
    fontSize: small,
  },
});

export default UploadAvatar;
