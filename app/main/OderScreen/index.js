/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/20/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {SearchBar} from 'react-native-elements';

// Components
import OderList from './components/OderList';

// Styles
import styles from './styles/index.css';

class OderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  updateSearch = (search) => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
          <SearchBar
            placeholder="Tìm kiếm"
            onChangeText={this.updateSearch}
            value={search}
          />
          <OderList />
        </View>
      </SafeAreaView>
    );
  }
}

OderScreen.defaultProps = {
  showBack: false,
};

export default OderScreen;
