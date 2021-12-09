import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import {
  BodyLarge,
  BodyLargeBold,
  Colors,
  H1,
  H2,
  H3,
  H4,
  Placeholder,
  PlaceholderBold,
  Regular,
  RegularBold,
  Small,
  Small2,
  SmallBold,
  Subtitle,
} from 'react-native-vulpes';

const colorList = () => {
  var keys = [];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

export default {
  title: 'Example/Typography',
  component: View,
  argTypes: {
    color: {
      description: 'color for the text',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
  },
};

const TemplateTypography = ({ color = undefined, ...rest }) => (
  <View>
    <H1 color={color}>H1</H1>
    <H2 color={color}>H2</H2>
    <H3 color={color}>H3</H3>
    <H4 color={color}>H4</H4>
    <BodyLarge color={color}>BodyLarge</BodyLarge>
    <BodyLargeBold color={color}>BodyLargeBold</BodyLargeBold>
    <Placeholder color={color}>Placeholder</Placeholder>
    <PlaceholderBold color={color}>PlaceholderBold</PlaceholderBold>
    <Regular color={color}>Regular</Regular>
    <RegularBold color={color}>RegularBold</RegularBold>
    <Small color={color}>Small</Small>
    <Small2 color={color}>Small2</Small2>
    <SmallBold color={color}>SmallBold</SmallBold>
    <Subtitle color={color}>Subtitle</Subtitle>
  </View>
);

export const Example = TemplateTypography.bind({});
Example.argTypes = {
  color: {
    description: 'color for the text',
    control: {
      type: 'select',
      options: colorList(),
    },
  },
};

Example.args = {
  color: undefined,
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Typography', TemplateTypography, Example.args);
}
