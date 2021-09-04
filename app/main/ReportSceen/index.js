import React, {PureComponent} from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

// Components
import Header from '../HomeScreen/components/Header';
import ImageBackGround from '../../base/components/ImageBackGround';
import PieChart from '../ChartScreen/PieChart';

// Apis
import {getReportApi} from '../../apis/health';

// styles
import styles from './styles/index.css';
import HistoryItem from '../TransactionHistoryScreen/components/HistoryItem';
import ChartScreen from '../ChartScreen';
import LinearGradient from '../../base/components/LinearGradient';
import HeaderCustom from '../../base/components/HeaderCustom';
import SafeAreaViewBase from '../../base/components/SafeAreaViewBase';

class DetailDrawer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataCharts: [],
      selectedIndex: 0,
    };
  }

  componentDidMount() {
    getReportApi(2, (response) => {
      const {data} = response;
      this.setState({dataCharts: data});
    });
  }

  updateIndex = (selectedIndex) => {
    this.setState({selectedIndex});
  };

  renderItem = ({item}) => (
    <View style={styles.info}>
      <PieChart dataChart={item} />
    </View>
  );

  render() {
    const buttons = ['All', 'Detail'];
    const {dataCharts, selectedIndex} = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaViewBase />
        <HeaderCustom title={'Report'} color={'#ffffff'} />
        <ImageBackGround
          source={require('../../images/backgroundHome.png')}
          blurRadius={4}>
            <View style={styles.body}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingVertical: 12,
                    }}>
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={{height: 40, width: 180, borderRadius: 20}}
                        selectedButtonStyle={{backgroundColor: '#dddddd'}}
                    />
                </View>

                {selectedIndex === 0 ? (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                            }}>
                            <ChartScreen styleChart={{height: 400}} />
                        </View>
                    </ScrollView>
                ) : (
                    <FlatList
                        data={dataCharts}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.identity}
                        showsVerticalScrollIndicator={false}
                    />
                )}

                {/*<View style={{flex: 1}}>*/}
                {/*  <View style={styles.info}>*/}
                {/*    <PieChart />*/}
                {/*  </View>*/}
                {/*</View>*/}
            </View>
        </ImageBackGround>
        <SafeAreaViewBase />
      </View>
    );
  }
}

export default DetailDrawer;
