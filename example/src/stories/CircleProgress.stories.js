import React from 'react';
import { View } from 'react-native';
import { CircularProgress } from 'react-native-vulpes';

export default {
  title: 'Example/CashbackProgress',
  component: CircularProgress,
};

const containerStyle = { borderWidth: 1, alignItems: 'center' };
const TemplateTag = (props) => (
  <View style={containerStyle}>
    <CircularProgress {...props} circleRotation={90} />
  </View>
);

export const Example = TemplateTag;

Example.args = {
  checkins: 9,
  size: 220,
};

Example.argTypes = {};
