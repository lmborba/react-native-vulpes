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
    <H1 color={color}>Primary</H1>
    <H2 color={color}>Cyan</H2>
    <H3 color={color}>Dark Cyan</H3>
    <H4 color={color}>Light Cyan</H4>
    <BodyLarge color={color}>Blue</BodyLarge>
    <BodyLargeBold color={color}>Dark Blue</BodyLargeBold>
    <Placeholder color={color}>Light Blue</Placeholder>
    <PlaceholderBold color={color}>Green</PlaceholderBold>
    <Regular color={color}>Dark Green</Regular>
    <RegularBold color={color}>Light Green</RegularBold>
    <Small color={color}>Orange</Small>
    <Small2 color={color}>Dark Orange</Small2>
    <SmallBold color={color}>Light Orange</SmallBold>
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
