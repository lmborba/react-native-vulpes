import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Colors, H4, Text, TicketCard } from 'react-native-vulpes';

const colorList = () => {
  var keys = [];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

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
  color: 'cyan',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('TicketCard', TemplateGradientView, Example.args);
}
