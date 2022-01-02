import {StyleSheet} from 'react-native';
import {heightToDP} from '../../../core/utils/dimension';
import {fontSize14} from '../../../core/fontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  info: {
    paddingVertical: 30,
  },

  body: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.49)',
  },

  tabBar: {
    flexDirection: 'row',
    paddingTop: heightToDP(13),
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabBar1: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: heightToDP(36),
    borderRadius: heightToDP(18)
  },

  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',

  },

  lableTab: {
    color: '#000000',
    fontSize: fontSize14,
    paddingHorizontal: heightToDP(14),
    paddingVertical: heightToDP(8)
  },

  lableFocus: {
    backgroundColor: '#ffffff',
    borderRadius: heightToDP(18)
  },

  backGround: {
    flex: 1,
    backgroundColor: 'rgba(1, 23, 34, 0.7)'
  },
});

export default styles;
