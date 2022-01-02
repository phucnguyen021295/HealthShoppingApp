import {StyleSheet} from 'react-native';
import * as fontSize from '../../../../core/fontSize';
import {large} from '../../../../core/fontSize';
import {heightToDP} from '../../../../core/utils/dimension';
import {color} from '../../../../core/color';

const styles = StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'center',
    borderRadius: 8,
  },

  text: {
    fontSize: fontSize.large,
    textAlign: 'center',
    color: '#FFFFFF',
    paddingHorizontal: 12,
  },

  btnConfirm: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: heightToDP(42),
  },

  textConfirm: {
    fontSize: fontSize.normal,
    color: color,
  },

  btnClose: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: heightToDP(42),
  },

  textClose: {
    fontSize: fontSize.normal,
    color: '#949494',
  },
});

export default styles;
