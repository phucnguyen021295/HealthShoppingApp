import {Platform, StyleSheet} from 'react-native';
import {transparent} from '../../../core/color';
import * as fontSize from '../../../core/fontSize';
import {heightToDP, widthToDP} from '../../../core/utils/dimension';
import {isIphoneX} from '../../../core/utils/isIphoneX';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  btnBottom: {
    position: 'absolute',
    bottom: isIphoneX ? 34 : 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    paddingHorizontal: widthToDP(20),
    paddingVertical: heightToDP(10),
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },

  titleShopping: {
    fontSize: fontSize.normal,
    paddingHorizontal: widthToDP(20),
    paddingVertical: heightToDP(10),
    backgroundColor: '#d7e5fa',
    color: '#666666',
    marginTop: 20
  },

  textName: {
    fontSize: fontSize.normal,
    paddingHorizontal: widthToDP(20),
    paddingVertical: heightToDP(8),
    color: '#666666',
  },

  btnButtonStyle: {
    paddingVertical: 12,
    backgroundColor: transparent,
    marginHorizontal: 10,
  },

  total: {
    paddingBottom: heightToDP(15),
    paddingTop: heightToDP(8),
    fontSize: fontSize.normal,
  },

  inputContainerStyle: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#ffffff52',
    paddingHorizontal: widthToDP(12),
    borderRadius: heightToDP(8),
    ...Platform.select({
      android: {
        height: 40,
      }
    })
  },

  inputStyle: {
    fontSize: fontSize.normal,
  },
});

export default styles;
