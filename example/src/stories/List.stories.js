import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { List, ListItem } from 'react-native-vulpes';

export default {
  title: 'Example/List',
  component: List,
  argTypes: {},
};

const press = () => {
  console.log('PRESS');
};

const TemplateList = ({ ...rest }) => (
  <>
    <List title={'Titulo 1'}>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
      <ListItem onPress={press}>Item 4</ListItem>
    </List>

    <List checked title={'Titulo 2'}>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
      <ListItem>Item 4</ListItem>
    </List>
  </>
);

export const Example = TemplateList;

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('List', TemplateList, Example.args);
}
