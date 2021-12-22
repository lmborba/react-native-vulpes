import React from 'react';
import { View } from 'react-native';
import { Card, Carousel, Colors, H1, SnapCarousel } from 'react-native-vulpes';
// import { FlatList, ScrollView, RefreshControl,Container } from 'react-native';

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

const TemplateCarousel = ({ color = 'cyan', width = 300, ...rest }) => (
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

export const ExampleCarousel = TemplateCarousel;
ExampleCarousel.args = {
  color: 'cyan',
  width: 200,
};

const TemplateSnapCarousel = ({ color = 'cyan', width = 300, ...rest }) => (
  <SnapCarousel width={width} {...rest}>
    <Card color={color}>
      <H1>Teste 1</H1>
    </Card>
    <Card color={color}>
      <H1>Teste 2</H1>
    </Card>
    <Card color={color}>
      <H1>Teste 3</H1>
    </Card>
  </SnapCarousel>
);

export const ExampleSnapCarousel = TemplateSnapCarousel;
ExampleSnapCarousel.args = {
  color: 'cyan',
  width: 200,
};
