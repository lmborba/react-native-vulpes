import React from 'react';
import { BarChart as GBarChart } from 'react-native-gifted-charts';
import { iconList } from 'react-native-icomoon';
import json from '../../assets/icons/selection.json';
import { Colors } from '../colors';

export const BarChart = ({ color, data }) => {
  const colorVal = color ? Colors[color] : Colors.dark_gray;
  return (
    <GBarChart
      data={data.map((item) => ({
        ...item,
        frontColor: colorVal,
      }))}
    />
  );
};

export const listOfIcons = () => {
  return iconList(json);
};
