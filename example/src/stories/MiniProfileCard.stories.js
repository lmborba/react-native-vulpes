import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Colors, MiniProfileCard } from 'react-native-vulpes';
import { Regular, RegularBold } from '../../../src/components/typos';

const colorList = () => {
  var keys = [];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

const imageList = () => {
  return [
    'static/media/thumb.5ebfbd91.png',
    'https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/26/44/72/2644724f-d58e-3097-9f6c-da427946c99e/source/60x60bb.jpg',
  ];
};

const mobileStyleWidget = { maxWidth: 320 };
export default {
  title: 'Example/MiniProfileCard',
  component: MiniProfileCard,
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

const Template = ({ ...rest }) => {
  return (
    <MiniProfileCard {...rest}>
      <RegularBold>Fulano de tal</RegularBold>
      <Regular>Plano de academias</Regular>
    </MiniProfileCard>
  );
};

// -- example 1-----
export const Example = Template;
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
  color: 'cyan',
  source: 'static/media/thumb.5ebfbd91.png',
};

// -- example 2-----
export const MiniCardWithTag = Template;
Example.argTypes = {
  source: {
    description: 'source for profile image',
    control: {
      type: 'select',
      options: imageList(),
    },
  },
};

MiniCardWithTag.args = {
  color: 'cyan',
  source: 'static/media/thumb.5ebfbd91.png',
  tagText: 'hello',
  tagIcon: 'lock',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('MiniProfileCard', Template, Example.args);
}
