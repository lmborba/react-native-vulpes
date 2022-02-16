import { storiesOf } from '@storybook/react-native';
import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { BarChart as C, Colors } from 'react-native-vulpes';

const colorList = () => {
  var keys = [undefined];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

const buttonContainer = { margin: 10 };

const BarChart = (props) => {
  return <C style={buttonContainer} {...props} />;
};
class TemplateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

  handlePress() {
    console.log('pressed', this.state);
    this.setState({
      value: !this.state.value,
    });
  }

  render() {
    const {
      color = undefined,
      data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
    } = this.props;

    const { value } = this.state;

    return <BarChart color={color} data={data} />;
  }
}

const TemplateButtonWrap = (props) => <TemplateButton {...props} />;

export const Example = TemplateButtonWrap;

export default {
  title: 'Example/BarChart',
  component: BarChart,
  argTypes: {
    color: {
      description: 'color for the button',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    data: {
      description: 'array of data to be shown',
      control: {
        type: 'array',
      },
    },
  },
};

Example.argTypes = {
  color: {
    description: 'color for the text',
    control: {
      type: 'select',
      options: colorList(),
    },
  },
  data: {
    description: 'array of data to be shown',
    control: {
      type: 'array',
    },
  },
};

Example.args = {
  color: undefined,
  data: undefined,
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Button', TemplateButton, Example.args);
}
