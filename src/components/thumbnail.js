import React from 'react';
import { Image, View } from 'react-native';
import { Colors } from '../colors';
import { Icon } from './icon';

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
    padding: size / 2 - 11,
  };
};

const sizesStyle = {
  small: convertToStyle(smallSize),
  medium: convertToStyle(mediumSize),
  large: convertToStyle(largeSize),
};

const transparentFullStyle = {
  backgroundColor: 'transparent',
};
const transparentStyle = (status) => {
  if (status) return {};
  return {
    ...transparentFullStyle,
    borderWidth: 0,
  };
};

export const Thumbnail = ({ source, size, style, empty, ...restProps }) => {
  if (empty) {
    return (
      <View style={styleForEmptyThumbnail(size)}>
        <Icon name={'plus'} />
      </View>
    );
  }
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
function styleForEmptyThumbnail(size) {
  return {
    ...sizesStyle[size],
    ...transparentFullStyle,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#383838',
  };
}
