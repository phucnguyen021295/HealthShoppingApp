import React from 'react';
import FastImage from 'react-native-fast-image';

// Styles
import {LOGO_HEIGHT} from './styles/index.css';

function Logo(props) {
  const {style} = props;
  return (
    <FastImage
      source={require('./styles/images/logo1.jpg')}
      style={[{width: LOGO_HEIGHT, height: LOGO_HEIGHT}, style]}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
}

Logo.defaultProps = {
  style: {},
};

export default Logo;
