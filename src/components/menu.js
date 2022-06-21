import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { getColors } from '../colors';
import { getFonts } from '../fonts';
import useVulpes from '../hooks/useVulpes';

const generalMenuStyle = (theme) => {
  const colors = getColors(theme);
  return {
    flexDirection: 'row',
    borderTopWidth: 1,
    backgroundColor: colors('singleton.white'),
    borderTopColor: colors('gray.40'),
  };
};
export const Menu = (props) => {
  const { theme } = useVulpes();
  return <View style={generalMenuStyle(theme)}>{props.children}</View>;
};

const generalMenuItemStyle = {
  flex: 1,
  padding: 15,
  paddingLeft: 10,
  paddingRight: 10,
};

export const MenuItem = ({ children, selected, onPress }) => {
  const { theme } = useVulpes();
  const fonts = getFonts(theme);
  return (
    <TouchableOpacity style={generalMenuItemStyle} onPress={onPress}>
      {React.Children.map(children, (child, i) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            color: selected ? 'singleton.black' : 'gray.60',
            fontStyle: selected ? fonts.menuTextBold : fonts.menuText,
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
