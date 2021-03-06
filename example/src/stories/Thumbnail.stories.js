import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Colors, Thumbnail } from 'react-native-vulpes';

const exampleImage = require('./thumb.png');

const outerViewStyle = {
  backgroundColor: Colors.cyan,
  padding: 20,
  width: 'auto',
};
export default {
  title: 'Example/Thumbnails',
  component: Thumbnail,
  decorators: [(story) => <View style={outerViewStyle}>{story()}</View>],
  argTypes: {
    size: {
      description: 'one of three sizes',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    source: {
      description: 'image to be shown',
      control: {
        type: 'iamge',
      },
    },
  },
};

const TemplateThumbnails = ({
  size = 'small',
  source = exampleImage,
  ...rest
}) => {
  return <Thumbnail source={source} size={size} {...rest} />;
};

export const Example = TemplateThumbnails.bind({});
Example.args = {
  source: exampleImage,
  size: undefined,
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Thumbnail', Example);
}
