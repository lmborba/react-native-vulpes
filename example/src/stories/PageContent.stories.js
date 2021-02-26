import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Page, Content, Header, H4 } from 'react-native-vulpes';

const mobileStyleWidget = { maxWidth: 320 };
export default {
  title: 'Example/PageContent',
  component: Page,
  argTypes: {
    backAction: {
      description: 'an action to be executed when the back button is clicked',
      control: 'fn',
    },
  },
  decorators: [
    (Story) => (
      <View style={mobileStyleWidget}>
        <Story />
      </View>
    ),
  ],
};

const backActionExample = () => {
  console.warn('BACK ACTION');
};

const TemplatePageContent = ({ backAction = backActionExample, ...rest }) => (
  <Page>
    <Header backAction={backAction} {...rest} />
    <Content>
      <H4>Página de teste</H4>
    </Content>
  </Page>
);

export const Example = TemplatePageContent.bind({});
Example.args = {
  backAction: backActionExample,
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('PageContent', TemplatePageContent, Example.args);
}
