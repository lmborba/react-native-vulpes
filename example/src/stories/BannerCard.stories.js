import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { BannerCard, Colors } from 'react-native-vulpes';

const colorList = () => {
  var keys = [];
  for (var k in Colors) {
    if (k.substring(0, 8) === 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

const imageList = () => {
  return [
    require('../images/treino_plano.png'),
    require('../images/treino_plano2.png'),
    undefined,
  ];
};

const mobileStyleWidget = { maxWidth: 320 };
export default {
  title: 'Example/BannerCard',
  component: BannerCard,
  decorators: [(story) => <View style={mobileStyleWidget}>{story()}</View>],
  argTypes: {
    color: {
      description: 'color for the card',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    source: {
      description: 'source for banner image',
      control: {
        type: 'select',
        options: imageList(),
      },
    },
    title: {
      description: 'Title for the banner',
      control: {
        type: 'text',
      },
    },
    description: {
      description: 'Description for the banner',
      control: {
        type: 'text',
      },
    },
    linkText: {
      description: 'Text for the link of the banner',
      control: {
        type: 'text',
      },
    },
    onPress: {
      description: 'Function to be executed when the banner is pressed',
      control: {
        type: 'fn',
      },
    },
  },
};

const Template = ({ ...rest }) => {
  return <BannerCard {...rest} />;
};

// exemple1
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
  color: 'gradient_pink',
  source: imageList()[0],
  title: 'Treino sem limites',
  description:
    'Exercite-se todos os dias  com planos a partir de R$ 24,90 / mês.',
  linkText: 'Conheça agora',
  onPress: () => {
    console.log('teste');
  },
};

// exemple2
export const ExampleNoBottomLink = Template;
ExampleNoBottomLink.argTypes = {
  source: {
    description: 'source for profile image',
    control: {
      type: 'select',
      options: imageList(),
    },
  },
};
ExampleNoBottomLink.args = {
  color: 'gradient_green',
  source: imageList()[1],
  title: 'Treino sem limites',
  description:
    'Exercite-se todos os dias  com planos a partir de R$ 24,90 / mês.',
  // linkText: 'Conheça agora',
  onPress: () => {
    console.log('teste');
  },
  height: 120,
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('BannerCard', Template, Example.args);
}
