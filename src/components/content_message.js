import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { getColors } from '../colors';
import VulpesContext from '../contexts/VulpesContext';
import { Regular, RegularBold } from '../index';
import { Icon } from './icon';

const typeMode = (type, theme) => {
  const colors = getColors(theme);
  switch (type) {
    case 'default':
      return {
        backgroundColor: colors.gray,
      };
    case 'success':
      return {
        backgroundColor: colors.success,
      };
    case 'error':
      return {
        backgroundColor: colors.error,
      };
    case 'warning':
      return {
        backgroundColor: colors.alert,
      };
    case 'alert':
      return {
        backgroundColor: colors.alert,
      };
    default:
      return {};
  }
};

export class ContentMessage extends React.Component {
  getType() {
    const { theme } = this.context;
    try {
      const { type } = this.props.data;
      return typeMode(type, theme);
    } catch (error) {
      return getColors(theme).gray;
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
    const { theme } = this.context;
    const colors = getColors(theme);
    const opacity = action ? 0.2 : 1;
    const viewStyle = { flex: 1 };
    return (
      <TouchableOpacity
        style={this.viewStyle()}
        onPress={() => action && action()}
        activeOpacity={opacity}
        underlayColor={colors.gray}
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

ContentMessage.contextType = VulpesContext;
