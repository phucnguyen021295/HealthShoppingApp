/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/30/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {View, processColor} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {BarChart} from 'react-native-charts-wrapper';

// Components
import DropDownPicker from '../../base/components/DropDownPicker';
import Text from '../../base/components/Text';

// Apis
import {getReportApi} from '../../apis/health';

import {labels as labelsVi, labelsEn} from './formatData';
import styles from './styles/index.css';
import {registerShoppingCardChange} from '../../core/shoppingCart';

import global from '../../global';
import {injectIntl} from 'react-intl';
import message from '../../msg/home';
const {Language} = global;
const vi = Language === 'vi';

const _labels = {
  vi: labelsVi,
  en: labelsEn
};

const colors = {
  'Weak Leg': processColor('green'),
  Direct: processColor('red'),
  Mega: processColor('purple'),
  F1: processColor('yellow'),
  Level: processColor('blue'),
  Bonus: processColor('pink'),
  'Leadership Bonus': processColor('orange'),
  Order: processColor('plum'),
  Transfer: processColor('gold'),
  Total: processColor('salmon'),
};

const colorsNote = {
  'Weak Leg': 'green',
  Direct: 'red',
  Mega: 'purple',
  F1: 'yellow',
  Level: 'blue',
  Bonus: 'pink',
  'Leadership Bonus': 'orange',
  Order: 'plum',
  Transfer: 'gold',
  Total: 'salmon',
};

const formatDay = {
  vi: {
    0: 'Thứ 2',
    1: 'Thứ 3',
    2: 'Thứ 4',
    3: 'Thứ 5',
    4: 'Thứ 6',
    5: 'Thứ 7',
    6: 'CN',
  },
  en: {
    0: 'Mon',
    1: 'Tue',
    2: 'Wed',
    3: 'Thu',
    4: 'Fri',
    5: 'Sat',
    6: 'Sun',
  },
};

const itemsSelectCalendar = (language) => {
  const data = [
    {
      label: language === 'vi' ? 'Ngày' : 'Day',
      value: 'day',
      icon: () => <Icon name="flag" size={18} color="#900" />,
      hidden: true,
    },
    {
      label: language === 'vi' ? 'Tuần' : 'Week',
      value: 'week',
      icon: () => <Icon name="flag" size={18} color="#900" />,
    },
    {
      label: language === 'vi' ? 'Tháng' : 'Month',
      value: 'month',
      icon: () => <Icon name="flag" size={18} color="#900" />,
    },
  ];
  return data;
};

const ARRAY_KEY_SELECT = ['Order', 'Transfer'];

const filterReport = {
  vi: [
    {
      label: 'Mặc định',
      value: ARRAY_KEY_SELECT,
      hidden: true,
    },

    {
      label: 'Thu nhập nhánh yếu',
      value: ['Weak Leg'],
    },

    {
      label: 'Thu nhập lãnh đạo',
      value: ['Mega'],
    },

    {
      label: 'Thu nhập đều tầng',
      value: ['Level'],
    },

    {
      label: 'Thưởng lãnh đạo',
      value: ['Bonus'],
    },

    {
      label: 'Thưởng lãnh đạo cấp cao',
      value: ['Leadership Bonus'],
    },

    {
      label: 'Đặt hàng',
      value: ['Order'],
    },

    {
      label: 'Chuyển tiền',
      value: ['Transfer'],
    },

    {
      label: 'Tổng thu nhập',
      value: ['Total'],
    },
  ],
  en: [
    {
      label: 'Default',
      value: ARRAY_KEY_SELECT,
      hidden: true,
    },

    {
      label: 'Weak branch income',
      value: ['Weak Leg'],
    },

    {
      label: 'Leadership income',
      value: ['Mega'],
    },

    {
      label: 'The income is flat',
      value: ['Level'],
    },

    {
      label: 'Leadership Rewards',
      value: ['Bonus'],
    },

    {
      label: 'Senior leadership Rewards',
      value: ['Leadership Bonus'],
    },

    {
      label: 'Oder',
      value: ['Order'],
    },

    {
      label: 'Transfer',
      value: ['Transfer'],
    },

    {
      label: 'Total income',
      value: ['Total'],
    },
  ],
};

const TYPE_CALENDAR = {
  day: '0',
  week: '1',
  month: '2',
};

const dataChartConstructor = {
  legend: {
    enabled: false,
    textSize: 14,
    stroke: '#ffffff',
    formSize: 14,
    xEntrySpace: 15,
    yEntrySpace: 10,
    wordWrapEnabled: true,
    color: processColor('white'),
    textColor: processColor('white'),
  },
  data: {
    dataSets: [
      {
        values: [0, 0, 0, 0, 0, 0, 0],
        label: '',
        config: {
          drawValues: false,
          colors: [processColor('red')],
        },
      },
      {
        values: [0, 0, 0, 0, 0, 0, 0],
        label: '',
        config: {
          drawValues: false,
          colors: [processColor('white')],
        },
      },
    ],
    config: {
      textColor: processColor('white'),
      barWidth: 0.2,
      group: {
        fromX: 0, // Tính từ khoảng cách số 0
        groupSpace: 0.4, // Khoảng cách giữa các group bar
        barSpace: 0.1, // Khoảng cách giữa các cột trong một cốt y
      },
    },
    barSpacePercent: 40,
  },
  xAxis: {
    valueFormatter: vi
      ? ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN']
      : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    granularityEnabled: true,
    granularity: 0.5, // khoảng cách các mốc
    axisMaximum: 7, // Hiển thị tối đa số cột y
    axisMinimum: 0, // Hiển thị ít nhất số cột y
    centerAxisLabels: true,
    position: 'BOTTOM',
    textColor: processColor('white'),
    textSize: 14,
  },

  yAxis: {
    left: {
      textColor: processColor('white'),
      drawGridLines: true,
      gridLineWidth: 1,
      drawAxisLine: true,
      drawLabels: true,
      textSize: 14,
      gridColor: processColor('white'),
    },
    right: {
      enabled: false,
    },
  },

  marker: {
    // Hiển thị tolltip
    enabled: true,
    markerColor: processColor('#F0C0FF8C'),
    textColor: processColor('white'),
    markerFontSize: 14,
  },
};

