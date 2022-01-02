import React from 'react';
import {View} from 'react-native';
import * as PropTypes from 'prop-types';

// Components
import ModalBase from '../ModalBase';
import {ButtonConfirm} from '../ButtonText/ButtonModal';

// Styles
import styles from './styles/index.css';

function NotificationModal(props) {
  const {isVisible, title, description, titleButton, onPress} = props;
  return (
    <ModalBase
      isVisible={isVisible}
      title={title}
      description={description}
      styleTitle={styles.titleModalStyle}
      styleDescription={styles.descriptionModalStyle}>
      <View
        style={{
          flexDirection: 'row',
          borderTopColor: '#dddddd',
          borderTopWidth: 1,
        }}>
        <ButtonConfirm text={titleButton} onPress={onPress} />
      </View>
    </ModalBase>
  );
}

NotificationModal.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  titleButton: PropTypes.string,
  onPress: PropTypes.func,
};

export default NotificationModal;
