import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { Icon, LeftMenu, LeftMenuItem, Text } from 'react-native-vulpes';

export default {
  title: 'Example/LeftMenuItem',
  component: LeftMenuItem,
};

const TemplateLeftMenuItem = ({ justIcons = false, ...rest }) => {
  const [current, setLeftMenuItem] = useState('home');
  const defineLeftMenuItem = (newLevel) => setLeftMenuItem(() => newLevel);
  return (
    <LeftMenu justIcons={justIcons}>
      <LeftMenuItem
        selected={current === 'home'}
        onPress={() => defineLeftMenuItem('home')}
      >
        <Icon name="home" />
        <Text>Início</Text>
      </LeftMenuItem>
      <LeftMenuItem
        selected={current === 'content'}
        onPress={() => defineLeftMenuItem('content')}
      >
        <Icon name="content" />
        <Text>Conteúdo</Text>
      </LeftMenuItem>
      <LeftMenuItem
        selected={current === 'checkin'}
        onPress={() => defineLeftMenuItem('checkin')}
      >
        <Icon name="checkin" />
        <Text>Check-in</Text>
      </LeftMenuItem>
      <LeftMenuItem
        selected={current === 'explore'}
        onPress={() => defineLeftMenuItem('explore')}
      >
        <Icon name="search" />
        <Text>Explorar</Text>
      </LeftMenuItem>
      <LeftMenuItem
        selected={current === 'account'}
        onPress={() => defineLeftMenuItem('account')}
      >
        <Icon name="user" />
        <Text>Conta</Text>
      </LeftMenuItem>
    </LeftMenu>
  );
};

export const Example = TemplateLeftMenuItem;
Example.argTypes = {
  justIcons: {
    description: 'just show the icons',
    control: {
      type: 'boolean',
    },
  },
};

Example.args = {
  justIcons: false,
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('LeftMenuItem', TemplateLeftMenuItem, Example.args);
}
