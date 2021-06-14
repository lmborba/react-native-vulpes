import React from 'react';
import { View } from 'react-native';

const fillSpaceStyle = { flex: 1 };

export const FillSpace = (props) => <View style={fillSpaceStyle} />;

export const PaddedView = ({ style, children, restProps }) => (
  <View {...restProps} style={addPaddingsToOriginalStyle(style)}>
    {children}
  </View>
);
function addPaddingsToOriginalStyle(style) {
  return { ...style, paddingLeft: 16, paddingRight: 16 };
}
