import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { iconList } from 'react-native-icomoon';
import json from '../../assets/icons/selection.json';
import { NotificationIcon } from './notification_icon';

const notificationMenuSeparationSpace = { marginLeft: 8, padding: 8 };
export const NotificationMenuItem = ({ item, color, markerColor, size }) => {
  return (
    <TouchableOpacity
      onPress={() => item.action()}
      style={notificationMenuSeparationSpace}
    >
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
  const notificationMenuCompleteStyle = { ...style, flexDirection: 'row' };
  if (!menuList) return null;
  return (
    <View {...restProps} style={notificationMenuCompleteStyle}>
      {menuList.map((item, index) => {
        return (
          <NotificationMenuItem
            key={'mItem' + index}
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
