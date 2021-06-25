import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import { Colors, H1, Tab, Tabs } from 'react-native-vulpes';

const colorList = () => {
  var keys = [undefined];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

export default {
  title: 'Example/Tab',
  component: Tab,
};

const TemplateTab = ({
  color = undefined,
  outline = undefined,
  light = undefined,
  icon = 'like_empty',
  ...rest
}) => {
  const [current, setTab] = useState(0);
  const defineTab = (newLevel) => setTab(() => newLevel);
  return (
    <Tabs onChangeTab={defineTab} current={current}>
      <Tab title="Todos">
        <H1>Aba 1</H1>
      </Tab>
      <Tab title="Inclusos no plano">
        <H1>Aba 2</H1>
        <TouchableOpacity onPress={() => defineTab(0)}>
          Testando
        </TouchableOpacity>
      </Tab>
    </Tabs>
  );
};

export const Example = TemplateTab.bind({});
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
  outline: false,
  light: false,
  icon: 'like_empty',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Tab', TemplateTab, Example.args);
}
