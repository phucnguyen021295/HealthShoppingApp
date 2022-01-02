import {StyleSheet} from 'react-native';
import * as fontSize from '../../../../core/fontSize';
import {heightToDP} from '../../../../core/utils/dimension';

const styles = StyleSheet.create({
  container: {
    margin: heightToDP(20),
    justifyContent: 'center',
  },

  content: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
  },

  body: {
    paddingHorizontal: heightToDP(12),
    paddingTop: heightToDP(12),
    paddingBottom: heightToDP(12),
  },

  title: {
    fontSize: fontSize.large,
    textAlign: 'center',
  },

  description: {
    fontSize: fontSize.smaller,
    textAlign: 'center',
    marginTop: heightToDP(5),
  },
});

export default styles;
