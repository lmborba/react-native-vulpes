import React from 'react';
import { Image, View } from 'react-native';
import { getColors } from '../colors';
import { Icon } from './icon';
import useVulpes from '../hooks/useVulpes';

const smallSize = 48;
const mediumSize = 64;
const largeSize = 80;

const convertToStyle = (theme, size) => {
  const colors = getColors(theme);
  return {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: 1,
    borderColor: colors.light_gray,
    backgroundColor: colors.white,
    padding: size / 2 - 11,
  };
};

const sizesStyle = (theme, size) => {
  switch (size) {
    case 'small':
      return convertToStyle(theme, smallSize);
    case 'medium':
      return convertToStyle(theme, mediumSize);
    case 'large':
      return convertToStyle(theme, largeSize);
  }
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

function defineStyleFromParams(theme, size, source, style, square) {
  const completeStyle = {
    ...sizesStyle(theme, size),
    ...transparentStyle(source),
    ...style,
  };
  if (square) {
    completeStyle.borderRadius = 10;
    completeStyle.width += 2;
    completeStyle.height += 2;
    completeStyle.borderWidth = 0;
  }
  return completeStyle;
}

export const Thumbnail = ({
  square,
  source,
  size,
  style,
  empty,
  ...restProps
}) => {
  const { theme } = useVulpes();
  if (empty) {
    return (
      <View style={styleForEmptyThumbnail(theme, size)}>
        <Icon name={'plus'} />
      </View>
    );
  }
  const completeStyle = defineStyleFromParams(
    theme,
    size,
    source,
    style,
    square
  );
  return <Image source={source} style={completeStyle} />;
};

function styleForEmptyThumbnail(theme, size) {
  return {
    ...sizesStyle(theme, size),
    ...transparentFullStyle,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#383838',
  };
}
