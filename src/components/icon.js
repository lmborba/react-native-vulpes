import React from 'react';
import { View } from 'react-native';
import Icomoon from 'react-native-icomoon';
import json from '../../assets/icons/selection.json';
import { Colors } from '../colors';

export const Icon = ({ name, color, size, ...restProps }) => {
  const colorVal = color ? Colors[color] : Colors.dark_gray;
  const sizeVal = size ? size : 20;
  return (
    <View {...restProps}>
      <Icomoon iconSet={json} name={name} color={colorVal} size={sizeVal} />
    </View>
  );
};
