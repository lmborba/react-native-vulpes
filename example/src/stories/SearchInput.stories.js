import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { SearchInput } from 'react-native-vulpes';

export default {
  title: 'Example/SearchInput',
  component: SearchInput,
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
    allowSend: {
      description: 'if it is allowed to send the query',
      control: 'boolean',
    },
    onChangeText: {
      description:
        'function that will be called when the field value is changed. It passes the resulting text as a parameter.',
      control: 'fn',
    },
  },
};

const TemplateSearchInput = ({ ...rest }) => (
  <SearchInput label={'Field label'} placeholder={'Placeholder'} {...rest} />
);

export const Example = TemplateSearchInput;
Example.args = {
  error: undefined,
  label: 'Field label',
  placeholder: 'Placeholder',
  labelStyle: undefined,
  inputStyle: undefined,
  value: undefined,
  onChangeText: undefined,
  allowSend: undefined,
};

if (Platform.OS === 'android') {
  const paddingContainer = { padding: 10 };
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View style={paddingContainer}>
      <Story />
    </View>
  ));

  fillStories.add('SearchInput', TemplateSearchInput, Example.args);
}
