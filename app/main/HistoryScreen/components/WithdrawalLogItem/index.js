import React from 'react';
import {TouchableOpacity, View} from 'react-native';

// Components
import Text, {SemiBoldText} from '../../../../base/components/Text';
import HoursNotify from '../../../../base/components/HoursNotify';

// Utils
import {convertDate} from '../../../../utils/convertDate';

// Styles
import styles from './styles/index.css';
import message from '../../../../msg/history';
import {injectIntl} from 'react-intl';

function WithdrawalLogItem(props) {
  const {item, onReport, intl} = props;
  const {formatMessage} = intl;
  return (
    <View style={styles.imageRow}>
      <Text text={convertDate(item.time)} style={styles.date} />
      <HoursNotify time={item.time} />
      <View style={styles.body}>
        <Text style={styles.brief}>
          {formatMessage(message.code)}
          <SemiBoldText text={` ${item.code}`} />
        </Text>
        <Text style={styles.brief}>
          {formatMessage(message.value)}
          <SemiBoldText text={` ${item.value}`} />
        </Text>
        {item.status === '0' && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 8,
            }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => onReport(item.id)}>
              <Text text={formatMessage(message.btnThuHoi)} style={styles.textBtn} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

export default injectIntl(WithdrawalLogItem);
