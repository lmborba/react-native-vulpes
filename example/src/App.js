// if you use expo remove this line
import { withKnobs } from '@storybook/addon-knobs';
import {
  addDecorator,
  configure,
  getStorybookUI,
} from '@storybook/react-native';
import { AppRegistry } from 'react-native';
import React from 'react';
import { VulpesProvider } from '../../src';
import { name as appName } from '../app.json';
import './rn-addons';
import stories from './stories';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => stories, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.

const StorybookVulpesUIRoot = () => (
  <VulpesProvider theme={'gogood'}>
    <StorybookUIRoot />
  </VulpesProvider>
);

AppRegistry.registerComponent(appName, () => StorybookVulpesUIRoot);

export default StorybookVulpesUIRoot;
