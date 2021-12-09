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
        type: 'image',
      },
    },
    empty: {
      description: 'if the thumbnail is for an empty image',
      control: {
        type: 'boolean',
      },
    },
    square: {
      description: 'if the thumbnail should be squared',
      control: {
        type: 'boolean',
      },
    },
  },
};

const TemplateThumbnails = ({
  size = 'small',
  source = exampleImage,
  empty = undefined,
  square = undefined,
  ...rest
}) => {
  return (
    <Thumbnail
      source={source}
      size={size}
      empty={empty}
      square={square}
      {...rest}
    />
  );
};

export const Example = TemplateThumbnails.bind({});
Example.args = {
  source: exampleImage,
  size: undefined,
  empty: undefined,
  square: undefined,
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Thumbnail', Example);
}
