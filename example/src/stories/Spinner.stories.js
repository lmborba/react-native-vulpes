import { storiesOf } from '@storybook/react-native';
import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { Colors, Spinner } from 'react-native-vulpes';

const colorList = () => {
  var keys = [undefined];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

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
