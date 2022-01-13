import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Colors } from '../colors';
import { Regular, RegularBold } from '../index';
import { Icon } from './icon';
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

export class ContentMessage extends React.Component {
  getType() {
    try {
      const { type } = this.props.data;
      return typeMode[type] || {};
    } catch (error) {
      return typeMode.default;
    }
  }

  viewStyle = () => {
    return {
      ...this.getType(),
      minHeight: 64,
      flex: 1,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
    };
  };

  actionIndica;

  render() {
    const { data } = this.props;
    if (!data) return null;
    const { title, text, action } = data;

    const opacity = action ? 0.2 : 1;
    const viewStyle = { flex: 1 };
    return (
      <TouchableOpacity
        style={this.viewStyle()}
        onPress={() => action && action()}
        activeOpacity={opacity}
        underlayColor={Colors.gray}
      >
        <View style={viewStyle}>
          {title && <RegularBold>{title}</RegularBold>}
          {text && <Regular>{text}</Regular>}
        </View>
        {action && <Icon name="chevron_right" size={16} />}
      </TouchableOpacity>
    );
  }
}
