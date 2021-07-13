import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Colors } from '../colors';
import { Fonts } from '../fonts';

const generalMenuStyle = {
  flexDirection: 'row',
  borderTopWidth: 1,
  backgroundColor: Colors.white,
  borderTopColor: Colors.light_gray,
};
export const Menu = (props) => {
  return <View style={generalMenuStyle}>{props.children}</View>;
};

const generalMenuItemStyle = {
  flex: 1,
  padding: 15,
  paddingLeft: 10,
  paddingRight: 10,
  borderWidth: 1,
};

export const MenuItem = ({ children, selected, onPress }) => {
  return (
    <TouchableOpacity style={generalMenuItemStyle} onPress={onPress}>
      {React.Children.map(children, (child, i) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            color: selected ? 'black' : 'gray',
            fontStyle: selected ? Fonts.menuTextBold : Fonts.menuText,
            size: 18,
            style: {
              alignSelf: 'center',
              ...child.props.style,
            },
          });
        }
        return child;
      })}
    </TouchableOpacity>
  );
};
