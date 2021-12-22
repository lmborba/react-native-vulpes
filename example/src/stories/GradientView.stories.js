import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Colors, GradientView as GV, Text as T } from 'react-native-vulpes';

const colorList = () => {
  var keys = [];
  for (var k in Colors) {
    if (k.substring(0, 8) === 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

export default {
  title: 'Example/GradientView',
  component: GV,
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

const gradientBox = {
  height: 100,
  width: 100,
  alignSelf: 'center',
  margin: 5,
};
const gradientText = {
  alignSelf: 'center',
  flex: 1,
  textAlign: 'center',
};

const GradientView = (props) => <GV {...props} style={gradientBox} />;
const Text = (props) => <T {...props} style={gradientText} />;

const TemplateGradientView = ({ color = 'gradient_red', ...rest }) => (
  <GradientView {...rest} color={color}>
    <Text color="white">{color}</Text>
  </GradientView>
);

export const Example = TemplateGradientView;
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
  color: 'gradient_blue',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('GradientView', TemplateGradientView, Example.args);
}
