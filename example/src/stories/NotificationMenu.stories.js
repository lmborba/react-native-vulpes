import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Colors, NotificationMenu } from 'react-native-vulpes';

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
  title: 'Example/NotificationMenu',
  component: NotificationMenu,
  decorators: [(story) => <View style={outerViewStyle}>{story()}</View>],
  argTypes: {
    color: {
      description: 'color for the NotificationMenu',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    size: {
      description: 'size of the NotificationMenu in pixels',
      control: {
        type: 'number',
      },
    },
    markerColor: {
      description: 'color of the notification marker',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
  },
};

const TemplateNotificationMenus = ({ color = undefined, ...rest }) => {
  const list = [
    {
      action: () => {},
      icon: 'chat',
      showMarker: true,
    },
    {
      action: () => {},
      icon: 'notification_empty',
      showMarker: true,
    },
    {
      action: () => {},
      icon: 'calendar',
      showMarker: true,
    },
  ];

  return <NotificationMenu color={color} menuList={list} {...rest} />;
};

export const Example = TemplateNotificationMenus;
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
  markerColor: undefined,
  size: undefined,
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('NotificationMenu', Example);
}
