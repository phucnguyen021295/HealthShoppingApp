import {Platform, StyleSheet} from 'react-native';
import {transparent} from '../../../../core/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },

  buttonStyle: {
    backgroundColor: transparent,
  },

  icon: {
    paddingLeft: 20,
    paddingRight: 30,
  },

  containerStyle: {
    backgroundColor: transparent,
    ...Platform.select({
      android: {
        height: 64,
      },
    }),
  },
});

export default styles;
