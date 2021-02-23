import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Colors, Text } from 'react-native-vulpes';

const colorList = () => {
  var keys = [];
  for (var k in Colors) keys.push(k);
  return keys;
};

export default {
  title: 'Example/Colors',
  component: Text,
};

const TemplateTextColor = ({ color = 'red', ...rest }) => (
  <Text {...rest} color={color}>
    {color}
  </Text>
);

export const TextColor = TemplateTextColor.bind({});
TextColor.argTypes = {
  color: {
    description: 'color for the text',
    control: {
      type: 'select',
      options: colorList(),
    },
  },
};
TextColor.args = {
  color: 'blue',
};

const ret = { TextColor };

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  for (var k in ret) {
    fillStories.add('' + k, TemplateTextColor, TextColor.args);
  }
}
