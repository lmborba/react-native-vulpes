import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Colors, H4, Text, TicketCheckinCard } from 'react-native-vulpes';

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
  title: 'Example/TicketCheckinCard',
  component: TicketCheckinCard,
  decorators: [(story) => <View style={mobileStyleWidget}>{story()}</View>],
  argTypes: {
    color: {
      description: 'color for the card',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    checked: {
      description: 'if the card is checked',
      control: {
        type: 'boolean',
      },
    },
  },
};

const TemplateGradientView = ({ ...rest }) => {
  return (
    <TicketCheckinCard {...rest}>
      <H4>Fulano de tal</H4>
      <Text>Plano de academias</Text>
    </TicketCheckinCard>
  );
};

export const Example = TemplateGradientView;
Example.args = {
  color: 'cyan',
  checked: false,
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('TicketCheckinCard', TemplateGradientView, Example.args);
}
