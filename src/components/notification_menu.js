import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { iconList } from 'react-native-icomoon';
import json from '../../assets/icons/selection.json';
import { NotificationIcon } from './notification_icon';

export const NotificationMenuItem = ({ item, color, markerColor, size }) => {
  return (
    <TouchableOpacity onPress={() => item.action()} style={{ marginLeft: 22 }}>
      <NotificationIcon
        name={item.icon}
        showMarker={item.showMarker}
        color={color}
        size={size}
        markerColor={markerColor}
      />
    </TouchableOpacity>
  );
};

export const NotificationMenu = ({
  menuList,
  size,
  color,
  markerColor,
  style,
  ...restProps
}) => {
  return (
    <View {...restProps} style={{ ...style, flexDirection: 'row' }}>
      {menuList.map((item) => {
        return (
          <NotificationMenuItem
            item={item}
            size={size}
            color={color}
            markerColor={markerColor}
          />
        );
      })}
    </View>
  );
};

export const listOfIcons = () => {
  return iconList(json);
};
