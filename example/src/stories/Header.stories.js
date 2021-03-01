import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Header } from 'react-native-vulpes';

export default {
  title: 'Example/Header',
  component: Header,
  argTypes: {
    backAction: {
      description: 'an action to be executed when the back button is clicked',
      control: 'fn',
    },
  },
};

const backActionExample = () => {
  console.warn('BACK ACTION');
};

const TemplateGradientView = ({ backAction = backActionExample, ...rest }) => (
  <Header backAction={backAction} {...rest} />
);

export const Example = TemplateGradientView.bind({});
Example.args = {
  backAction: backActionExample,
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Header', TemplateGradientView, Example.args);
}
