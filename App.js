/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import IntroduceScreen from './app/main/VerifyOTPScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    return <IntroduceScreen />;
  }
}

export default App;
