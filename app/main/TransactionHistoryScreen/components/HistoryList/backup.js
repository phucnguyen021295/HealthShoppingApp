

import React, {PureComponent} from 'react';
import {FlatList, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

// Components
import HistoryItem from '../HistoryItem';
import {MediumText} from '../../../../base/components/Text';
import decorateGetList from '../../../decorateGetList';

// Api
import {getEarningApi} from '../../../../apis/health';

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

    updateIndex = (selectedIndex) => {
        this.setState(
            {type: buttons[selectedIndex], selectedIndex: selectedIndex},
            () => {
                this.props.getNewer({type: buttons[selectedIndex]});
                this.toTop();
            },
        );
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

    renderItem = ({item}) => <HistoryItem item={item} />;

    render() {
        const {selectedIndex} = this.state;
        const {data, loadingFirst} = this.props;
        return (
            <View style={{paddingTop: 10}}>
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
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.identity}
                    onScroll={this.onScroll}
                    ref={this.setRef}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={
                        data.length === 0 && !loadingFirst && this.ListFooterComponent
                    }
                    style={{marginTop: 2, marginBottom: 150}}
                    contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 10}}
                />
            </View>
        );
    }
}

export default decorateGetList(HistoryList, getEarningApi, {type: 'all'});
