import { storiesOf } from '@storybook/react-native';
import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { BarChart as C, PieChart as P, Colors } from 'react-native-vulpes';

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
const PieChart = (props) => {
  return <P style={buttonContainer} {...props} />;
};
class TemplateButton extends Component {
  render() {
    const dataB = {
      title: 'Titulo do gráfico de barras',
      data: [
        { label: 'Jan', value: 50 },
        { label: 'Fev', value: 80 },
        { label: 'Mar', value: 90 },
        { label: 'Abr', value: 70 },
      ],
    };
    const dataP = {
      title: 'Titulo do gráfico de pizza 2',
      data: [
        { label: 'Janeiro de 2021 - 30%', value: 20 },
        { label: 'Fev', value: 50 },
        { label: 'Mar', value: 30 },
        { label: 'Abr', value: 70 },
      ],
    };

    const s = { flexDirection: 'row' };
    return (
      <View style={s}>
        <BarChart data={dataB} />
        <PieChart data={dataP} />
      </View>
    );
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
