import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Divider } from 'react-native-vulpes';

export default {
  title: 'Example/Divider',
  component: Divider,
};

const TemplateDivider = ({ ...rest }) => {
  return <Divider />;
};

export const Example = TemplateDivider;

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Divider', Example);
}
