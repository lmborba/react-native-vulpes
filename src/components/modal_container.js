import React, { Component } from 'react';
import { Animated, Modal, TouchableOpacity } from 'react-native';

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

  render() {
    const { children, onClose, style, dismissStyle } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.visible}
        onRequestClose={onClose}
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
          <TouchableOpacity
            style={{ ...modalDismissStyle, ...dismissStyle }}
            onPress={onClose}
            activeOpacity={1}
          />
          {children}
        </Animated.View>
      </Modal>
    );
  }
}
