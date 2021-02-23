import { NativeModules } from 'react-native';
import { Colors } from './colors';
import { Button } from './components/button';
import { GradientView } from './components/gradient_view';
import { Icon } from './components/icon';
import { Text } from './components/text';
import {
  BodyLarge,
  BodyLargeBold,
  H1,
  H2,
  H3,
  H4,
  Placeholder,
  PlaceholderBold,
  Regular,
  RegularBold,
  Small,
  Small2,
  SmallBold,
} from './components/typos';
import { Fonts } from './fonts';

export {
  Colors,
  Text,
  Fonts,
  GradientView,
  H1,
  H2,
  H3,
  H4,
  BodyLarge,
  BodyLargeBold,
  Placeholder,
  PlaceholderBold,
  Regular,
  RegularBold,
  Small,
  Small2,
  SmallBold,
  Icon,
  Button,
};

const { Vulpes } = NativeModules;

export default Vulpes;
