import React, {PureComponent} from 'react';
import {useWindowDimensions, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Components
import ImageBackGround from '../../base/components/ImageBackGround';
import HistoryList from '../TransactionHistoryScreen/components/HistoryList';

// styles
import styles from './styles/index.css';
import LinearGradient from '../../base/components/LinearGradient';
import HeaderCustom from '../../base/components/HeaderCustom';
import SafeAreaViewBase from '../../base/components/SafeAreaViewBase';

import message from '../../msg/history';
import {color} from '../../core/color';
import {getPaidApi, cancelGetPaidApi} from '../../apis/health';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import WithdrawalLogList from './components/WithdrawalLogList';
import Text from '../../base/components/Text';
import {heightToDP} from '../../core/utils/dimension';

const renderScene = SceneMap({
  first: HistoryList,
  second: WithdrawalLogList,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    renderLabel={({route, focused, color}) => (
      <Text style={[styles.titleTabBar, {color}]}>{route.title}</Text>
    )}
    indicatorStyle={{
      backgroundColor: 'white',
      height: 1,
      justifyContent: 'flex-end',
    }}
    indicatorContainerStyle={{height: heightToDP(54), alignItems: 'flex-end'}}
    tabStyle={{
      paddingBottom: 0,
    }}
    style={styles.tabItem}
  />
);

function TabViews(props) {
    const {formatMessage} = props;
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: formatMessage(message.accountDiary)},
    {key: 'second', title: formatMessage(message.withdrawalLog)},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{width: layout.width}}
      lazy
    />
  );
}

function HistoryDrawer(props) {
  const {intl} = props;
  const {formatMessage} = intl;
  return (
    <View style={styles.container}>
      <SafeAreaViewBase />
      <HeaderCustom
        title={formatMessage(message.titleHeader)}
        color={'#ffffff'}
        ViewComponent={LinearGradient}
      />
      <ImageBackGround
        source={require('../../images/backgroundHome.png')}
        blurRadius={4}>
        <View style={styles.info}>
          <TabViews formatMessage={formatMessage} />
        </View>
      </ImageBackGround>
      <SafeAreaViewBase />
    </View>
  );
}

HistoryDrawer.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(HistoryDrawer);
