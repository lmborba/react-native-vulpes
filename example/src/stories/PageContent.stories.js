import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Content, H4, Header, Page } from 'react-native-vulpes';

export default {
  title: 'Example/PageContent',
  component: Page,
  argTypes: {
    backAction: {
      description: 'an action to be executed when the back button is clicked',
      control: 'fn',
    },
  },
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

const TemplatePageContentTitle = ({
  backAction = backActionExample,
  ...rest
}) => (
  <Page>
    <Header backAction={backAction} {...rest} title={'Título principal'} />
    <Content />
  </Page>
);

export const Example = TemplatePageContent.bind({});
Example.args = {
  backAction: backActionExample,
};

export const Example2 = TemplatePageContentTitle.bind({});
Example2.args = {
  backAction: backActionExample,
  title: 'Titulo principal',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('PageContent', TemplatePageContent, Example.args);
  fillStories.add('PageContent', TemplatePageContentTitle, Example2.args);
}
