import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { colorList, Text } from 'react-native-vulpes';

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
