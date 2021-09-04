import React from 'react';
import * as PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import {View} from 'react-native';

// Components
import Text, {SemiBoldText} from '../Text';

// Styles
import styles from './styles/index.css';

function ModalBase(props) {
  const {
    isVisibleModal,
    title,
    description,
    children,
    onCloseModal,
    styleTitle,
    styleDescription,
    ...otherProps
  } = props;
  return (
    <Modal
      isVisible={isVisibleModal}
      style={styles.container}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      backdropOpacity={0.8}
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={0}
      backdropTransitionOutTiming={0}
      onBackButtonPress={onCloseModal}
      onBackdropPress={onCloseModal}
      {...otherProps}>
      <View style={styles.content}>
        <View style={styles.body}>
          {title && <SemiBoldText text={title} style={[styles.title, styleTitle]} />}
          {description ? (
            <Text
              text={description}
              style={[styles.description, styleDescription]}
            />
          ) : null}
        </View>
        {children && children}
      </View>
    </Modal>
  );
}

ModalBase.propTypes = {
  isVisibleModal: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.any,
  onCloseModal: PropTypes.func,
  styleTitle: PropTypes.object,
  styleDescription: PropTypes.object,
};

ModalBase.defaultProps = {
  onCloseModal: () => {},
  styleTitle: {},
  styleDescription: {},
};

export default ModalBase;
