import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import {
  CardActions,
  Colors,
  H4,
  ProfileCard,
  Text,
} from 'react-native-vulpes';
import { ToggleButton } from '../../../src';
import { listOfIcons } from '../../../src/components/icon';
const exampleImage = require('../images/transparentLogo.png');

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
    exampleImage,
    'static/media/thumb.5ebfbd91.png',
    'https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/26/44/72/2644724f-d58e-3097-9f6c-da427946c99e/source/60x60bb.jpg',
    undefined,
  ];
};

const coverList = () => {
  return [require('../images/banner.png'), undefined];
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
    cover: {
      description: 'source for cover image',
      control: {
        type: 'select',
        options: coverList(),
      },
    },
    source: {
      description: 'source for profile image',
      control: {
        type: 'select',
        options: imageList(),
      },
    },
    tagIcon: {
      description: 'icon to be used as tag',
      control: {
        type: 'select',
        options: listOfIcons(),
      },
    },
    tagText: {
      description: 'text to be used as tag',
      control: {
        type: 'text',
      },
    },
    tagColor: {
      description: 'color to be used as tag',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    tagTextColor: {
      description: 'color to be used for text of the tag',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
  },
};

const TemplateGradientView = ({ ...rest }) => {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked((value) => !value);
  return (
    <ProfileCard {...rest}>
      <CardActions>
        <ToggleButton
          onIcon={'like'}
          offIcon={'like_empty'}
          value={checked}
          onPress={toggleChecked}
        />
      </CardActions>
      <H4>Fulano de tal</H4>
      <Text>Plano de academias</Text>
    </ProfileCard>
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
  color: 'cyan',
  source: imageList()[0],
  cover: undefined,
  tagIcon: 'unlock',
  tagColor: 'dark_gray',
  tagText: 'Tag text',
  tagTextColor: undefined,
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('ProfileCard', TemplateGradientView, Example.args);
}
