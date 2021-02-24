const path = require('path');

module.exports = {
  stories: ['../src/stories/**/*.stories.js'],
  addons: [
    'storybook-addon-jsx',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
      'react-native-svg$': 'react-native-svg-web',
      'react-native-linear-gradient$': 'react-native-web-linear-gradient',
      '@storybook/react-native$': '@storybook/react',
    };
    config.resolve.extensions = ['.web.js', '.js', '.json'];
    config.module.rules[0].use[0].options.plugins.push([
      'babel-plugin-react-native-web',
      {commonjs: true },
    ]);
    config.module.rules[0].include.push(
      path.resolve('../src/')
    );
    return config;
  },
};
