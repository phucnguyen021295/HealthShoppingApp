import {StyleSheet} from 'react-native';
import * as fontSize from '../../../core/fontSize';
import {isIphoneX} from '../../../core/utils/isIphoneX';
import {heightToDP} from '../../../core/utils/dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoUser: {
    position: 'absolute',
    left: 20,
    top: heightToDP(isIphoneX ? 48 : 30),
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  fullName: {
    paddingLeft: 20,
  },

  info: {
    backgroundColor: '#00000059',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 20,
  },

  name: {
    color: '#ffffff',
    fontSize: fontSize.fontSize14,
    lineHeight: fontSize.fontSize14 * 1.43,
  },

  viewRow: {
    backgroundColor: 'rgba(115, 86, 34, 0.3)',
    paddingTop: heightToDP(21),
    paddingBottom: heightToDP(14),
    marginBottom: heightToDP(16),
  },

  viewChart: {
    backgroundColor: 'rgba(115, 86, 34, 0.3)',
    paddingVertical: heightToDP(14),
    paddingBottom: heightToDP(70)
  },

  textReport: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: fontSize.large,
    lineHeight: 30,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },

  account: {
    color: '#ffffff',
    fontSize: fontSize.large,
    lineHeight: 30,
  },
  avatar: {width: 66, height: 66, borderRadius: 33},

  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'rgba(1, 23, 34, 0.5)',
  },

  imageBank: {width: heightToDP(140), height: heightToDP(140)}
});

export default styles;
