import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { UploadCard, colorList } from 'react-native-vulpes';

const mobileStyleWidget = { maxWidth: 320 };
export default {
  title: 'Example/UploadCard',
  component: UploadCard,
  decorators: [(story) => <View style={mobileStyleWidget}>{story()}</View>],
  argTypes: {
    color: {
      description: 'color for the button',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    noPadding: {
      description: 'should have zero padding',
      control: {
        type: 'boolean',
      },
    },
  },
};

const TemplateGradientView = ({ ...rest }) => {
  return <UploadCard {...rest} />;
};

export const Example = TemplateGradientView;
Example.args = {
  filename: 'some_file.png',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('UploadCard', TemplateGradientView, Example.args);
}
