import React, {PureComponent} from 'react';
import {FlatList, TextInput, View} from 'react-native';

// Components
import HistoryItem from '../HistoryItem';
import {MediumText} from '../../../../base/components/Text';
import decorateGetList from '../../../decorateGetList';

// Api
import {getEarningApi} from '../../../../apis/health';
import styles from '../../../NotifyScreen/components/NotifyList/styles/index.css';
import Ionicons from 'react-native-vector-icons/Ionicons';

const buttons = ['All', 'Transfer'];
class HistoryList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: 'all',
      selectedIndex: 0, // 1
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const {loadingOlder} = this.props;
    if (prevProps.loadingOlder !== loadingOlder && !loadingOlder) {
      this.progetData = false;
    }
  }

  toTop = () => {
    // use current
    this.setFlatlistRef &&
      this.setFlatlistRef.scrollToOffset({animated: true, offset: 0});
  };

  setRef = (ref) => {
    this.setFlatlistRef = ref;
  };

  onScroll = (event) => {
    const {type} = this.state;
    const {isGetDataFull} = this.props;
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    if (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 500 &&
      !isGetDataFull &&
      !this.progetData
    ) {
      this.progetData = true;
      this.props.getOlder({type: type});
    }
  };

  ListFooterComponent() {
    return (
      <MediumText
        text={'Chưa có giao dịch nào.'}
        style={{textAlign: 'center', color: '#ffffff'}}
      />
    );
  }

  ListHeaderComponent = () => {
    return (
      <View style={styles.search}>
        <Ionicons name={'ios-search-outline'} size={22} color={'#dddddd'} />
        <TextInput
          style={styles.textInput}
          placeholder={'Tìm kiếm'}
          placeholderTextColor={'#dddddd'}
          selectionColor={'#ffffff'}
        />
      </View>
    );
  };

  renderItem = ({item}) => <HistoryItem item={item} />;

  render() {
    const {data, loadingFirst} = this.props;
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.identity}
        onScroll={this.onScroll}
        ref={this.setRef}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={this.ListHeaderComponent}
        ListFooterComponent={
          data.length === 0 && !loadingFirst && this.ListFooterComponent
        }
        contentContainerStyle={{paddingVertical: 10}}
      />
    );
  }
}

export default decorateGetList(HistoryList, getEarningApi, {type: 'all'});
