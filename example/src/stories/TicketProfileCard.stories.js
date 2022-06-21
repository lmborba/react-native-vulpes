import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { colorList, H4, Text, TicketProfileCard } from 'react-native-vulpes';

const imageList = () => {
  return [
    'static/media/thumb.5ebfbd91.png',
    'https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/26/44/72/2644724f-d58e-3097-9f6c-da427946c99e/source/60x60bb.jpg',
    undefined,
  ];
};

const mobileStyleWidget = { maxWidth: 320 };
export default {
  title: 'Example/TicketProfileCard',
  component: TicketProfileCard,
  decorators: [(story) => <View style={mobileStyleWidget}>{story()}</View>],
  argTypes: {
    color: {
      description: 'color for the card',
      control: {
        type: 'select',
        options: colorList(),
      },
      source: {
        description: 'source for profile image',
        control: {
          type: 'select',
          options: imageList(),
        },
      },
    },
  },
};

const TemplateGradientView = ({ ...rest }) => {
  return (
    <TicketProfileCard {...rest}>
      <H4>Fulano de tal</H4>
      <Text>Plano de academias</Text>
    </TicketProfileCard>
  );
};

export const Example = TemplateGradientView;
Example.argTypes = {
  source: {
    description: 'source for profile image',
    control: {
      type: 'select',
      options: imageList(),
    },
  },
};
Example.args = {
  color: 'primary.80',
  source: 'static/media/thumb.5ebfbd91.png',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('TicketProfileCard', TemplateGradientView, Example.args);
}
