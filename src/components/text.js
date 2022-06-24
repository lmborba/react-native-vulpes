import React from 'react';
import { Text as NativeText } from 'react-native';
import { getColors } from '../colors';
import useVulpes from '../hooks/useVulpes';

const Text = ({
  style,
  title,
  fontStyle,
  color,
  center,
  strike,
  underline,
  ...props
}) => {
  const { theme } = useVulpes();
  const colors = getColors(theme);
  const colorStyle = {
    color: colors(color) || color || colors('gray.100'),
  };
  const titleStyle = title ? { marginBottom: 32 } : {};
  const textStyle = {
    ...fontStyle,
    ...colorStyle,
    ...titleStyle,
    ...style,
    ...(center ? { textAlign: 'center' } : {}),
    ...(strike ? { textDecorationLine: 'line-through' } : {}),
    ...(underline ? { textDecorationLine: 'underline' } : {}),
  };

  if (props.testin) {
    console.log(textStyle);
  }
  return <NativeText style={textStyle} {...props} />;
};

export { Text };
