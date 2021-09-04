import {StyleSheet, Platform} from 'react-native';
import * as fontSize from '../../../../core/fontSize';
import {heightToDP} from '../../../../core/utils/dimension';
import {isIphoneX} from '../../../../core/utils/isIphoneX';

export const ICON_SIZE = 25;

const styles = StyleSheet.create({
  container: {
    height: heightToDP(46),
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.7,
    marginTop: (isIphoneX || Platform.OS === 'ios')  ? 0 : 20
  },
  btnBack: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    height: heightToDP(46),
    justifyContent: 'center',
    zIndex: 99,
  },
  textTitle: {
    fontSize: fontSize.huge,
    textAlign: 'center',
    color: '#000000',
  },
  icon: {
    paddingLeft: 20,
    paddingRight: 30,
    ...Platform.select({
      ios: {
        // paddingTop: 5,
      },
    }),
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
