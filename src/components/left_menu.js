import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Colors } from '../colors';
import { Fonts } from '../fonts';
import { Text } from './text';

const generalMenuStyle = {
  flexDirection: 'column',
  borderRightWidth: 1,
  backgroundColor: Colors.white,
  borderRightColor: Colors.light_gray,
  height: '100%',
};

export const LeftMenu = (props) => {
  return (
    <View style={[generalMenuStyle, props.style]}>
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
  return (
    <TouchableOpacity style={[generalMenuItemStyle, style]} onPress={onPress}>
      {React.Children.map(children, (child, i) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            color: selected ? 'black' : 'dark_gray',
            fontStyle: selected ? Fonts.leftMenuTextBold : Fonts.leftMenuText,
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
