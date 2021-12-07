import React from 'react';
import { Animated, Dimensions, TouchableOpacity } from 'react-native';
import { Colors } from '../colors';
import { Regular, RegularBold } from '../index';

const typeMode = {
  default: {
    backgroundColor: Colors.gray,
  },
  success: {
    backgroundColor: Colors.success,
  },
  error: {
    backgroundColor: Colors.error,
  },
  warning: {
    backgroundColor: Colors.alert,
  },
  alert: {
    backgroundColor: Colors.alert,
  },
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
      return typeMode[this.config.type] || {};
    } catch (error) {
      return {};
    }
  }

  viewStyle = () => {
    const { fadeAnim, posAnim } = this.state;
    const { position } = this.config;
    const window = Dimensions.get('window');

    return {
      opacity: fadeAnim,
      position: 'absolute',
      backgroundColor: Colors.light_gray,
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
          {title && <RegularBold color={'white'}>{title}</RegularBold>}
          {text && <Regular color={'white'}>{text}</Regular>}
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

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
