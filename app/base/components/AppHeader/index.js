import React, {PureComponent} from 'react';
import {BackHandler, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withNavigation} from '@react-navigation/compat';

import {SemiBoldText} from '../Text';

// Styles
import styles, {ICON_SIZE} from './styles/index.css';
import {color} from '../../../core/color';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.onGoBack = this.onGoBack.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onGoBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onGoBack);
  }

  onGoBack() {
    const {onBack, showBack} = this.props;

    if (!showBack) {
      return;
    }

    if (onBack) {
      onBack();
      return;
    }
    this.props.navigation.goBack();
    return true;
  }

  render() {
    const {showBack, title, styleHeader, styleTitle, color} = this.props;
    return (
      <View style={[styles.container, styleHeader]}>
        {showBack && (
          <TouchableOpacity onPress={this.onGoBack} style={styles.btnBack}>
            <Ionicons
              name={'chevron-back-outline'}
              size={ICON_SIZE}
              style={styles.icon}
              color={color}
            />
          </TouchableOpacity>
        )}
        <View style={styles.title}>
          <SemiBoldText style={[styles.textTitle, {color: color}, styleTitle]}>
            {title}
          </SemiBoldText>
        </View>
      </View>
    );
  }
}

Header.defaultProps = {
  color: color,
  showBack: true,
};

export default withNavigation(Header);
