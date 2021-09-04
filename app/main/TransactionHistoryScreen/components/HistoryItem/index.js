import React from 'react';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';

// Component
import Text, {SemiBoldText} from '../../../../base/components/Text';

// Utils
import {convertDate, convertHours} from '../../../../utils/convertDate';

// Styles
import styles from './styles/index.css';

import message from '../../../../msg/history';
import HoursNotify from '../../../../base/components/HoursNotify';

function HistoryItem(props) {
  const {item, intl} = props;
  const {formatMessage} = intl;

  return (
    <View style={styles.container}>
      <Text text={convertDate(item.time)} style={styles.textTotalPrice} />

      <HoursNotify time={item.time} />
      <View style={styles.body}>
        <View style={styles.bodyView}>
          <Text style={styles.brief}>
            {formatMessage(message.date)}
            <SemiBoldText
              text={`${convertHours(item.time)} ${convertDate(item.time)}`}
            />
          </Text>
          <Text style={styles.brief}>
            {formatMessage(message.type)}
            <SemiBoldText text={item.brief} />
          </Text>
          <Text style={styles.brief}>
            {formatMessage(message.total)}
            <SemiBoldText text={`-${item.value}$`} style={{color: 'red'}} />
          </Text>
          <Text
            text={`${formatMessage(message.transfer)} ${item.des}`}
            style={styles.brief}
          />
          <Text
            text={`${formatMessage(message.balance)} ${item.accountlog} $`}
            style={styles.textAccountBalance}
          />
        </View>
      </View>
    </View>
  );
}

HistoryItem.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(HistoryItem);
