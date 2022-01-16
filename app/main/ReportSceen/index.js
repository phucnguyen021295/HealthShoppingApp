import React from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';

// Components
import ImageBackGround from '../../base/components/ImageBackGround';
import ChartScreen from '../ChartScreen';
import HeaderCustom from '../../base/components/HeaderCustom';
import SafeAreaViewBase from '../../base/components/SafeAreaViewBase';
import DetailReport from './components/DetailReport';

// styles
import styles from './styles/index.css';
import {injectIntl} from 'react-intl';
import message from '../../msg/home';

function AllReport() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          paddingVertical: 10,
        }}>
        <ChartScreen styleChart={{height: 400}} />
      </View>
    </ScrollView>
  );
}

const renderScene = SceneMap({
  first: AllReport,
  second: DetailReport,
});

const TabBarCustom = (props) => {
  const {setIndex, index} = props;
  const inputRange = props.navigationState.routes.map((x, i) => i);

  return (
    <View style={styles.tabBar}>
      <View style={styles.tabBar1}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Animated.Text style={[styles.lableTab, {opacity}]}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

function TabViews(props) {
    const {formatMessage} = props;
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: formatMessage(message.all)},
    {key: 'second', title: formatMessage(message.detail)},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={(props) => (
        <TabBarCustom {...props} index={index} setIndex={setIndex} />
      )}
      initialLayout={{width: layout.width}}
      lazy
    />
  );
}

function ReportScreen(props) {
    const {intl} = props;
    const {formatMessage} = intl;
  return (
    <View style={styles.container}>
      <SafeAreaViewBase />
      <HeaderCustom title={formatMessage(message.headerReport)} color={'#ffffff'} />
      <ImageBackGround source={require('../../images/backgroundHome.png')}>
        <View style={styles.backGround}>
          <TabViews formatMessage={formatMessage} />
        </View>
      </ImageBackGround>
      <SafeAreaViewBase />
    </View>
  );
}

export default injectIntl(ReportScreen);
