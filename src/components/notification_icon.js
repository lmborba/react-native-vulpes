import React from 'react';
import { View } from 'react-native';
import { iconList } from 'react-native-icomoon';
import json from '../../assets/icons/selection.json';
import { getColors } from '../colors';
import useVulpes from '../hooks/useVulpes';
import { Icon } from './icon';

const Marker = ({ markerSize, borderColor, fillColor, up, ...rest }) => {
  const { theme } = useVulpes();
  const colors = getColors(theme);
  const borderColorVal = borderColor
    ? colors(borderColor)
    : colors('singleton.white');
  const fillColorVal = fillColor ? colors(fillColor) : colors('error.100');
  const markerCompleteStyle = {
    width: markerSize,
    height: markerSize,
    borderRadius: markerSize / 2,
    borderWidth: 1,
    borderColor: borderColorVal,
    backgroundColor: fillColorVal,
    right: 0,
    bottom: up ? undefined : 0,
    top: up ? 0 : undefined,
    position: 'absolute',
  };
  return <View style={markerCompleteStyle} />;
};

export const NotificationIcon = ({
  name,
  color,
  size,
  markerColor,
  showMarker,
  up,
  markerBorder,
  ...restProps
}) => {
  if (!color) color = 'singleton.white';
  const sizeVal = size ? size : 20;
  const markerSize = (sizeVal * 4) / 10;
  const notificationIconContainer = { width: sizeVal, height: sizeVal };
  const borderColor = markerBorder || color;

  return (
    <View {...restProps}>
      <View style={notificationIconContainer}>
        <Icon name={name} color={color} size={size} />
        {showMarker && (
          <Marker
            borderColor={borderColor}
            up={up}
            fillColor={markerColor}
            markerSize={markerSize}
          />
        )}
      </View>
    </View>
  );
};

export const listOfIcons = () => {
  return iconList(json);
};
