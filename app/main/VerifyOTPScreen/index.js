import React, {PureComponent} from 'react';
import {
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
} from 'react-native';
import {Button} from 'react-native-elements';
import SmoothPinCodeInput from '../../base/components/SmoothPinCodeInput';

// Components
import AppHeader from '../../base/components/AppHeader';
import Text from '../../base/components/Text';

// Storage
import {setCheckVerifyOTP} from '../../core/storage';

// Api
import {getActiveApi, verifyOTPApi} from '../../apis/health';

// Styles
import styles from './styles/index.css';
import ImageBackGround from '../../base/components/ImageBackGround';
import global, {setMemberCodeGlobal} from '../../global';
import CountDown from '../../base/components/CountDown';

class VerifyOTPScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      code: '',
      isCountDown: true,
    };
    this.count = 0;
  }

  componentDidMount() {
    getActiveApi(
      () => {},
      () => {
        // alert('Đã xảy ra xự cố. vui lòng thử lại sau');
      },
    );
  }

  pinInput = React.createRef();

  onVerifyOTP = () => {
    const {code} = this.state;
    this.setState({loading: true}, () => {
      verifyOTPApi(
        code,
        (response) => {
          const membercode = response.data;
          // // TODO: Set tạm số tiến
          // setAccountBalanceGlobal(1000);
          setMemberCodeGlobal(membercode);
          this.props.navigation.replace('VerifyPIN');
          this.setState({loading: false});
        },
        () => {
          this.count++;
          this.pinInput.current
            .shake()
            .then(() => this.setState({code: '', loading: false}));
          if (this.count === 5) {
            this.props.navigation.navigate('Login');
          }
        },
      );
    });
  };

  onVisibleResetOTP = () => {
    this.setState({isCountDown: false});
  };

  setCountDownRef = (ref) => {
    this.countDownRef = ref;
  };

  render() {
    const {TimeCountDownOTP} = global;
    const {loading, code} = this.state;
    return (
      <ImageBackGround
        source={require('./styles/images/background2.jpeg')}
        blurRadius={10}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex: 1}}>
          <AppHeader
            showBack={false}
            title={'Xác thực mã OTP'}
            color={'#ffffff'}
          />
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.body}>
              <SmoothPinCodeInput
                ref={this.pinInput}
                value={code}
                onTextChange={(code) => this.setState({code})}
                // onFulfill={this._checkCode}
                codeLength={7}
                keyboardType={'default'}
                onBackspace={() => console.log('No more back.')}
                autoFocus={true}
              />
              <Text
                text={
                  'Hệ thống đang gửi OTP đến số điện thoại đăng kí tài khoản. Vui lòng chờ trong giây lát...'
                }
                style={styles.text1}
              />
              <CountDown
                ref={this.setCountDownRef}
                timeCountDown={TimeCountDownOTP}
                onResetTimeOut={this.onVisibleResetOTP}
              />
              <Button
                title="Xác thực OTP"
                buttonStyle={styles.btnButtonStyle}
                onPress={this.onVerifyOTP}
                loading={loading}
              />
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackGround>
    );
  }
}

export default VerifyOTPScreen;
