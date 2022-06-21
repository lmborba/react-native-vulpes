import React from 'react';
import { ActivityIndicator } from 'react-native';
import { getColors } from '../colors';
import useVulpes from '../hooks/useVulpes';

export const Spinner = ({ color, size, ...restProps }) => {
  const { theme } = useVulpes();
  const colors = getColors(theme);
  const colorVal = color ? colors(color) : colors('primary.80');
  return (
    <ActivityIndicator size={size || 'small'} color={colorVal} {...restProps} />
  );
};
