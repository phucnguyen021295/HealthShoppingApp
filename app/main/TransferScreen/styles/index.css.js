import {Platform, StyleSheet} from 'react-native';
import * as fontSize from '../../../core/fontSize';
import {transparent} from '../../../core/color';
import {heightToDP, widthToDP} from '../../../core/utils/dimension';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: widthToDP(20),
  },
  textInfo: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: fontSize.huge,
    paddingTop: heightToDP(12),
    paddingBottom: heightToDP(50),
  },
  textRow: {
    color: '#ffffff',
    fontSize: fontSize.normal,
    marginBottom: heightToDP(6),
  },

  btnButtonStyle: {
    paddingVertical: 12,
    backgroundColor: transparent,
  },

  btnButtonCheckStyle: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: transparent,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 6

  },

  btnTitleCheckStyle: {
    fontSize: fontSize.normal
  },

  inputContainerStyle: {
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
    color: '#ffffff',
    fontSize: fontSize.normal,
  },

  item: {marginBottom: heightToDP(30)},

  inputContainerStyleNote: {
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#ffffff52',
    paddingHorizontal: widthToDP(12),
    borderRadius: heightToDP(8),
    paddingVertical: heightToDP(6),
  },

  containerStyleNote: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  }
});

export default styles;
