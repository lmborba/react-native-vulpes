import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { ActionSheet, Button, SelectItem } from 'react-native-vulpes';
import { openActionSheet } from '../../../src/components/action_sheet';

export default {
  title: 'Example/ActionSheet',
  component: ActionSheet,
  argTypes: {
    error: {
      description:
        'error message to be shown for the input, Null or empty if there is no error',
      control: 'text',
    },
    label: {
      description: 'label to be shown before the input',
      control: 'text',
    },
    placeholder: {
      description: 'placeholder text shown while no input is given',
      control: 'text',
    },
    labelStyle: {
      description: 'style for the label',
      control: 'object',
    },
    inputStyle: {
      description: 'style for the input field',
      control: 'object',
    },
    value: {
      description: 'value for the input text',
      control: 'string',
    },
    onChangeText: {
      description:
        'function that will be called when the field value is changed. It passes the resulting text as a parameter.',
      control: 'fn',
    },
  },
};

const Template = ({ error, ...rest }) => {
  this.ref = null;
  return (
    <View>
      <Button onPress={() => this.ref.open()} text={'Opções'} />
      <Button onPress={() => openActionSheet()} text={'Opções'} />
      <ActionSheet
        ref={(ref) => (this.ref = ref)}
        keyReference={'myLabel'}
        headerText={'Selecione uma opção'}
      >
        <SelectItem label="Item 1" onSelect={() => console.log('Item 1')} />
        <SelectItem label="Item 2" onSelect={() => console.log('Item 2')} />
        <SelectItem label="Item 3" onSelect={() => console.log('Item 3')} />
        <SelectItem label="Item 4" onSelect={() => console.log('Item 4')} />
      </ActionSheet>
    </View>
  );
};

export const Example = Template;

Example.args = {
  error: undefined,
  label: 'Field label',
  placeholder: 'Placeholder',
  labelStyle: undefined,
  inputStyle: undefined,
  value: 'item_3',
  onChangeValue: undefined,
};

if (Platform.OS === 'android') {
  const paddingContainer = { padding: 10 };
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View style={paddingContainer}>
      <Story />
    </View>
  ));

  fillStories.add('SelectInput', Template, Example.args);
}
