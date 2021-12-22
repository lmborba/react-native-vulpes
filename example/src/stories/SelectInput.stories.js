import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { SelectInput, SelectItem } from 'react-native-vulpes';

console.warn(SelectInput);

export default {
  title: 'Example/SelectInput',
  component: SelectInput,
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

const TemplateSelectInput = ({ error, ...rest }) => (
  <SelectInput
    label={'Field label'}
    placeholder={'Placeholder'}
    error={error}
    {...rest}
  >
    <SelectItem label="Item 1" value="item_1" />
    <SelectItem label="Item 2" value="item_2" />
    <SelectItem label="Item 3" value="item_3" />
    <SelectItem label="Item 4" value="item_4" />
    <SelectItem label="Item 5" value="item_5" />
    <SelectItem label="Item 6" value="item_6" />
    <SelectItem label="Item 7" value="item_7" />
    <SelectItem label="Item 8" value="item_8" />
    <SelectItem label="Item 9" value="item_9" />
    <SelectItem label="Item 10" value="item_10" />
    <SelectItem label="Item 11" value="item_11" />
    <SelectItem label="Item 12" value="item_12" />
    <SelectItem label="Item 13" value="item_13" />
    <SelectItem label="Item 14" value="item_14" />
    <SelectItem label="Item 15" value="item_15" />
    <SelectItem label="Item 16" value="item_16" />
  </SelectInput>
);

export const Example = TemplateSelectInput;

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

  fillStories.add('SelectInput', TemplateSelectInput, Example.args);
}
