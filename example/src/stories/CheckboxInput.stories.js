import { storiesOf } from '@storybook/react-native';
import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { CheckboxInput } from 'react-native-vulpes';
import { Regular } from '../../../src/components/typos';

export default {
  title: 'Example/CheckboxInput',
  component: CheckboxInput,
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

    value: {
      description: 'value for the input text',
      control: 'boolean',
    },
  },
};

class TemplateCheckboxInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  onChange(val) {
    console.log(val);
    this.setState({
      value: val,
    });
  }

  render() {
    return (
      <View>
        <CheckboxInput
          {...this.props}
          label={'CheckBox input'}
          onChange={this.onChange.bind(this)}
          value={this.state.value}
        />
        <Regular>{this.state.value}</Regular>
      </View>
    );
  }
}

const TemplateCheck = (props) => <TemplateCheckboxInput {...props} />;
export const Example = TemplateCheck;
Example.args = {
  error: undefined,
  label: 'Field label',
  value: true,
  text: 'Texto padrão',
};

if (Platform.OS === 'android') {
  const paddingContainer = { padding: 10 };
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View style={paddingContainer}>
      <Story />
    </View>
  ));

  fillStories.add('CheckboxInput', TemplateCheckboxInput, Example.args);
}
