import {StyleSheet} from 'react-native';
import {heightToDP, widthToDP} from '../../../core/utils/dimension';
import {color} from '../../../core/color';
import {huge, large, normal} from '../../../core/fontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerStyle: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    flex: 1,
    paddingHorizontal: 0,
    paddingTop: 20
  },

  inputContainerStyle: {
    backgroundColor: '#ffffff52',
    height: 46,
    borderRadius: 23,
  },

  searchIcon: {color: '#ffffff', paddingLeft: widthToDP(10)},

  inputStyle: {
    color: '#ffffff',
    fontSize: 16,
  },

  modalContainer: {
    paddingTop: 8,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },

  title: {
    paddingHorizontal: 20,
    fontSize: huge,
    paddingVertical: 10
  },

  itemSelect: {
    fontSize: large,
    paddingVertical: 10,
    paddingLeft: 12
  },

  titleSelect: {
    paddingLeft: 20,
    fontSize: huge,
    paddingVertical: 12,
    lineHeight: 30,
    color: '#181818'
  },

  textClose: {
    color: color,
    fontSize: large,
    paddingRight: 20,
  }
});

export default styles;
