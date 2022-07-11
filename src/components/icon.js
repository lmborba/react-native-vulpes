import React from 'react';
import { View } from 'react-native';
import Icomoon, { iconList } from 'react-native-icomoon';
import { getColors } from '../colors';
import useVulpes from '../hooks/useVulpes';
import gogoodIcons from '../../assets/icons/selection.json';
import dasaIcons from '../../assets/icons/dasa_selection.json';

const IconSet = {
  gogood: gogoodIcons,
  dasa: dasaIcons,
  sesi: gogoodIcons,
};

export const getIconSet = (theme) => {
  return IconSet[theme || 'gogood'];
};

export const Icon = ({ name, color, size, ...restProps }) => {
  const { theme } = useVulpes();
  const colors = getColors(theme);
  const iconSet = getIconSet(theme);
  const colorVal = color ? colors(color) : colors('gray.100');
  const sizeVal = size ? size : 20;
  return (
    <View {...restProps}>
      <Icomoon iconSet={iconSet} name={name} color={colorVal} size={sizeVal} />
    </View>
  );
};

export const listOfIcons = () => {
  return iconList(gogoodIcons);
};
