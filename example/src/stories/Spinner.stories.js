import { storiesOf } from '@storybook/react-native';
import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { Spinner, colorList } from 'react-native-vulpes';

export default {
  title: 'Example/Spinner',
  component: Spinner,
  argTypes: {
    color: {
      description: 'color for the spinner',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    size: {
      description: 'size of the spinner',
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
    },
  },
};

class TemplateSpinner extends Component {
  render() {
    const { color = undefined, size = undefined } = this.props;

    return (
      <>
        <Spinner color={color} size={size} />
      </>
    );
  }
}

const TemplateSpinnerWrap = (props) => <TemplateSpinner {...props} />;

export const Example = TemplateSpinnerWrap;
Example.argTypes = {
  color: {
    description: 'color for the spinner',
    control: {
      type: 'select',
      options: colorList(),
    },
  },
  size: {
    description: 'size of the spinner',
    control: {
      type: 'select',
      options: ['small', 'large'],
    },
  },
};

Example.args = {
  color: undefined,
  outline: false,
  ghost: false,
  disabled: false,
  icon: 'like_empty',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Button', TemplateSpinner, Example.args);
}
