import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { H4, Text, TicketCard, colorList } from 'react-native-vulpes';

const mobileStyleWidget = { maxWidth: 320 };
export default {
  title: 'Example/TicketCard',
  component: TicketCard,
  decorators: [(story) => <View style={mobileStyleWidget}>{story()}</View>],
  argTypes: {
    color: {
      description: 'color for the card',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
  },
};

const TemplateGradientView = ({ ...rest }) => {
  return (
    <TicketCard {...rest}>
      <H4>Teste de Cartão</H4>
      <Text>Testando esta bagaça</Text>
    </TicketCard>
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

  fillStories.add('TicketCard', TemplateGradientView, Example.args);
}
