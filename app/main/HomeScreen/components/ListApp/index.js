import React from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';

// Components
import {SemiBoldText} from '../../../../base/components/Text';

// Styles
import styles from './styles/index.css';
import {withNavigation} from '@react-navigation/compat';
import global from '../../../../global';

const ICON = {
  report: require('./styles/images/icon_report.png'),
  transfers: require('./styles/images/icon_chuyentien.png'),
  recharge: require('./styles/images/icon_naptien.png'),
  withdraw: require('./styles/images/icon_ruttien.png'),
  shopping: require('./styles/images/icon_shopping.png'),
  nhatkitaikhoan: require('./styles/images/icon_nhatkitaikhoan.png'),
  history: require('./styles/images/icon_history.png'),
  RCl: require('./styles/images/icon_RCl.png'),
};

function AppItem(props) {
  const {navigation, item, onPostRCl} = props;
  const onChangeNavigate = () => {
    if (item.screen === 'RCl') {
      onPostRCl();
      return;
    }
    if (item.screen === 'Recharge') {
      alert('Chức năng đang phát triển')
      return;
    }
    navigation.navigate(item.screen);
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.row}
      onPress={onChangeNavigate}>
      <View>
        <Image source={ICON[item.image]} style={styles.image} />
      </View>
      <SemiBoldText
        text={global.Language === 'vi' ? item.title : item.titleEn}
        style={styles.text}
      />
    </TouchableOpacity>
  );
}

function ListApp(props) {
  const {ListAppHome} = global;
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={ListAppHome}
      renderItem={({item}) => <AppItem {...props} item={item} />}
      numColumns={4}
      columnWrapperStyle={styles.columnWrapperStyle}
      contentContainerStyle={styles.container}
    />
  );
}

export default withNavigation(ListApp);
