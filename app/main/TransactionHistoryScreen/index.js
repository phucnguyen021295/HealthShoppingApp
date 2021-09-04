

import React, {PureComponent} from 'react';
import {SafeAreaView} from 'react-native';

// Components
import AppHeader from '../../base/components/AppHeader';
import HistoryList from './components/HistoryList';

// Styles
import styles from './styles/index.css';

class TransactionHistoryScreen extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppHeader title={'Lịch sử giao dịch'} />
        <HistoryList />
      </SafeAreaView>
    );
  }
}

TransactionHistoryScreen.defaultProps = {};

export default TransactionHistoryScreen;
