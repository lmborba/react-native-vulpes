import React from 'react';
import { Text as NativeText } from 'react-native';
import { Colors } from '../colors';

const Text = ({ style, title, fontStyle, color, ...props }) => {
  const colorStyle = { color: Colors[color] || color };
  const titleStyle = title ? { marginBottom: 32 } : {};
  const textStyle = {
    ...fontStyle,
    ...colorStyle,
    ...titleStyle,
    ...style,
  };

  return <NativeText style={textStyle} {...props} />;
};

export { Text };
