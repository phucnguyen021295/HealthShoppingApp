import {StyleSheet} from 'react-native';
import {color} from '../../../core/color';
import * as fontSize from '../../../core/fontSize';
import {heightToDP, widthToDP} from '../../../core/utils/dimension';

const styles = StyleSheet.create({
  inputOTPMax: {
    height: heightToDP(40),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    paddingLeft: 12,
    fontSize: fontSize.large,
    marginBottom: 51,
    marginHorizontal: 30,
    textAlign: 'center',
    paddingTop: 9,
    paddingBottom: 9,
    color: '#000000',
  },

  btnButtonStyle: {
    marginTop: heightToDP(30),
    paddingVertical: heightToDP(10),
    backgroundColor: color,
    paddingHorizontal: widthToDP(30),
    borderRadius: 8,
  },

  body: {
    paddingHorizontal: widthToDP(20),
    paddingTop: heightToDP(80),
    alignItems: 'center',
  },

  text1: {
    color: '#ffffff',
    paddingTop: 30,
    textAlign: 'center',
    fontSize: fontSize.fontSize14,
    lineHeight: fontSize.fontSize14 * 1.67
  },
});

export default styles;
