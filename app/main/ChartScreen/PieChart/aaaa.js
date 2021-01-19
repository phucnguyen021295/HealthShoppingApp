/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 11/1/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {Dimensions, Text, View, ScrollView} from 'react-native';
import {BarChart, PieChart} from 'react-native-chart-kit';
import {heightToDP} from '../../../core/utils/dimension';

import {labels} from '../formatData';
import {month} from '../styles/data';

const {width} = Dimensions.get('window');

const data = [
    {
        name: 'TN nhánh yếu',
        population: 0,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#ffffff',
        legendFontSize: 15,
    },
    {
        name: 'TN trực tiếp',
        population: 0,
        color: '#F00',
        legendFontColor: '#ffffff',
        legendFontSize: 15,
    },
    {
        name: 'TN lãnh đạo',
        population: 0,
        color: 'red',
        legendFontColor: '#ffffff',
        legendFontSize: 15,
    },
    {
        name: 'TN đều tầng',
        population: 0,
        color: '#00ff33',
        legendFontColor: '#ffffff',
        legendFontSize: 15,
    },
    {
        name: 'Thưởng lãnh đạo',
        population: 0,
        color: 'rgb(0, 0, 255)',
        legendFontColor: '#ffffff',
        legendFontSize: 15,
    },
    {
        name: 'Thưởng LĐCC',
        population: 0,
        color: 'rgb(71,127,57)',
        legendFontColor: '#ffffff',
        legendFontSize: 15,
    },
];

class PieChartScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        const {dataChart} = this.props;
        const month1 = month[0];
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={{color: '#ffffff', paddingHorizontal: 20}}>
                        Tháng 1/2021
                    </Text>
                    <PieChart
                        data={data}
                        width={width}
                        height={heightToDP(200)}
                        hasLegend={true}
                        chartConfig={{
                            // backgroundColor: '#fffffff',
                            // backgroundGradientFrom: '#fb8c00',
                            // backgroundGradientTo: '#00000059',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                                color: '#ffffff',
                            },
                            propsForDots: {
                                r: '6',
                                strokeWidth: '2',
                                stroke: '#ffa726',
                            },
                            fillShadowGradient: 'skyblue',
                            fillShadowGradientOpacity: 0.8,
                            // backgroundGradientFrom:  "#1E2923",
                            backgroundGradientFromOpacity: 0,
                            // backgroundGradientTo: "#08130D",
                            backgroundGradientToOpacity: 0,
                        }}
                        // bezier
                        style={{
                            marginVertical: 8,
                            color: '#ffffff',
                        }}
                        accessor="population"
                        backgroundColor="transparent"
                        // paddingLeft="15"
                        absolute
                    />
                </View>

                <View>
                    <Text style={{color: '#ffffff', paddingHorizontal: 20}}>
                        Tháng 12/2020
                    </Text>
                    <PieChart
                        data={data}
                        width={width}
                        height={heightToDP(200)}
                        hasLegend={true}
                        chartConfig={{
                            // backgroundColor: '#fffffff',
                            // backgroundGradientFrom: '#fb8c00',
                            // backgroundGradientTo: '#00000059',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                                color: '#ffffff',
                            },
                            propsForDots: {
                                r: '6',
                                strokeWidth: '2',
                                stroke: '#ffa726',
                            },
                            fillShadowGradient: 'skyblue',
                            fillShadowGradientOpacity: 0.8,
                            // backgroundGradientFrom:  "#1E2923",
                            backgroundGradientFromOpacity: 0,
                            // backgroundGradientTo: "#08130D",
                            backgroundGradientToOpacity: 0,
                        }}
                        // bezier
                        style={{
                            marginVertical: 8,
                            color: '#ffffff',
                        }}
                        accessor="population"
                        backgroundColor="transparent"
                        // paddingLeft="15"
                        absolute
                    />
                </View>

                <View>
                    <Text style={{color: '#ffffff', paddingHorizontal: 20}}>
                        Tháng 11/2020
                    </Text>
                    <PieChart
                        data={data}
                        width={width}
                        height={heightToDP(200)}
                        hasLegend={true}
                        chartConfig={{
                            // backgroundColor: '#fffffff',
                            // backgroundGradientFrom: '#fb8c00',
                            // backgroundGradientTo: '#00000059',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                                color: '#ffffff',
                            },
                            propsForDots: {
                                r: '6',
                                strokeWidth: '2',
                                stroke: '#ffa726',
                            },
                            fillShadowGradient: 'skyblue',
                            fillShadowGradientOpacity: 0.8,
                            // backgroundGradientFrom:  "#1E2923",
                            backgroundGradientFromOpacity: 0,
                            // backgroundGradientTo: "#08130D",
                            backgroundGradientToOpacity: 0,
                        }}
                        // bezier
                        style={{
                            marginVertical: 8,
                            color: '#ffffff',
                        }}
                        accessor="population"
                        backgroundColor="transparent"
                        // paddingLeft="15"
                        absolute
                    />
                </View>

                <View>
                    <Text style={{color: '#ffffff', paddingHorizontal: 20}}>
                        Tháng 10/2020
                    </Text>
                    <PieChart
                        data={data}
                        width={width}
                        height={heightToDP(200)}
                        hasLegend={true}
                        chartConfig={{
                            // backgroundColor: '#fffffff',
                            // backgroundGradientFrom: '#fb8c00',
                            // backgroundGradientTo: '#00000059',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                                color: '#ffffff',
                            },
                            propsForDots: {
                                r: '6',
                                strokeWidth: '2',
                                stroke: '#ffa726',
                            },
                            fillShadowGradient: 'skyblue',
                            fillShadowGradientOpacity: 0.8,
                            // backgroundGradientFrom:  "#1E2923",
                            backgroundGradientFromOpacity: 0,
                            // backgroundGradientTo: "#08130D",
                            backgroundGradientToOpacity: 0,
                        }}
                        // bezier
                        style={{
                            marginVertical: 8,
                            color: '#ffffff',
                        }}
                        accessor="population"
                        backgroundColor="transparent"
                        // paddingLeft="15"
                        absolute
                    />
                </View>

                <View>
                    <Text style={{color: '#ffffff', paddingHorizontal: 20}}>
                        Tháng 09/2020
                    </Text>
                    <PieChart
                        data={data}
                        width={width}
                        height={heightToDP(200)}
                        hasLegend={true}
                        chartConfig={{
                            // backgroundColor: '#fffffff',
                            // backgroundGradientFrom: '#fb8c00',
                            // backgroundGradientTo: '#00000059',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                                color: '#ffffff',
                            },
                            propsForDots: {
                                r: '6',
                                strokeWidth: '2',
                                stroke: '#ffa726',
                            },
                            fillShadowGradient: 'skyblue',
                            fillShadowGradientOpacity: 0.8,
                            // backgroundGradientFrom:  "#1E2923",
                            backgroundGradientFromOpacity: 0,
                            // backgroundGradientTo: "#08130D",
                            backgroundGradientToOpacity: 0,
                        }}
                        // bezier
                        style={{
                            marginVertical: 8,
                            color: '#ffffff',
                        }}
                        accessor="population"
                        backgroundColor="transparent"
                        // paddingLeft="15"
                        absolute
                    />
                </View>

                <View>
                    <Text style={{color: '#ffffff', paddingHorizontal: 20}}>
                        Tháng 08/2020
                    </Text>
                    <PieChart
                        data={data}
                        width={width}
                        height={heightToDP(200)}
                        hasLegend={true}
                        chartConfig={{
                            // backgroundColor: '#fffffff',
                            // backgroundGradientFrom: '#fb8c00',
                            // backgroundGradientTo: '#00000059',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                                color: '#ffffff',
                            },
                            propsForDots: {
                                r: '6',
                                strokeWidth: '2',
                                stroke: '#ffa726',
                            },
                            fillShadowGradient: 'skyblue',
                            fillShadowGradientOpacity: 0.8,
                            // backgroundGradientFrom:  "#1E2923",
                            backgroundGradientFromOpacity: 0,
                            // backgroundGradientTo: "#08130D",
                            backgroundGradientToOpacity: 0,
                        }}
                        // bezier
                        style={{
                            marginVertical: 8,
                            color: '#ffffff',
                        }}
                        accessor="population"
                        backgroundColor="transparent"
                        // paddingLeft="15"
                        absolute
                    />
                </View>

                <View>
                    <Text style={{color: '#ffffff', paddingHorizontal: 20}}>
                        Tháng 07/2020
                    </Text>
                    <PieChart
                        data={data}
                        width={width}
                        height={heightToDP(200)}
                        hasLegend={true}
                        chartConfig={{
                            // backgroundColor: '#fffffff',
                            // backgroundGradientFrom: '#fb8c00',
                            // backgroundGradientTo: '#00000059',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                                color: '#ffffff',
                            },
                            propsForDots: {
                                r: '6',
                                strokeWidth: '2',
                                stroke: '#ffa726',
                            },
                            fillShadowGradient: 'skyblue',
                            fillShadowGradientOpacity: 0.8,
                            // backgroundGradientFrom:  "#1E2923",
                            backgroundGradientFromOpacity: 0,
                            // backgroundGradientTo: "#08130D",
                            backgroundGradientToOpacity: 0,
                        }}
                        // bezier
                        style={{
                            marginVertical: 8,
                            color: '#ffffff',
                        }}
                        accessor="population"
                        backgroundColor="transparent"
                        // paddingLeft="15"
                        absolute
                    />
                </View>

                <View>
                    <Text style={{color: '#ffffff', paddingHorizontal: 20}}>
                        Tháng 06/2020
                    </Text>
                    <PieChart
                        data={data}
                        width={width}
                        height={heightToDP(200)}
                        hasLegend={true}
                        chartConfig={{
                            // backgroundColor: '#fffffff',
                            // backgroundGradientFrom: '#fb8c00',
                            // backgroundGradientTo: '#00000059',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                                color: '#ffffff',
                            },
                            propsForDots: {
                                r: '6',
                                strokeWidth: '2',
                                stroke: '#ffa726',
                            },
                            fillShadowGradient: 'skyblue',
                            fillShadowGradientOpacity: 0.8,
                            // backgroundGradientFrom:  "#1E2923",
                            backgroundGradientFromOpacity: 0,
                            // backgroundGradientTo: "#08130D",
                            backgroundGradientToOpacity: 0,
                        }}
                        // bezier
                        style={{
                            marginVertical: 8,
                            color: '#ffffff',
                        }}
                        accessor="population"
                        backgroundColor="transparent"
                        // paddingLeft="15"
                        absolute
                    />
                </View>

            </ScrollView>
        );
    }
}

export default PieChartScreen;
