import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Colors, Icon, Tag as Tg, Text } from 'react-native-vulpes';
import { listOfIcons } from '../../../src/components/icon';

const colorList = () => {
  var keys = [undefined];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

const buttonContainer = { margin: 10 };

const Tag = (props) => {
  return <Tg style={buttonContainer} {...props} />;
};

const TemplateTag = ({
  color = undefined,
  outline = undefined,
  light = undefined,
  icon = 'like_empty',
  ...rest
}) => (
  <View style={{ backgroundColor: Colors.light_gray }}>
    <Tag color={color} outline={outline} light={light}>
      Plano cancelado
    </Tag>
    <Tag color={color} outline={outline} light={light}>
      <Icon name={icon} size={14} />
      <Text>Plano suspenso</Text>
    </Tag>
    <Tag color={color} outline={outline} light={light}>
      <Text>Plano cancelado</Text>
      <Icon name={icon} size={14} />
    </Tag>
    <Tag color={color} outline={outline} light={light}>
      <Icon name={icon} size={14} />
    </Tag>
  </View>
);

export default {
  title: 'Example/Tag',
  component: Tag,
  argTypes: {
    color: {
      description: 'color for the button',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    outline: {
      description: 'sets button of type outline',
      control: {
        type: 'boolean',
      },
    },
    light: {
      description: 'sets button of type light',
      control: {
        type: 'boolean',
      },
    },
    icon: {
      description: 'icon to be used',
      control: {
        type: 'select',
        options: listOfIcons(),
      },
    },
  },
};

export const Example = TemplateTag;
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
  outline: false,
  light: false,
  icon: 'like_empty',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Tag', TemplateTag, Example.args);
}
