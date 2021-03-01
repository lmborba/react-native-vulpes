import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Card, Carousel, Colors, H1 } from 'react-native-vulpes';

const colorList = () => {
  var keys = [];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

const mobileStyleWidget = { maxWidth: 320, width: 320, height: 320 };
export default {
  title: 'Example/Carousel',
  component: Carousel,
  decorators: [(story) => <View style={mobileStyleWidget}>{story()}</View>],
  argTypes: {
    color: {
      description: 'color for the button',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    width: {
      description: 'width for the inner component',
      control: {
        type: 'number',
      },
    },
  },
};

const TemplateGradientView = ({ color = 'cyan', width = 300, ...rest }) => (
  <Carousel width={width} {...rest}>
    <Card color={color}>
      <H1>Teste 1</H1>
    </Card>
    <Card color={color}>
      <H1>Teste 2</H1>
    </Card>
    <Card color={color}>
      <H1>Teste 3</H1>
    </Card>
  </Carousel>
);

export const Example = TemplateGradientView.bind({});
Example.args = {
  color: 'cyan',
  width: 200,
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Carousel', TemplateGradientView, Example.args);
}
