import {StyleSheet} from 'react-native';
import * as fontSize from '../../../../../core/fontSize';
import {heightToDP, widthToDP} from '../../../../../core/utils/dimension';

const styles = StyleSheet.create({
  container: {
    paddingVertical: heightToDP(6),
    marginBottom: 10,
  },

  linearGradient: {
    borderRadius: 14,
  },

  body: {
    borderRadius: 14,
    marginHorizontal: heightToDP(20),
    backgroundColor: '#ffffff',

  },

  bodyView: {
    paddingHorizontal: widthToDP(20),
    paddingVertical: heightToDP(12),
  },

  textDescription: {
    color: '#000000',
    fontSize: fontSize.smaller,
  },

  textTotalPrice: {
    color: '#ffffff',
    fontSize: fontSize.fontSize14,
    paddingHorizontal: heightToDP(20),
    paddingTop: 10,
  },

  brief: {
    color: '#000000',
    fontSize: fontSize.fontSize14,
    lineHeight: fontSize.fontSize14 * 1.43,
  },

  textAccountBalance: {
    color: '#000000',
    fontSize: fontSize.fontSize14,
  },
});

export default styles;
