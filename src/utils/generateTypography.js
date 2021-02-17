import React from 'react';
import { Text } from '../components/text';
import { Fonts } from '../fonts';

export const generateTypography = function (definedStyle) {
  const fontStyle = Fonts[definedStyle];

  return ({ style, children, color, ...props }) => {
    return (
      <Text color={color} fontStyle={fontStyle} style={style} {...props}>
        {children}
      </Text>
    );
  };
};
