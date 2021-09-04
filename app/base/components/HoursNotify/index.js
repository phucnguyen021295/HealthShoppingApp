import React from 'react';
import {Image} from 'react-native-elements';
import {TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Components
import Text from '../Text';
import {convertHours} from '../../../utils/convertDate';

// Styles
import styles from './styles/index.css';

function HoursNotify(props) {
  const {time, onSelect} = props;
  return (
    <View style={styles.viewHours}>
      <Image
        source={require('./styles/images/icons8-double-tick-50.png')}
        style={styles.icon}
      />
      <Text text={convertHours(time)} style={styles.hours} />

      <TouchableOpacity onPress={onSelect}>
        <Ionicons
          name={'ellipsis-vertical'}
          size={16}
          color={'#dddddd'}
          style={styles.iconDot}
        />
      </TouchableOpacity>
    </View>
  );
}

HoursNotify.defaultProps = {
  onSelect: () => {},
};

export default HoursNotify;
