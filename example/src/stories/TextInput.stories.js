import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { TextInput } from 'react-native-vulpes';

export default {
  title: 'Example/TextInput',
  component: TextInput,
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

const TemplateTextInput = ({ ...rest }) => (
  <TextInput label={'Field label'} placeholder={'Placeholder'} {...rest} />
);

export const Example = TemplateTextInput;
Example.args = {
  error: undefined,
  label: 'Field label',
  placeholder: 'Placeholder',
  labelStyle: undefined,
  inputStyle: undefined,
  value: undefined,
  onChangeText: undefined,
};

if (Platform.OS === 'android') {
  const paddingContainer = { padding: 10 };
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View style={paddingContainer}>
      <Story />
    </View>
  ));

  fillStories.add('TextInput', TemplateTextInput, Example.args);
}
