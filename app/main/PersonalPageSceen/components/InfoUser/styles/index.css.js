import {StyleSheet} from 'react-native';
import {widthToDP} from '../../../../../core/utils/dimension';
import {large} from '../../../../../core/fontSize';

const styles = StyleSheet.create({
  container: {
    paddingBottom: widthToDP(20),
  },

  rowFullName: {
    paddingBottom: widthToDP(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  fullName: {
    fontSize: large,
    color: '#fff',
  },
});

export default styles;
