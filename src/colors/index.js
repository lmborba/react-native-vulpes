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

const mappedColors = {
  gogood: {
    singleton: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
      default: '#383838', // dark_gray
    },
    primary: {
      20: '#CCF4F9',
      40: '#67DDED',
      60: '#34D1E7',
      80: '#01C6E1', // cyan
      100: '#01C6E1',
      110: '#01A3B9', // dark_cyan
    },
    secondary: {
      20: '#CCE9F7',
      40: '#99D3F0',
      60: '#66BEE8',
      80: '#33A8E1',
      100: '#0092D9', // blue
      110: '#0078B2', // dark_blue
    },
    // orange
    comp1: {
      20: '#FFE4D0',
      40: '#FFC9A2',
      60: '#FFAD73',
      80: '#FF9245',
      100: '#FF7716', // orange
      110: '#D16213', // dark_orange
    },
    // purple
    comp2: {
      20: '#EBE0FF',
      40: '#D6C1FF',
      60: '#C2A3FF',
      80: '#AD84FF',
      100: '#9965FF', // purple
      110: '#7E53D1', // dark_purple
    },
    // marinho
    comp3: {
      20: '#CCD7E5',
      40: '#99AECB',
      60: '#6686B0',
      80: '#335D96',
      100: '#00357C',
      110: '#002C66',
    },
    // pink
    comp4: {
      20: '#FFDBE6',
      40: '#FFB7CD',
      60: '#FF92B4',
      80: '#FF6E9B',
      100: '#FF4A82', // pink
      110: '#D13D6B', // dark_pink
    },
    success: {
      20: '#CCF4EC',
      40: '#99E9DA',
      60: '#66DDC7',
      80: '#33D2B5',
      100: '#00C7A2', // green
      110: '#00A385', // dark_green
    },
    error: {
      20: '#FFDBDB',
      40: '#FFB6B6',
      60: '#FF9292',
      80: '#FF6D6D',
      100: '#FF4949', // red
      110: '#E02323', // dark_red
    },
    alert: {
      20: '#FFF4CC',
      40: '#FFE999',
      60: '#FFDD66',
      80: '#FFD233',
      100: '#FFC700', // yellow
      110: '#DD9200', // dark_yellow
    },
    gray: {
      3: '#F9F9F9',
      20: '#E8E8E8',
      40: '#D9D9D9', // light_gray (dev defined)
      60: '#878787',
      80: '#606060', // gray (dev defined)
      100: '#383838', // dark_gray
      110: '#232323',
    },
    gradient: {
      cyan: 'linear-gradient(90.9deg, #01C6E1 0%, #0092D9 100%)',
      blue: 'linear-gradient(270.9deg, #00357C 0%, #0078B2 100%)',
      green: 'linear-gradient(90.9deg, #00C7A2 0%, #01A3B9 100%)',
      pink: 'linear-gradient(90.9deg, #FF4A82 0%, #E02323 100%)',
      purple: 'linear-gradient(90.9deg, #9965FF 0%, #0078B2 100%)',
    },
  },
  dasa: {
    singleton: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
      default: '#383838', // dark_gray
    },
    // dasa blue
    primary: {
      110: '#002199',
      100: '#0028B8',
      80: '#002FDA',
      60: '#0037FF',
      40: '#6D8DFF',
      20: '#A0B5FF',
    },
    // dasa light blue
    secondary: {
      110: '#0078B2',
      100: '#0092D9',
      80: '#33A8E1',
      60: '#66BEE8',
      40: '#99D3F0',
      20: '#CCE9F7',
    },
    // brown
    comp1: {
      110: '#AF6511',
      100: '#B36E14',
      80: '#BC8131',
      60: '#C39556',
      40: '#D1B287',
      20: '#E3D0B5',
    },
    // purple
    comp2: {
      110: '#9818D9',
      100: '#A93BDF',
      80: '#C871F4',
      60: '#DB9EFA',
      40: '#EFD0FF',
      20: '#FAF0FF',
    },
    // yellow green
    comp3: {
      110: '#D0E800',
      100: '#D9F800',
      80: '#E0FC38',
      60: '#E8FF66',
      40: '#ECFC92',
      20: '#F5FDBF',
    },
    comp4: {
      110: '#D13D6B',
      100: '#FF4A82',
      80: '#FF6E9B',
      60: '#FF92B4',
      40: '#FFB7CD',
      20: '#FFDBE6',
    },
    success: {
      110: '#2DA853',
      100: '#38BA5F',
      80: '#59D37E',
      60: '#8AE3A5',
      40: '#C9EFD5',
      20: '#EAF9EF',
    },
    error: {
      110: '#F04432',
      100: '#FF4E33',
      80: '#F95B4F',
      60: '#EE7973',
      40: '#F69F9B',
      20: '#FFD0D3',
    },
    alert: {
      110: '#E6B319',
      100: '#EBC247',
      80: '#F0D275',
      60: '#F5E1A3',
      40: '#FAF0D1',
      20: '#FDF8E8',
    },
    gray: {
      110: '#161616',
      100: '#323232',
      80: '#606060',
      60: '#B6B6B6',
      40: '#CCCCCC',
      20: '#E9E9E9',
      3: '#F4F4F4',
    },
    gradient: {
      cyan: 'linear-gradient(90.9deg, #ABE6FF 0%, #0037FF 100%)',
      blue: 'linear-gradient(270.9deg, #0028B8 0%, #0037FF 100%)',
      green: 'linear-gradient(90.9deg, #00C7A2 0%, #01A3B9 100%)',
      pink: 'linear-gradient(90.9deg, #EE7973 0%, #FF4F33 100%);',
      purple: 'linear-gradient(90.9deg, #A93BDF 0%, #0078B2 100%);',
    },
  },
  // todo: sesi color scheme
  sesi: {
    singleton: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
      default: '#0000ff',
    },
    purple: {
      20: '#E2D6F4',
      40: '#CCB3EE', // light_gray (dev defined)
      60: '#B591E9',
      80: '#884BDE', // gray (dev defined)
      100: '#5A3192', // dark_gray
      110: '#321C52',
    },
    blue: {
      20: '#D1E7F1',
      40: '#A9D5EA',
      60: '#82C3E2',
      80: '#329FD3',
      100: '#1669AB',
      110: '#0E416B',
    },
    green: {
      20: '#DDF0D4',
      40: '#C0E6AE',
      60: '#A4DD89',
      80: '#6ECF40',
      100: '#39B540',
      110: '#247528',
    },
    pink: {
      20: '#EAD9EE',
      40: '#DBBAE4',
      60: '#CC9AD9',
      80: '#AE5AC3',
      100: '#73428D',
      110: '#3E244D',
    },
    primary: {
      20: '#CCF4F9',
      40: '#67DDED',
      60: '#34D1E7',
      80: '#01C6E1', // cyan
      100: '#01C6E1',
      110: '#01A3B9', // dark_cyan
    },
    secondary: {
      20: '#CCE9F7',
      40: '#99D3F0',
      60: '#66BEE8',
      80: '#33A8E1',
      100: '#0092D9', // blue
      110: '#0078B2', // dark_blue
    },
    // orange
    comp1: {
      20: '#FFE4D0',
      40: '#FFC9A2',
      60: '#FFAD73',
      80: '#FF9245',
      100: '#FF7716', // orange
      110: '#D16213', // dark_orange
    },
    // purple
    comp2: {
      20: '#EBE0FF',
      40: '#D6C1FF',
      60: '#C2A3FF',
      80: '#AD84FF',
      100: '#9965FF', // purple
      110: '#7E53D1', // dark_purple
    },
    // marinho
    comp3: {
      20: '#CCD7E5',
      40: '#99AECB',
      60: '#6686B0',
      80: '#335D96',
      100: '#00357C',
      110: '#002C66',
    },
    // pink
    comp4: {
      20: '#FFDBE6',
      40: '#FFB7CD',
      60: '#FF92B4',
      80: '#FF6E9B',
      100: '#FF4A82', // pink
      110: '#D13D6B', // dark_pink
    },
    success: {
      20: '#DDF0D4',
      40: '#C0E6AE',
      60: '#A4DD89',
      80: '#6ECF40',
      100: '#39B540',
      110: '#247528',
    },
    error: {
      20: '#FFDBDB',
      40: '#FFB6B6',
      60: '#FF9292',
      80: '#FF6D6D',
      100: '#FF4949', // red
      110: '#E02323', // dark_red
    },
    alert: {
      20: '#FFF4CC',
      40: '#FFE999',
      60: '#FFDD66',
      80: '#FFD233',
      100: '#FFC700', // yellow
      110: '#DD9200', // dark_yellow
    },
    gray: {
      3: '#F9F9F9',
      20: '#E8E8E8',
      40: '#D9D9D9', // light_gray (dev defined)
      60: '#878787',
      80: '#606060', // gray (dev defined)
      100: '#383838', // dark_gray
      110: '#232323',
    },
    gradient: {
      cyan: 'linear-gradient(90.9deg, #1669AB 0%, #73428D 100%)',
      blue: 'linear-gradient(90.9deg, #1669AB 0%, #73428D 100%)',
      green: 'linear-gradient(90.9deg, #1669AB 0%, #73428D 100%)',
      pink: 'linear-gradient(90.9deg, #1669AB 0%, #73428D 100%)',
      purple: 'linear-gradient(90.9deg, #1669AB 0%, #73428D 100%)',
    },
  },
};

