import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { PaginationBullets } from 'react-native-vulpes';

export default {
  title: 'Example/PaginationBullets',
  component: PaginationBullets,
  argTypes: {
    total: {
      description: 'total number of bullet points to be presented',
      control: 'number',
    },
    current: {
      description: 'the current bullet point selected',
      control: 'number',
    },
  },
};

const Template = ({ total = 4, current = 2, ...rest }) => {
  this.ref = null;
  return <PaginationBullets total={total} current={current} />;
};

export const Example = Template;

Example.args = {
  total: 4,
  current: 2,
};

if (Platform.OS === 'android') {
  const paddingContainer = { padding: 10 };
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View style={paddingContainer}>
      <Story />
    </View>
  ));

  fillStories.add('SelectInput', Template, Example.args);
}
