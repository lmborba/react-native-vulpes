import React from 'react';
import { Image } from 'react-native';
import { Colors } from '../colors';

const smallSize = 48;
const mediumSize = 64;
const largeSize = 80;

const convertToStyle = (size) => {
  return {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: 1,
    borderColor: Colors.light_gray,
    backgroundColor: Colors.white,
  };
};

const sizesStyle = {
  small: convertToStyle(smallSize),
  medium: convertToStyle(mediumSize),
  large: convertToStyle(largeSize),
};

const transparentStyle = (status) => {
  if (status) return {};
  return {
    borderWidth: 0,
    backgroundColor: 'transparent',
  };
};

export const Thumbnail = ({ source, size, style, ...restProps }) => {
  return (
    <Image
      source={source}
      style={{
        ...sizesStyle[size],
        ...transparentStyle(source),
        ...style,
      }}
    />
  );
};
