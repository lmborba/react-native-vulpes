import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Card, colorList, H4, Text } from 'react-native-vulpes';

const mobileStyleWidget = { maxWidth: 320 };
export default {
  title: 'Example/Card',
  component: Card,
  decorators: [(story) => <View style={mobileStyleWidget}>{story()}</View>],
  argTypes: {
    color: {
      description: 'color for the button',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    noPadding: {
      description: 'should have zero padding',
      control: {
        type: 'boolean',
      },
    },
  },
};

const TemplateGradientView = ({ ...rest }) => {
  return (
    <Card {...rest}>
      <H4>Teste de Cartão</H4>
      <Text>Testando esta bagaça</Text>
    </Card>
  );
};

export const Example = TemplateGradientView;
Example.args = {
  color: 'primary.80',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Card', TemplateGradientView, Example.args);
}
