import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { Colors, Icon, Menu, MenuItem, Text } from 'react-native-vulpes';

const colorList = () => {
  var keys = [undefined];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

export default {
  title: 'Example/MenuItem',
  component: MenuItem,
};

const TemplateMenuItem = ({
  color = undefined,
  outline = undefined,
  light = undefined,
  icon = 'like_empty',
  ...rest
}) => {
  const [current, setMenuItem] = useState('home');
  const defineMenuItem = (newLevel) => setMenuItem(() => newLevel);
  return (
    <Menu>
      <MenuItem
        selected={current === 'home'}
        onPress={() => defineMenuItem('home')}
      >
        <Icon name="home" />
        <Text>Início</Text>
      </MenuItem>
      <MenuItem
        selected={current === 'content'}
        onPress={() => defineMenuItem('content')}
      >
        <Icon name="content" />
        <Text>Conteúdo</Text>
      </MenuItem>
      <MenuItem
        selected={current === 'checkin'}
        onPress={() => defineMenuItem('checkin')}
      >
        <Icon name="checkin" />
        <Text>Check-in</Text>
      </MenuItem>
      <MenuItem
        selected={current === 'explore'}
        onPress={() => defineMenuItem('explore')}
      >
        <Icon name="search" />
        <Text>Explorar</Text>
      </MenuItem>
      <MenuItem
        selected={current === 'account'}
        onPress={() => defineMenuItem('account')}
      >
        <Icon name="user" />
        <Text>Conta</Text>
      </MenuItem>
    </Menu>
  );
};

export const Example = TemplateMenuItem;
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

  fillStories.add('MenuItem', TemplateMenuItem, Example.args);
}
