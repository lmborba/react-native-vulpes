import { storiesOf } from '@storybook/react-native';
import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { Checkbox } from 'react-native-vulpes';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
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
  },
};

class TemplateCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  onChange(value) {
    this.setState({
      value: value,
    });
  }

  render() {
    return (
      <View>
        <Checkbox
          onChange={this.onChange.bind(this)}
          checked={this.state.value}
          {...this.props}
        />
      </View>
    );
  }
}

const TemplateCheck = (props) => <TemplateCheckbox {...props} />;
export const Example = TemplateCheck;
Example.args = {
  error: undefined,
  label: 'Checkbox Label',
  text: 'Clique para confirmar',
};

if (Platform.OS === 'android') {
  const paddingContainer = { padding: 10 };
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View style={paddingContainer}>
      <Story />
    </View>
  ));

  fillStories.add('Checkbox', TemplateCheckbox, Example.args);
}
