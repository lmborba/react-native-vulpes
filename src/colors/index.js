import functional, { functionalDasa } from './functional';
import gradient from './gradient';
import neutral, { neutralDasa } from './neutral';
import primary, { primaryDasa } from './primary';
import secondary, { secondaryDasa } from './secondary';

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
    ...primaryDasa,
    ...secondaryDasa,
    ...neutralDasa,
    ...functionalDasa,
    ...gradient,
  },
};

const getColors = (theme) => {
  return ThematicColors[theme || 'gogood'];
};

export { Colors, getColors };
