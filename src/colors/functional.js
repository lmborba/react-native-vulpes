import secondary from './secondary';

const functional = (from, toType, toColor) => ({
  [from]: toType[toColor],
  ['dark_' + from]: toType['dark_' + toColor],
  ['light_' + from]: toType['light_' + toColor],
});

export default {
  ...functional('success', secondary, 'green'),
  ...functional('error', secondary, 'red'),
  ...functional('alert', secondary, 'yellow'),
};
