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
    isVisible,
    title,
    description,
    children,
    onCloseModal,
    styleTitle,
    styleDescription,
    contentStyle,
    ...otherProps
  } = props;
  return (
    <Modal
      isVisible={isVisible}
      style={styles.container}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      backdropOpacity={0.8}
      animationInTiming={400}
      animationOutTiming={400}
      backdropTransitionInTiming={0}
      backdropTransitionOutTiming={0}
      onBackButtonPress={onCloseModal}
      onBackdropPress={onCloseModal}
      {...otherProps}>
      <View style={[styles.content, contentStyle]}>
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
  isVisible: PropTypes.bool,
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
  contentStyle: {}
};

export default ModalBase;
