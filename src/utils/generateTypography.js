import React from 'react';
import { Text } from '../components/text';
import { Fonts } from '../fonts';

function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}

export const generateTypography = function (definedStyle) {
  const fontStyle = Fonts[definedStyle];

  let component = ({ style, children, color, ...props }) => {
    return (
      <Text color={color} fontStyle={fontStyle} style={style} {...props}>
        {children}
      </Text>
    );
  };
  component.displayName = capitalize(definedStyle);
  return component;
};
