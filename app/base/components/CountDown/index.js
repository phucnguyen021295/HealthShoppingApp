import React, {PureComponent} from 'react';

// Components
import Text from '../Text';

// Styles
import styles from './styles/index.css';

class CountDown extends PureComponent {
  constructor(props) {
    super(props);
    const {timeCountDown} = props;
    this.timeStart = new Date().getTime();

    this.state = {
      timeValue: timeCountDown,
    };

    this.timer = 0;

    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.convertTime = this.convertTime.bind(this);
  }

  componentDidMount() {
    this.startCountDown();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  startCountDown = () => {
    clearInterval(this.timer);
    this.timer = null;
    this.startTimer();
  };

  startTimer() {
    const {timeValue} = this.state;
    if (timeValue > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  reset() {
    const {timeCountDown} = this.props;
    this.timeStart = new Date().getTime();
    this.state = {timeValue: timeCountDown};
    this.startCountDown();
  }

  countDown() {
    const {timeCountDown, onResetTimeOut} = this.props;
    const milliSecond = new Date().getTime() - this.timeStart;
    const timeValue = timeCountDown - Math.round(milliSecond / 1000);

    if (timeValue >= 0) {
      this.timeCountDown = timeValue;
      this.setState({
        timeValue: timeValue,
      });
    } else {
      clearInterval(this.timer);
      onResetTimeOut();
    }
  }

  convertTime(time) {
    const divisor = parseInt(time / 60);
    const surplus = time % 60;
    const mm = divisor < 10 ? `0${divisor}` : divisor;
    const ss = surplus < 10 ? `0${surplus}` : surplus;
    return `${mm}:${ss}`;
  }

  render() {
    const {timeValue} = this.state;
    const {styleText, type} = this.props;

    const time = type !== 'ss' ? this.convertTime(timeValue) : timeValue;

    return <Text style={[styles.textTimer, styleText]}>{time}</Text>;
  }
}

CountDown.defaultProps = {
  timeCountDown: 0,
  onResetTimeOut: () => {},
  type: 'mm:ss',
  styleText: {},
};

export default CountDown;
