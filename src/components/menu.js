import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Colors } from '../colors';
import { Fonts } from '../fonts';

export const Menu = (props) => {
  return (
    <View
      style={{
        flexDirection: 'Row',
        borderTopWidth: 1,
        backgroundColor: Colors.white,
        borderTopColor: Colors.light_gray,
        paddingBottom: 9,
      }}
    >
      {props.children}
    </View>
  );
};

export const MenuItem = ({ children, selected, onPress }) => {
  return (
    <TouchableOpacity style={{ flex: 1, padding: 15 }} onPress={onPress}>
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
