import {StyleSheet} from 'react-native';
import * as fontSize from '../../../../core/fontSize';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: 'center',
  },

  content: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
  },

  body: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },

  title: {
    fontSize: fontSize.large,
    textAlign: 'center',
  },

  description: {
    fontSize: fontSize.smaller,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default styles;
