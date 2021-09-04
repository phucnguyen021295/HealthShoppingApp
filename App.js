/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {PureComponent} from 'react';
import {StatusBar, Platform, Linking} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import ContextProvider from './ContextProvider';
import LanguageProvider from './LanguageProvider';
import {translationMessages} from './app/translations/i18n';
import {navigationRef} from './RootNavigation';
import {handleNotificationOpen} from './app/main/handleNotificationOpen';
import {handleDisplayNotification} from './app/core/notification';

// Login
import Loading from './app/main/LoadingScreen';
import Introduce from './app/main/IntroduceScreen';
import Login from './app/main/LoginScreen';
import VerifyOTP from './app/main/VerifyOTPScreen';
import VerifyPIN from './app/main/VerifyPINScreen';

// Main
import Home from './app/main/MainScreen';
import ShoppingCart from './app/main/ShoppingCartScreen';
import UserShopping from './app/main/UserShoppingScreen';
import AddressShopping from './app/main/AddressShoppingScreen';
import TransactionHistory from './app/main/TransactionHistoryScreen';
import PersonalPage from './app/main/PersonalPageSceen';
import History from './app/main/HistoryScreen';
import Report from './app/main/ReportSceen';
import ShowQRCode from './app/main/ShowQRCodeScreen';
import News from './app/main/News';
import NewDetail from './app/main/News/components/NewDetailScreen';
import LoginPinCode from './app/main/LoginPinCode';
import Notify from './app/main/NotifyScreen';
import NotifyDetail from './app/main/NotifyScreen/components/NotifyDetailScreen';
import HistoryDetail from './app/main/HistoryDetailScreen';
import Oder from './app/main/OderScreen'

import {callBack} from './app/core/data';
import {
  registerInitialNotification,
  registerNotificationOpened,
  registerNotification,
  displayNotification,
} from './app/core/fcm';

import {initDatabase} from './app/core/db/Sqlitedb';
import firebase from 'react-native-firebase';

const Stack = createStackNavigator();

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };

    this.onFinished = this.onFinished.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.onNotificationOpened = this.onNotificationOpened.bind(this);
  }

  async componentDidMount() {
    // Khởi tạo db.
    initDatabase();
    Platform.OS === 'android' &&
      StatusBar.setHidden(true) &&
      StatusBar.setTranslucent(true) &&
      StatusBar.setBackgroundColor('#ffffff00', true);

    callBack.onLogout = this.onLogout;

    this.removeNotificationOpenedListener = registerNotificationOpened(
      this.onNotificationOpened,
    );

    // Check whether an initial notification is available
    registerInitialNotification(this.onNotificationOpened);

    this.removeNotificationListener = registerNotification(
      async (notifyObj) => {
        // console.log('registerNotification', JSON.stringify(notifyObj))
        handleDisplayNotification(notifyObj);
      },
    );

    this.unsubscribe = navigationRef.current?.addListener('state', (e) => {
      if (
        this.remoteMessage &&
        navigationRef.current.getRootState().routes[0].name !== 'Loading'
      ) {
        console.log(
          'unsubscribe',
          navigationRef.current.getRootState().routes[0].name,
        );
        handleNotificationOpen(this.remoteMessage);
        this.remoteMessage = null;
      }
    });
  }

  componentWillUnmount(): * {
    this.removeNotificationListener && this.removeNotificationListener();
    this.removeNotificationOpenedListener &&
      this.removeNotificationOpenedListener();
    this.unsubscribe && this.unsubscribe();
  }

  onFinished() {
    this.setState({isLoading: false});
  }

  onLogout() {
    this.setState({isLoading: true});
  }

  onNotificationOpened(remoteMessage) {
    console.log('onNotificationOpened', remoteMessage);
    if (!remoteMessage) {
      return;
    }

    if (navigationRef.current.getRootState().routes[0].name === 'Loading') {
      this.remoteMessage = remoteMessage;
      return;
    }

    handleNotificationOpen(remoteMessage);
  }

  render() {
    const {isLoading} = this.state;

    const screens = (
      <>
        <Stack.Screen name="NewDetail" component={NewDetail} />
        <Stack.Screen name="NotifyDetail" component={NotifyDetail} />
        <Stack.Screen name="HistoryDetail" component={HistoryDetail} />
      </>
    );

    return (
      <ContextProvider>
        <LanguageProvider messages={translationMessages}>
          <NavigationContainer ref={navigationRef}>
            {isLoading ? (
              <Stack.Navigator initialRouteName="Loading" headerMode="none">
                <Stack.Screen name="Loading" component={Loading} />
                <Stack.Screen name="Introduce" component={Introduce} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
                <Stack.Screen name="VerifyPIN" component={VerifyPIN} />
                <Stack.Screen name={'LoginPinCode'}>
                  {(props) => (
                    <LoginPinCode onFinished={this.onFinished} {...props} />
                  )}
                </Stack.Screen>
                <Stack.Screen name="Notify" component={Notify} />
                {screens}
              </Stack.Navigator>
            ) : (
              <Stack.Navigator initialRouteName="Home" headerMode="none">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
                <Stack.Screen name="UserShopping" component={UserShopping} />
                <Stack.Screen
                  name="AddressShopping"
                  component={AddressShopping}
                />
                <Stack.Screen
                  name="TransactionHistory"
                  component={TransactionHistory}
                />
                <Stack.Screen name="PersonalPage" component={PersonalPage} />
                <Stack.Screen name="Report" component={Report} />
                <Stack.Screen name="History" component={History} />
                <Stack.Screen name="ShowQRCode" component={ShowQRCode} />
                <Stack.Screen name="News" component={News} />
                <Stack.Screen name="Shopping" component={Oder} />
                {screens}
              </Stack.Navigator>
            )}
          </NavigationContainer>
        </LanguageProvider>
      </ContextProvider>
    );
  }
}

export default App;
