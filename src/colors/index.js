import functional from './functional';
// import gradient from './gradient';
// import neutral from './neutral';
// import primary from './primary';
// import secondary from './secondary';

const primary = {
  cyan: '#01C6E1',
  dark_cyan: '#01A3B9',
  light_cyan: '#74DFEE',
};

const secondary = {
  blue: '#0092D9',
  dark_blue: '#0078B2',
  light_blue: '#73C3EA',

  green: '#00C7A2',
  dark_green: '#00A385',
  light_green: '#73E0CC',

  orange: '#FF7716',
  dark_orange: '#D16213',
  light_orange: '#FFB47F',

  purple: '#9965FF',
  dark_purple: '#7E53D1',
  light_purple: '#C7ABFF',

  pink: '#FF4A82',
  dark_pink: '#D13D6B',
  light_pink: '#FF9CBA',

  red: '#FF4949',
  dark_red: '#E02323',
  light_red: '#FA7373',

  yellow: '#FFC700',
  dark_yellow: '#DD9200',
  light_yellow: '#FFE073',

  transparent: 'transparent',
};

const neutral = {
  black: '#000000',
  white: '#FFFFFF',
  gray: '#919191',
  light_gray: '#DCDCDC',
  dark_gray: '#383838',
};

const gradient = {
  gradient_blue: 'linear-gradient(45deg, #0092D9 0%, #00357C 100%)',
  gradient_cyan: 'linear-gradient(45deg, #01C6E1 0%, #0092D9 100%)',
  gradient_green: 'linear-gradient(46deg, #00C7A2 0%, #01A3B9 100%)',
  gradient_orange: 'linear-gradient(45deg, #FF7716 0%, #D13D6B 100%)',
  gradient_pink: 'linear-gradient(46deg, #FF4A82 0%, #E02323 100%)',
  gradient_purple: 'linear-gradient(46deg, #9965FF 0%, #0078B2 100%)',
  gradient_red: 'linear-gradient(45deg, #E02323 0%, #FA7373 100%)',
};

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

const dasaPrimary = {
  cyan: '#6BFFFA', // aqua
  dark_cyan: '#008C87', // dark_cyan
  light_cyan: '#00B3AD', //  light_sea_green
};

const dasaSecondary = {
  blue: '#1888FF', // bleu_de_france
  dark_blue: '#0057B5', // saphire
  light_blue: '#6AB2FF', // french_sky_blue

  green: '#2DA853', // green.30
  dark_green: '#145528', // green.10
  light_green: '#8AE3A5', // green.60

  orange: '#FF7E38', // coolors.mango_tango
  dark_orange: '#B03D00', // coolors.rust
  light_orange: '#FFB289', // coolors.light_salmon

  purple: '#9818D9', // purple.30
  dark_purple: '#610F8A', // purple.10
  light_purple: '#DB9EFA', // purple.60

  pink: '#FF0DB2', // coolors.shocking_pink,
  dark_pink: '#980068', // coolors.flirt
  light_pink: '#FF65CE', // coolors.rose_pink

  red: '#C62336', // red.30
  dark_red: '#960012', // red.10
  light_red: '#FF96A2', // red.60

  yellow: '#FFDD00', // coolors.golden_yellow
  dark_yellow: '#C9AE00', // coolors.old_gold
  light_yellow: '#FFEA64', // coolors.corn

  transparent: 'transparent',
};

const dasaNeutral = {
  black: '#161616', // black
  white: '#FEFEFE', // white
  gray: '#606060', // gray.40
  light_gray: '#B6B6B6', // gray.50
  dark_gray: '#4B4B4B', // gray.30
};

const dasaGradient = {
  gradient_blue: 'linear-gradient(45deg, #0092D9 0%, #00357C 100%)',
  gradient_cyan: 'linear-gradient(45deg, #01C6E1 0%, #0092D9 100%)',
  gradient_green: 'linear-gradient(46deg, #00C7A2 0%, #01A3B9 100%)',
  gradient_orange: 'linear-gradient(45deg, #FF7716 0%, #D13D6B 100%)',
  gradient_pink: 'linear-gradient(46deg, #FF4A82 0%, #E02323 100%)',
  gradient_purple: 'linear-gradient(46deg, #9965FF 0%, #0078B2 100%)',
  gradient_red: 'linear-gradient(45deg, #E02323 0%, #FA7373 100%)',
};

const ThematicColors = {
  gogood: {
    ...primary,
    ...secondary,
    ...neutral,
    ...functional,
    ...gradient,
  },
  dasa: {
    ...dasaPrimary,
    ...dasaSecondary,
    ...dasaNeutral,
    // white: '#FFD700',
    ...functional,
    // success: '#0000ff', // toast test
    ...dasaGradient,
    // dark_gray: '#0000ff',
    // black: '#0000ff',
    // light_gray: '#ff0000',
    // red: '#00ff00',
  },
};

const getColors = (theme) => {
  return ThematicColors[theme || 'gogood'];
};

export { Colors, getColors };
