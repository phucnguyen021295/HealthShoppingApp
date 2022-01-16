import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

function ActivityIndicatorBase(props) {
  const {color, containerStyle} = props;
  return (
    <View style={[styles.center, containerStyle]}>
      <ActivityIndicator size="large" color={color} />
    </View>
  );
}

ActivityIndicatorBase.defaultProps = {
  color: '#ffffff',
  containerStyle: {},
};

const styles = StyleSheet.create({
  center: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 99,
  },
});

export default ActivityIndicatorBase;
