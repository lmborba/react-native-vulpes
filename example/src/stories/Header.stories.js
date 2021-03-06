import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Header } from 'react-native-vulpes';

export default {
  title: 'Example/Header',
  component: Header,
  argTypes: {
    backAction: {
      description: 'an action to be executed when the back button is clicked',
      control: 'fn',
    },
  },
};

const backActionExample = () => {
  console.warn('BACK ACTION');
};

const HeaderExample = ({ backAction = backActionExample, ...rest }) => (
  <Header backAction={backAction} {...rest} />
);

const HeaderExampleTitle = ({ backAction = backActionExample, ...rest }) => (
  <Header
    backAction={backAction}
    title={'Titulo no header'}
    subtitle={'Escolha ou pesquise um local para fazer check-in'}
    {...rest}
  />
);

const list = [
  {
    action: () => {},
    icon: 'chat',
    showMarker: true,
  },
  {
    action: () => {},
    icon: 'notification_empty',
    showMarker: true,
  },
  {
    action: () => {},
    icon: 'calendar',
    showMarker: true,
  },
];

export const Example1 = HeaderExample.bind({});
Example1.args = {
  backAction: backActionExample,
};

export const Example2 = HeaderExample.bind({});
Example2.args = {
  backAction: backActionExample,
  title: 'Titulo no header',
  subtitle: 'Escolha ou pesquise um local para fazer check-in',
};

export const Example3 = HeaderExample.bind({});
Example3.args = {
  backAction: backActionExample,
  title: 'Titulo no header',
  menuList: list,
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Header', HeaderExample, Example1.args);
  fillStories.add('Header', HeaderExampleTitle, Example2.args);
}
