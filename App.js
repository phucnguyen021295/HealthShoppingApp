/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// Login
import Loading from './app/main/LoadingScreen';
import Introduce from './app/main/IntroduceScreen';
import Login from './app/main/LoginScreen';
import VerifyOTP from './app/main/VerifyOTPScreen';
import VerifyPIN from './app/main/VerifyPINScreen';

// Main
import Home from './app/main/MainScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };

    this.onFinished = this.onFinished.bind(this);
  }

  onFinished() {
    this.setState({isLoading: false});
  }

  render() {
    const {isLoading} = this.state;
    return (
      <NavigationContainer>
        {isLoading ? (
          <Stack.Navigator initialRouteName="Loading" headerMode="none">
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Introduce" component={Introduce} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
            <Stack.Screen name="VerifyPIN">
              {(props) => <VerifyPIN onFinished={this.onFinished} {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

export default App;

{
  /*<Stack.Navigator initialRouteName="Home" headerMode="none">*/
}
{
  /*  <Stack.Screen name="Home" component={Home} />*/
}
{
  /*</Stack.Navigator>*/
}
