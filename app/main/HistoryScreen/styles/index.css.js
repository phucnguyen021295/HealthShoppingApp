import {StyleSheet} from 'react-native';
import {heightToDP} from '../../../core/utils/dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  info: {
    flex: 1,
    backgroundColor: '#00000059',
  },

  tabItem: {
    backgroundColor: 'transparent',
    height: heightToDP(50),
    justifyContent: 'flex-end',
    // borderTopWidth: 0,
    elevation: 0,
  },
});

export default styles;