class StackedBarChartScreen extends PureComponent {
  constructor() {
    super();

    this.state = {
      typeCalendar: 'day',
      arrayKey: ARRAY_KEY_SELECT,
      data: dataChartConstructor.data,
      xAxis: dataChartConstructor.xAxis,
      dataCharts: [],
    };
  }

  componentDidMount() {
    const {arrayKey, typeCalendar} = this.state;

    registerShoppingCardChange(this.getReportApiLocal);

    this.getReportApiLocal();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.typeCalendar !== this.state.typeCalendar) {
      this.getReportApiLocal();
    }
  }

  getReportApiLocal = () => {
    const {typeCalendar, arrayKey} = this.state;
    getReportApi(TYPE_CALENDAR[typeCalendar], (response) => {
      const {data} = response;
      this.convertData(data, arrayKey);
      this.setState({dataCharts: data});
    });
  };

  convertData = (data, arrayKey) => {
    const {Language} = global;
    const {typeCalendar} = this.state;
    let dataSets = [];
    let valueFormatter = [];

    for (let i = 0; i < arrayKey.length; i++) {
      const item = {
        values: [],
        label: _labels[Language][arrayKey[i]],
        config: {
          drawValues: false,
          colors: [colors[arrayKey[i]]],
        },
        color: colorsNote[arrayKey[i]],
      };
      for (let j = 0; j < data.length; j++) {
        item.values.push(parseInt(data[j][arrayKey[i]] || 0));
      }
      dataSets.push(item);
    }

    for (let a = 0; a < data.length; a++) {
      valueFormatter.push(
        typeCalendar === 'day'
          ? formatDay[Language][data[a][typeCalendar]]
          : data[a][typeCalendar],
      );
    }

    if (dataSets.length === 1) {
      dataSets.push({
        values: [0, 0, 0, 0, 0, 0, 0],
        label: '',
        config: {
          drawValues: false,
          colors: [processColor('transparent')],
        },
      });
    }

    this.setState((prevState) => {
      return {
        data: Object.assign({}, dataChartConstructor.data, {dataSets}),
        xAxis: Object.assign({}, prevState.xAxis, {valueFormatter}),
      };
    });
  };

  handleSelect(event) {
    let entry = event.nativeEvent;
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null});
    } else {
      this.setState({...this.state, selectedEntry: JSON.stringify(entry)});
    }
  }

  onChangeItem = (item) => {
    this.setState({
      typeCalendar: item.value,
    });
  };

  onChangeItemFilter = (item) => {
    this.setState(
      {
        arrayKey: item.value,
      },
      () => {
        this.convertData(this.state.dataCharts, item.value);
      },
    );
  };

  render() {
    const {Language} = global;
    const {data} = this.state;
    const {styleChart, intl} = this.props;
    const dataSets = data.dataSets || [];
    const {formatMessage} = intl;
    return (
      <View>
        <View style={styles.dropdownContainer}>
          <View style={{flex: 1, marginRight: 10}}>
            <Text
              text={formatMessage(message.viewBy)}
              style={{
                color: '#ffffff',
                fontSize: 15,
                // paddingTop: 10,
                paddingBottom: 5,
              }}
            />
            <DropDownPicker
              items={itemsSelectCalendar(Language)}
              defaultValue={this.state.typeCalendar}
              containerStyle={styles.containerStyle}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={this.onChangeItem}
            />
          </View>
          <View style={{flex: 2}}>
            <Text
              text={formatMessage(message.filterBy)}
              style={{
                color: '#ffffff',
                fontSize: 15,
                paddingBottom: 5,
              }}
            />
            <DropDownPicker
              items={filterReport[Language]}
              defaultValue={this.state.arrayKey}
              containerStyle={{height: 40}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={this.onChangeItemFilter}
            />
          </View>
        </View>

        <View style={[styles.container, styleChart]}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginHorizontal: 10,
              marginBottom: 10,
            }}>
            {dataSets.map((item) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 20,
                  }}>
                  <View
                    style={[styles.square, {backgroundColor: item.color}]}
                  />
                  <Text style={styles.overviewText}>{item.label}</Text>
                </View>
              );
            })}
          </View>
          <BarChart
            style={styles.chart}
            xAxis={this.state.xAxis}
            yAxis={dataChartConstructor.yAxis}
            data={data}
            legend={dataChartConstructor.legend}
            drawValueAboveBar={false}
            onSelect={this.handleSelect.bind(this)}
            onChange={(event) => console.log(event.nativeEvent)}
            // highlights={this.state.highlights}
            marker={dataChartConstructor.marker}
            pinchZoom={false}
            animation={{
              durationX: 1000,
              durationY: 1000,
            }}
            chartDescription={{text: ''}}
          />
        </View>
      </View>
    );
  }
}

StackedBarChartScreen.defaultProps = {
  styleChart: {},
};

export default injectIntl(StackedBarChartScreen);
