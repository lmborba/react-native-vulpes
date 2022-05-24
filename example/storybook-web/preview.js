import React from 'react';
import { useState, useEffect } from 'react';
import VulpesProvider from '../../src/providers/VulpesProvider';
const { addDecorator } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'gogood',
    toolbar: {
      icon: 'circlehollow',
      items: ['gogood', 'dasa'],
      showName: true,
      dynamicTitle: true,
    },
  },
};

const VulpesDecorator = (storyFn, context) => {
  const { theme } = context.globals;
  return <VulpesProvider {...{ theme }}>{storyFn()}</VulpesProvider>;
};

addDecorator(VulpesDecorator);
addDecorator(jsxDecorator);
