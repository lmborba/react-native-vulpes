import functional from './functional';
import gradient from './gradient';
import neutral from './neutral';
import primary from './primary';
import secondary from './secondary';

const Colors = {
  ...primary,
  ...secondary,
  ...neutral,
  ...functional,
  ...gradient,
};

Object.keys(Colors).forEach((c) => {
  Colors[Colors[c]] = Colors[c];
});

const ThematicColors = {
  gogood: {
    ...primary,
    ...secondary,
    ...neutral,
    ...functional,
    ...gradient,
  },
  dasa: {
    ...primary,
    ...secondary,
    ...neutral,
    ...functional,
    ...gradient,
  },
};

const getColors = (theme) => {
  return ThematicColors[theme || 'gogood'];
};

export { Colors, getColors };
