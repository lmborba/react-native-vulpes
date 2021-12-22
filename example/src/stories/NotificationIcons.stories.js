import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Colors, NotificationIcon } from 'react-native-vulpes';
import { listOfIcons } from '../../../src/components/notification_icon';

const colorList = () => {
  var keys = [];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

const outerViewStyle = {
  backgroundColor: Colors.cyan,
  padding: 20,
  width: 'auto',
};

export default {
  title: 'Example/NotificationIcon',
  component: NotificationIcon,
  decorators: [(story) => <View style={outerViewStyle}>{story()}</View>],
  argTypes: {
    color: {
      description: 'color for the NotificationIcon',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    icon: {
      description: 'NotificationIcon to be used',
      control: {
        type: 'select',
        options: listOfIcons(),
      },
    },
    size: {
      description: 'size of the NotificationIcon in pixels',
      control: {
        type: 'number',
      },
    },
    showMarker: {
      description: 'if notification should show marker',
      control: {
        type: 'boolean',
      },
    },
    markerColor: {
      description: 'color of the notification marker',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    markerBorder: {
      description: 'color of the border of the notification marker',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    up: {
      description:
        'if the notification marker should be placed on the top of the icon',
      control: {
        type: 'boolean',
      },
    },
  },
};

const TemplateNotificationIcons = ({
  color = undefined,
  icon = 'notification_empty',
  showMarker = true,
  ...rest
}) => {
  return (
    <NotificationIcon
      name={icon}
      color={color}
      showMarker={showMarker}
      {...rest}
    />
  );
};

export const Example = TemplateNotificationIcons;
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
  icon: 'notification_empty',
  showMarker: true,
  size: undefined,
  markerColor: undefined,
  markerBorder: undefined,
  up: undefined,
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('NotificationIcon', Example);
}
