import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Colors } from '../colors';

export const Spinner = ({ color, size, ...restProps }) => {
  const colorVal = color ? Colors[color] : Colors.cyan;
  return (
    <ActivityIndicator size={size || 'small'} color={colorVal} {...restProps} />
  );
};
