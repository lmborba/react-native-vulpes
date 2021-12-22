import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Colors, Icon } from 'react-native-vulpes';
import { listOfIcons } from '../../../src/components/icon';

const colorList = () => {
  var keys = [];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

export default {
  title: 'Example/Icons',
  component: Icon,
  argTypes: {
    color: {
      description: 'color for the icon',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    icon: {
      description: 'icon to be used',
      control: {
        type: 'select',
        options: listOfIcons(),
      },
    },
    size: {
      description: 'size of the icon in pixels',
      control: {
        type: 'number',
      },
    },
  },
};

const TemplateIcons = ({ color = undefined, icon = 'menu', name, ...rest }) => {
  return <Icon name={icon} color={color} {...rest} />;
};

export const Example = TemplateIcons;
Example.argTypes = {
  color: {
    description: 'color for the text',
    control: {
      type: 'select',
      options: colorList(),
    },
  },
};

Example.args = {
  color: undefined,
  icon: 'menu',
  size: undefined,
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Icon', Example);
}
