import React from 'react';
import { View } from 'react-native';
import { CashbackProgress } from '../../../src/components/cashback_progress';

export default {
  title: 'Example/CashbackProgress',
  component: CashbackProgress,
};

const containerStyle = { borderWidth: 1, alignItems: 'center' };
const TemplateTag = (props) => (
  <View style={containerStyle}>
    <CashbackProgress {...props} />
  </View>
);

export const Example = TemplateTag.bind({});

Example.args = {
  checkins: 9,
  size: 220,
};

Example.argTypes = {};
