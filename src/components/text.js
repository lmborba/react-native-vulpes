import React from 'react';
import { Text as NativeText } from 'react-native';
import { Colors } from '../colors';

const Text = ({ style, title, fontStyle, color, center, strike, ...props }) => {
  const colorStyle = { color: Colors[color] || color || Colors.dark_gray };
  const titleStyle = title ? { marginBottom: 32 } : {};
  const textStyle = {
    ...fontStyle,
    ...colorStyle,
    ...titleStyle,
    ...style,
    ...(center ? { textAlign: 'center' } : {}),
    ...(strike ? { textDecorationLine: 'line-through' } : {}),
  };

  return <NativeText style={textStyle} {...props} />;
};

export { Text };
