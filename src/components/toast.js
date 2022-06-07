import React from 'react';
import { Animated, Dimensions, TouchableOpacity } from 'react-native';
import { getColors } from '../colors';
import VulpesContext from '../contexts/VulpesContext';
import { Regular, RegularBold } from '../index';

const typeMode = (type, theme) => {
  const colors = getColors(theme);
  switch (type) {
    case 'default':
      return {
        backgroundColor: colors('gray.80'),
      };
    case 'success':
      return {
        backgroundColor: colors('success.100'),
      };
    case 'error':
      return {
        backgroundColor: colors('error.100'),
      };
    case 'warning':
      return {
        backgroundColor: colors('alert.100'),
      };
    case 'alert':
      return {
        backgroundColor: colors('alert.100'),
      };
    default:
      return {};
  }
};

const defaultConfig = {
  duration: 3000,
  onPress: () => null,
  type: 'default',
  title: null,
  text: null,
  position: 62,
};

class ToastRoot extends React.Component {
  constructor(props) {
    super(props);
    this.props.reference.current = this;

    this.state = {
      visible: false,
      fadeAnim: new Animated.Value(0),
      posAnim: new Animated.Value(0),
    };

    const { reference, ...rest } = props;

    this.initialConfig = {
      ...defaultConfig,
      ...rest,
    };
    this.config = {
      ...this.initialConfig,
    };
  }

  fadeIn = () => {
    Animated.parallel([
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.posAnim, {
        toValue: -64,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      this.fadeOut();
    });
  };

  fadeOut = () => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(this.state.fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.posAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        this.setState({ visible: false });
      });
    }, this.config.duration);
  };

  show({ ...config }) {
    this.config = {
      ...this.initialConfig,
      ...config,
      duration: config.duration || this.initialConfig.duration,
    };

    this.setState({ visible: true }, () => this.fadeIn());
  }

  hide() {
    if (this.state.visible) {
      this.config.duration = 1;
      this.fadeOut();
    }
  }

  getType() {
    try {
      const { theme } = this.context;
      return typeMode(this.config.type, theme);
    } catch (error) {
      return {};
    }
  }

  viewStyle = () => {
    const { fadeAnim, posAnim } = this.state;
    const { position } = this.config;
    const { theme } = this.context;
    const colors = getColors(theme);
    const window = Dimensions.get('window');

    return {
      opacity: fadeAnim,
      position: 'absolute',
      backgroundColor: colors('gray.40'),
      minHeight: 64,
      borderRadius: 8,
      left: 16,
      right: 16,
      top: window.height - position,
      transform: [{ translateY: posAnim }],
      zIndex: 1000,
      ...this.getType(),
    };
  };

  touchStyle = () => {
    return {
      flex: 1,
      borderRadius: 8,
      padding: 10,
      justifyContent: 'center',
    };
  };

  render() {
    const { visible } = this.state;
    const { title, text } = this.config;
    if (!visible) return null;

    return (
      <Animated.View style={this.viewStyle()}>
        <TouchableOpacity
          style={this.touchStyle()}
          onPress={() => this.config.onPress()}
        >
          {title && (
            <RegularBold color={'singleton.white'}>{title}</RegularBold>
          )}
          {text && <Regular color={'singleton.white'}>{text}</Regular>}
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

ToastRoot.contextType = VulpesContext;

const toastRef = React.createRef();

export function Toast(props) {
  return <ToastRoot reference={toastRef} {...props} />;
}

Toast.show = (params) => {
  toastRef.current?.show(params);
};

Toast.hide = (params) => {
  toastRef.current?.hide(params);
};
