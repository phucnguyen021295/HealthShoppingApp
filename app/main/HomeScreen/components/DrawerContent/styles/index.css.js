import {StyleSheet} from 'react-native';
import {color} from '../../../../../core/color';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: color,
  },

  infoUser: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },

  fullName: {
    paddingLeft: 18,
  },
});

export default styles;
