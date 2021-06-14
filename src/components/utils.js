import React from 'react';
import { View } from 'react-native';

const fillSpaceStyle = { flex: 1 };

export const FillSpace = (props) => <View style={fillSpaceStyle} />;

export const PaddedView = ({ style, children, restProps }) => (
  <View {...restProps} style={style}>
    {children}
  </View>
);
