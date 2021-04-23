import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Colors, H4, Text, ProfileCard } from 'react-native-vulpes';

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
  title: 'Example/ProfileCard',
  component: ProfileCard,
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
    <ProfileCard {...rest}>
      <H4>Fulano de tal</H4>
      <Text>Plano de academias</Text>
    </ProfileCard>
  );
};

export const Example = TemplateGradientView.bind({});
Example.args = {
  color: 'cyan',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('ProfileCard', TemplateGradientView, Example.args);
}
