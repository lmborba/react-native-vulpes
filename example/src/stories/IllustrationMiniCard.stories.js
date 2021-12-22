import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { IllustrationMiniCard } from 'react-native-vulpes';
import { Regular, RegularBold } from '../../../src/components/typos';

const imageList = () => {
  return [
    require('../images/gym_service.png'),
    require('../images/psychology_service.png'),
    require('../images/nutrition_service.png'),
    require('../images/personal_service.png'),
    require('../images/content_service.png'),
  ];
};

const mobileStyleWidget = { maxWidth: 320 };
export default {
  title: 'Example/IllustrationMiniCard',
  component: IllustrationMiniCard,
  decorators: [(story) => <View style={mobileStyleWidget}>{story()}</View>],
  argTypes: {
    source: {
      description: 'source for profile image',
      control: {
        type: 'select',
        options: imageList(),
      },
    },
  },
};

const TemplateGradientView = ({ ...rest }) => {
  return (
    <IllustrationMiniCard {...rest}>
      <RegularBold>Titulo</RegularBold>
      <Regular>subtitulo</Regular>
    </IllustrationMiniCard>
  );
};

export const Example = TemplateGradientView;
Example.argTypes = {
  source: {
    description: 'source for profile image',
    control: {
      type: 'select',
      options: imageList(),
    },
  },
};
Example.args = {
  source: 'static/media/thumb.5ebfbd91.png',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('IllustrationMiniCard', TemplateGradientView, Example.args);
}
