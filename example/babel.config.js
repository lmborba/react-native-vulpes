const path = require('path');
const pak = require('../package.json');

module.exports = {
  presets: ['module:metro-react-native-babel-preset', "@babel/preset-flow", "@babel/preset-typescript"],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          [pak.name]: path.join(__dirname, '..', pak.source),
          assets: path.join(__dirname, '..', 'assets'),
        },
      },
    ],
  ],
};
