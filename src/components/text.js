import React from 'react';
import { Text as NativeText } from 'react-native';
import { Colors } from '../colors';

const Text = ({ style, fontStyle, color, ...props }) => {
  const colorStyle = { color: Colors[color] };
  const textStyle = {
    ...fontStyle,
    ...colorStyle,
    ...style,
  };

  return <NativeText style={textStyle} {...props} />;
};

export { Text };
