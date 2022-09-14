import React from 'react';
import { View } from 'react-native';
import { getColors } from '../colors';
import useVulpes from '../hooks/useVulpes';
import { FillSpace } from './utils';

function bulletStyle({ theme, color, selected }) {
  const colors = getColors(theme);
  const colorRGB = color ? colors(color) : colors('gray.100');
  return {
    width: 8,
    height: 8,
    borderWidth: 1,
    borderColor: colorRGB,
    backgroundColor: selected ? colorRGB : 'transparent',
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
  };
}

const Bullet = ({ color, selected }) => {
  const { theme } = useVulpes();
  return <View style={bulletStyle({ theme, color, selected })} />;
};

const paginationBulletsContainer = { flexDirection: 'row' };
const PaginationBullets = ({ total, current, color, style, ...props }) => {
  return (
    <View style={{ ...style, ...paginationBulletsContainer }}>
      <FillSpace />
      {Array(total)
        .fill(0)
        .map((_, i) => {
          return (
            <Bullet
              key={'bullet_' + i}
              color={color}
              selected={i === current - 1}
            />
          );
        })}
      <FillSpace />
    </View>
  );
};

export { PaginationBullets };