const semanticTokens = {
  gogood: {
    btn: {
      regular: 'gray.100',
      disabled: 'gray.40',
    },
    bullet: {
      regular: 'primary.80',
    },
    btnRefer: {
      regular: 'gray.100',
    },
    text: {
      regular: 'gray.100',
      subtitle: 'gray.100',
    },
    tabBottom: {
      active: 'singleton.black',
      inactive: 'gray.60',
    },
    tag: {
      locked: 'gray.60',
      unlocked: 'gray.100',
      lockedText: 'singleton.white',
      unlockedText: 'singleton.white',
    },
  },
  dasa: {
    btn: {
      regular: 'primary.60',
      disabled: 'gray.40',
    },
    bullet: {
      regular: 'primary.60',
    },
    btnRefer: {
      regular: 'singleton.white',
    },
    text: {
      regular: 'gray.100',
      subtitle: 'gray.100',
    },
    tabBottom: {
      active: 'singleton.black',
      inactive: 'gray.60',
    },
    tag: {
      locked: 'gray.80',
      unlocked: 'gray.100',
      lockedText: 'singleton.white',
      unlockedText: 'singleton.white',
    },
  },
  sesi: {
    btn: {
      regular: 'purple.80',
      disabled: 'gray.20',
    },
    bullet: {
      regular: 'purple.80',
    },
    btnRefer: {
      regular: 'singleton.white',
    },
    text: {
      regular: 'gray.100',
      subtitle: 'gray.60',
    },
    tabBottom: {
      active: 'purple.80',
      inactive: 'gray.60',
    },
    tag: {
      locked: 'gray.100',
      unlocked: 'purple.80',
      lockedText: 'singleton.white',
      unlockedText: 'singleton.white',
    },
  },
};

const colorList = (theme) => {
  const colors = mappedColors[theme || 'gogood'];
  return Object.keys(colors)
    .map((family) =>
      Object.keys(colors[family]).map((grade) => `${family}.${grade}`)
    )
    .flat();
};

const getColors = (theme) => {
  return (token) => {
    const colors = mappedColors[theme || 'gogood'];
    const defaultColor = colors.singleton.default;

    if (!token) return defaultColor;
    const [family, grade] = token.split('.');
    if (!family || !grade) return defaultColor;

    try {
      const color = colors[family][grade];
      return color;
    } catch {
      const semanticToken = semanticTokens[theme || 'gogood'][family][grade];
      const [mappedFamily, mappedGrade] = semanticToken.split('.');
      const color = colors[mappedFamily][mappedGrade];
      return color || defaultColor;
    }
  };
};

export { Colors, getColors, colorList };
