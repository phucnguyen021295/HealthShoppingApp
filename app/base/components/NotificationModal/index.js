import React from 'react';
import {View} from 'react-native';
import * as PropTypes from 'prop-types';
import {Button} from 'react-native-elements';

// Components
import ModalBase from '../ModalBase';

// Styles
import styles from './styles/index.css';

function NotificationModal(props) {
  const {isVisible, title, description, titleButton, onPress} = props;
  return (
    <ModalBase
      isVisibleModal={isVisible}
      title={title}
      description={description}
      styleTitle={styles.titleModalStyle}
      styleDescription={styles.descriptionModalStyle}
    >
      <View style={{flexDirection: 'row'}}>
        <Button
          title={titleButton}
          containerStyle={styles.containerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          onPress={onPress}
        />
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
