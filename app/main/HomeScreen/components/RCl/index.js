import React, {useState, useEffect} from 'react';
import {InteractionManager, View} from 'react-native';
import * as PropTypes from 'prop-types';

// Components
import ModalBase from '../../../../base/components/ModalBase';
import {
  ButtonConfirm,
  ButtonClose,
} from '../../../../base/components/ButtonText/ButtonModal';
import ActivityIndicatorBase from '../../../../base/components/ActivityIndicatorBase';

// Apis
import {postRCIApi} from '../../../../apis/health';

// Styles
import styles from './styles/index.css';
import {injectIntl} from 'react-intl';
import message from '../../../../msg/home';

function RCl(props) {
  const {onCancel, intl} = props;
  const {formatMessage} = intl;
  const [isVisible, setVisible] = useState(props.isVisible);
  const [isVisibleLoading, setVisibleLoading] = useState(false);
  const [isVisibleSuccess, setVisibleSuccess] = useState(false);
  const [isVisibleFailure, setVisibleFailure] = useState(false);

  const onActive = () => {
    setVisible(false);
    setVisibleFailure(false);
    InteractionManager.runAfterInteractions(() => {
      setVisibleLoading(true);
    });
  };

  useEffect(() => {
    if (isVisibleLoading) {
      InteractionManager.runAfterInteractions(() => {
        postRCIApi(
          () => {
            setVisibleLoading(false);
            setVisibleSuccess(true);
          },
          () => {
            setVisibleLoading(false);
            setVisibleFailure(true);
          },
        );
      });
    }
  }, [isVisibleLoading]);

  const onCancelRCl = () => {
    setVisible(false);
    setVisibleFailure(false);
    InteractionManager.runAfterInteractions(() => {
      onCancel();
    });
  };

  return (
    <>
      {isVisibleLoading && <ActivityIndicatorBase />}

      <ModalBase
        isVisible={isVisible}
        title={formatMessage(message.active)}
        description={
            formatMessage(message.description1)
        }
        styleDescription={styles.descriptionModalStyle}>
        <View style={styles.btnStyles}>
          <ButtonClose text={formatMessage(message.btnCancel)} onPress={onCancelRCl} />
          <View style={styles.border} />
          <ButtonConfirm text={formatMessage(message.active)} onPress={onActive} />
        </View>
      </ModalBase>
      <ModalBase
        isVisible={isVisibleSuccess}
        title={formatMessage(message.activeSuccess)}
        description={formatMessage(message.description2)}
        styleDescription={styles.descriptionModalStyle}>
        <View style={styles.btnStyles}>
          <ButtonConfirm text={formatMessage(message.btnClose)} onPress={onCancelRCl} />
        </View>
      </ModalBase>
      <ModalBase
        isVisible={isVisibleFailure}
        title={formatMessage(message.activeFailure)}
        description={formatMessage(message.description3)}
        styleDescription={styles.descriptionModalStyle}>
        <View style={styles.btnStyles}>
          <ButtonClose text={formatMessage(message.btnClose)} onPress={onCancelRCl} />
          <View style={styles.border} />
          <ButtonConfirm text={formatMessage(message.btnRetry)} onPress={onActive} />
        </View>
      </ModalBase>
    </>
  );
}

RCl.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  titleButton: PropTypes.string,
  onPress: PropTypes.func,
};

export default injectIntl(RCl);
