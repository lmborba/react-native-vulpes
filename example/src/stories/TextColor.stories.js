import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Colors, Text } from 'react-native-vulpes';

const colorList = () => {
  var keys = [];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

export default {
  title: 'Example/TextColor',
  component: Text,
  argTypes: {
    color: {
      description: 'color for the text',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
  },
};

const TemplateTextColor = ({ color = 'red', ...rest }) => (
  <Text {...rest} color={color}>
    {color}
  </Text>
);

export const Example = TemplateTextColor;
Example.argTypes = {
  color: {
    description: 'color for the text',
    control: {
      type: 'select',
      options: colorList(),
    },
  },
};

Example.args = {
  color: 'blue',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('TextColor', TemplateTextColor, Example.args);
}
