import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text, {SemiBoldText} from '../../../../base/components/Text';
import {normal} from '../../../../core/fontSize';
import {widthToDP} from '../../../../core/utils/dimension';

function TextInfo(props) {
  const {label, value, containerStyle} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <Text text={label} style={styles.text} />
      <SemiBoldText text={value} style={styles.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: widthToDP(8),
    borderBottomWidth: 0.5,
    borderBottomColor: '#ece9e9'
  },

  text: {
    fontSize: normal,
    color: '#fff',
  },
});

export default TextInfo;
