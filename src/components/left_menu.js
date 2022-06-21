import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { getColors } from '../colors';
import { getFonts } from '../fonts';
import useVulpes from '../hooks/useVulpes';
import { Text } from './text';

const generalMenuStyle = (theme) => {
  const colors = getColors(theme);
  return {
    flexDirection: 'column',
    borderRightWidth: 1,
    backgroundColor: colors('singleton.white'),
    borderRightColor: colors('gray.40'),
    height: '100%',
  };
};

export const LeftMenu = (props) => {
  const { theme } = useVulpes();
  return (
    <View style={[generalMenuStyle(theme), props.style]}>
      {React.Children.map(props.children, (child, i) => {
        return React.cloneElement(child, {
          justIcons: props.justIcons,
        });
      })}
    </View>
  );
};

const generalMenuItemStyle = {
  padding: 15,
  paddingLeft: 10,
  paddingRight: 10,
  flexDirection: 'row',
};

const adaptToType = (type, justIcons) => {
  if (justIcons) {
    if (type === Text) {
      return {
        width: 0,
        height: 0,
        overflow: 'hidden',
      };
    } else {
      return {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
      };
    }
  } else {
    return {};
  }
};

export const LeftMenuItem = ({
  children,
  selected,
  onPress,
  justIcons,
  style,
}) => {
  const { theme } = useVulpes();
  const fonts = getFonts(theme);
  return (
    <TouchableOpacity style={[generalMenuItemStyle, style]} onPress={onPress}>
      {React.Children.map(children, (child, i) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            color: selected ? 'singleton.black' : 'gray.100',
            fontStyle: selected ? fonts.leftMenuTextBold : fonts.leftMenuText,
            size: 18,
            style: {
              alignSelf: 'center',
              ...child.props.style,
              marginRight: 10,
              ...adaptToType(child.type, justIcons),
            },
          });
        }
        return child;
      })}
    </TouchableOpacity>
  );
};
