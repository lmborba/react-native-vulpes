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

export { Colors };
