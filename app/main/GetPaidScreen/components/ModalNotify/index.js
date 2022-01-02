import React, {useState, useEffect} from 'react';
import {InteractionManager, View, ActivityIndicator} from 'react-native';
import * as PropTypes from 'prop-types';
import {Button} from 'react-native-elements';

// Components
import ModalBase from '../../../../base/components/ModalBase';
import {
  ButtonConfirm,
  ButtonClose,
} from '../../../../base/components/ButtonText/ButtonModal';

// Apis
import {postRCIApi} from '../../../../apis/health';

// Styles
import styles from './styles/index.css';

function ModalNotify(props) {
  const {onCancel} = props;
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
            InteractionManager.runAfterInteractions(() => {
              setVisibleSuccess(true);
            });
          },
          () => {
            setVisibleLoading(false);
            InteractionManager.runAfterInteractions(() => {
              setVisibleFailure(true);
            });
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
      <ModalBase
        isVisible={isVisibleLoading}
        contentStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}>
        <ActivityIndicator size="large" color="#ffffff" />
      </ModalBase>
      <ModalBase
        isVisible={isVisible}
        title={'Kích hoạt'}
        description={
          'Bạn đang yêu cầu gửi RCl ngay bây giờ, Bạn có chắc chắn gửi?'
        }
        styleDescription={styles.descriptionModalStyle}>
        <View style={styles.btnStyles}>
          <ButtonClose text={'Hủy bỏ'} onPress={onCancelRCl} />
          <View style={styles.border} />
          <ButtonConfirm text={'Kích hoạt'} onPress={onActive} />
        </View>
      </ModalBase>
      <ModalBase
        isVisible={isVisibleSuccess}
        title={'Kích hoạt thành công'}
        description={'Gửi yêu cầu kích hoạt RCl thành công'}
        styleDescription={styles.descriptionModalStyle}>
        <View style={styles.btnStyles}>
          <ButtonConfirm text={'Đóng'} onPress={onCancelRCl} />
        </View>
      </ModalBase>
      <ModalBase
        isVisible={isVisibleFailure}
        title={'Kích hoạt thất bại'}
        description={'Đã có lỗi xảy ra. Vui lòng thử lại.'}
        styleDescription={styles.descriptionModalStyle}>
        <View style={styles.btnStyles}>
          <ButtonClose text={'Đóng'} onPress={onCancelRCl} />
          <View style={styles.border} />
          <ButtonConfirm text={'Thử lại'} onPress={onActive} />
        </View>
      </ModalBase>
    </>
  );
}

ModalNotify.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  titleButton: PropTypes.string,
  onPress: PropTypes.func,
};

export default ModalNotify;
