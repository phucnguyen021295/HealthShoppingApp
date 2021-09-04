import React from 'react';
import {View, FlatList, Alert, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Components
import Text from '../../../../base/components/Text';

// Styles
import styles from './styles/index.css';
import {withNavigation} from '@react-navigation/compat';
import {clearData} from '../../../../core/storage';
import {callBack} from '../../../../core/data';
import global from '../../../../global';



const data = [
  {
    id: '1',
    title: 'Thống kê',
    titleEn: 'Report',
    icon: <Icon name="md-stats-chart-outline" size={21} color="white" />,
    screen: 'Report',
    image: 'report',
  },
  {
    id: '2',
    title: 'Chuyển tiền',
    titleEn: 'Transfers',
    icon: <Icon name="time-outline" size={23} color="white" />,
    screen: 'History',
    image: 'transfers',
  },
  {
    id: '3',
    title: 'Nạp tiền',
    titleEn: 'Recharge',
    icon: <Icon name="ios-newspaper-outline" size={23} color="white" />,
    screen: 'News',
    image: 'recharge',
  },
  {
    id: '4',
    title: 'Rút tiền',
    titleEn: 'Withdraw money',
    icon: <Icon name="ios-power-sharp" size={23} color="white" />,
    screen: 'Logout',
    image: 'withdraw',
  },
  {
    id: '5',
    title: 'Mua hàng',
    titleEn: 'Shopping',
    icon: <Icon name="md-stats-chart-outline" size={21} color="white" />,
    screen: 'Shopping',
    image: 'shopping',
  },
  {
    id: '6',
    title: 'Nhật kí\ntài khoản',
    titleEn: 'Account Diary',
    icon: <Icon name="time-outline" size={23} color="white" />,
    screen: 'History',
    image: 'nhatkitaikhoan',
  },
  {
    id: '7',
    title: 'Lịch sử\nmua hàng',
    titleEn: 'Purchase history',
    icon: <Icon name="ios-newspaper-outline" size={23} color="white" />,
    screen: 'News',
    image: 'history',
  },
  {
    id: '8',
    title: 'RCl',
    titleEn: 'RCl',
    icon: <Icon name="ios-power-sharp" size={23} color="white" />,
    screen: 'Logout',
    image: 'RCl',
  },
];

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

function ListApp(props) {
  const {navigation} = props;
  const onChangeNavigate = (item) => {
    if (item.screen === 'Logout') {
      Alert.alert(
        'Thông báo',
        'Đăng xuất tài khoản?',
        [
          {
            text: 'Hủy bỏ',
            onPress: () => console.log('Cancel Pressed'),
          },
          {
            text: 'Đồng ý',
            onPress: () => {
              clearData().then(() => {
                callBack.onLogout();
              });
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      navigation.navigate(item.screen);
    }
  };
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({item}) => (
        <TouchableOpacity
          activeOpacity={1}
          style={styles.row}
          onPress={() => onChangeNavigate(item)}>
          <View>
            <Image source={ICON[item.image]} style={styles.image} />
          </View>
          <Text
            text={global.Language === 'vi' ? item.title : item.titleEn}
            style={styles.text}
          />
        </TouchableOpacity>
      )}
      numColumns={4}
      columnWrapperStyle={styles.columnWrapperStyle}
      contentContainerStyle={styles.container}
    />
  );
}

export default withNavigation(ListApp);
