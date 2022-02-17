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
    config.resolve.extensions = ['.web.js', '.js', '.json', '.ts', '.tsx'];
    config.module.rules[0].use[0].options.plugins.push([
      'babel-plugin-react-native-web',
      { commonjs: true },
    ]);
    config.module.rules[0].include.push(path.resolve('../src/'));
    config.module.rules[1].test = /\.(mjs|tsx?|jsx?)$/;
    config.module.rules[1].include =
      /[\\/]node_modules[\\/](@storybook\/node-logger|react-native-dash|react-native-sideswipe|react-native-qrcode-svg|are-you-es5|better-opn|boxen|chalk|commander|find-cache-dir|find-up|fs-extra|json5|node-fetch|pkg-dir|resolve-from|semver|react-native-gifted-charts|react-native-webview)/;

    return config;
  },
};
