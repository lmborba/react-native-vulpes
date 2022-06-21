import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { colorList, H4, Text, TicketCheckinCard } from 'react-native-vulpes';

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
  color: 'primary.80',
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
