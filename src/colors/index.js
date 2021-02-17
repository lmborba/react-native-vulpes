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

export { Colors };
