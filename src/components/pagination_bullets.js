import React from 'react';
import { View } from 'react-native';
import { Colors } from '../colors';
import { FillSpace } from './utils';

function bulletStyle(color, selected) {
  const colorRGB = Colors[color] || color || Colors.dark_gray;
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
  return <View style={bulletStyle(color, selected)} />;
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
