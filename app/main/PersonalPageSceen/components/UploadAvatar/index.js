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
      uploadImageApi(
        image,
        (data) => console.log('success', data),
        (error) => {
          console.log('fa;ủe', error);
        },
      );
    });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={openPicker}>
      <Avatar
        size={widthToDP(60)}
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
  },

  title: {
    color: '#fff',
    paddingTop: widthToDP(6),
    fontSize: small,
  },
});

export default UploadAvatar;
