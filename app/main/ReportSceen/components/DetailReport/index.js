/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 12/09/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {useState, useEffect} from 'react';
import {getReportApi} from '../../../../apis/health';
import {FlatList, View} from 'react-native';
import styles from '../../styles/index.css';
import PieChart from '../../../ChartScreen/PieChart';

function DetailReport() {
  const [dataCharts, setDataCharts] = useState([]);

  useEffect(() => {
    getReportApi(2, (response) => {
      const {data} = response;
      setDataCharts(data);
    });
  }, []);

  return (
    <FlatList
      data={dataCharts}
      renderItem={({item}) => (
        <View style={styles.info}>
          <PieChart dataChart={item} />
        </View>
      )}
      keyExtractor={(item) => item.identity}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default DetailReport;
