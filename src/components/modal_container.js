import React, { Component } from 'react';
import { Animated, Modal, TouchableOpacity, BackHandler } from 'react-native';

const containerStyle = {
  flex: 1,
  backgroundColor: 'rgba(52, 52, 52, 0.7)',
};
const modalDismissStyle = { flex: 1 };
const defaultTransparency = 0.7;

export class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.visible = props.visible || false;
    const tValue = this.visible ? defaultTransparency : 0;
    this.state = {
      transparency: new Animated.Value(tValue),
    };
    this.fIn = this.fadeIn();
    this.fOut = this.fadeOut();
    this.backHandler = null;
  }
  componentWillUnmount() {
    this.backHandler && this.backHandler.remove();
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.onModalClose.bind(this)
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.visible === true && prevProps.visible === false) {
      this.visible = true;
      this.forceUpdate();
      this.fIn.start();
      return;
    }
    if (this.props.visible === false && prevProps.visible === true) {
      this.fOut.start(() => {
        this.visible = false;
        this.forceUpdate();
      });
      return;
    }
  }

  fadeIn() {
    return Animated.timing(this.state.transparency, {
      toValue: defaultTransparency,
      duration: 200,
      delay: 300,
      useNativeDriver: false,
    });
  }

  fadeOut() {
    return Animated.timing(this.state.transparency, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    });
  }

  renderDismiss() {
    const { onClose, noClose, dismissStyle } = this.props;
    const onPress = noClose ? undefined : onClose;
    return (
      <TouchableOpacity
        style={{ ...modalDismissStyle, ...dismissStyle }}
        onPress={onPress}
        activeOpacity={1}
      />
    );
  }

  onModalClose() {
    const { onClose, noClose } = this.props;
    if (noClose) return BackHandler.exitApp();
    if (onClose) onClose();
  }

  render() {
    const { children, style } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.visible}
        onRequestClose={this.onModalClose.bind(this)}
      >
        <Animated.View
          style={[
            containerStyle,
            style,
            {
              backgroundColor: this.state.transparency.interpolate({
                inputRange: [0, 1],
                outputRange: ['#34343400', '#343434ff'],
              }),
            },
          ]}
        >
          {this.renderDismiss()}
          {children}
        </Animated.View>
      </Modal>
    );
  }
}
