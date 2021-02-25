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
import { TextInput } from './components/text_input';
import { SelectInput, SelectItem } from './components/select_input';

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
  TextInput,
  SelectInput,
  SelectItem,
};

const { Vulpes } = NativeModules;

export default Vulpes;
