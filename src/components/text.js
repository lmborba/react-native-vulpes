import React from 'react';
import { Text as NativeText } from 'react-native';
import { getColors } from '../colors';
import useVulpes from '../hooks/useVulpes';

const defaultProps = {
  allowFontScaling: false,
};

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
    color: color ? colors(color) : colors('text.regular'),
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
  return <NativeText {...defaultProps} style={textStyle} {...props} />;
};

export { Text };
