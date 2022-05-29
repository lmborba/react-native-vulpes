import React from 'react';
import { Text } from '../components/text';
import { getFonts } from '../fonts';
import useVulpes from '../hooks/useVulpes';

function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}

export const generateTypography = function (definedStyle) {
  let Component = ({ style, children, color, ...props }) => {
    const { theme } = useVulpes();
    const fonts = getFonts(theme);
    const fontStyle = fonts[definedStyle];
    return (
      <Text color={color} fontStyle={fontStyle} style={style} {...props}>
        {children}
      </Text>
    );
  };
  Component.displayName = capitalize(definedStyle);
  return Component;
};
