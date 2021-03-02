import { NativeModules } from 'react-native';
import { Colors } from './colors';
import { Button } from './components/button';
import { Card, TicketCard } from './components/card';
import { Carousel } from './components/carousel';
import { GradientView } from './components/gradient_view';
import { Header } from './components/header';
import { Icon } from './components/icon';
import { Content, Page } from './components/page_content';
import { SelectInput, SelectItem } from './components/select_input';
import { Text } from './components/text';
import { TextInput } from './components/text_input';
import { Thumbnail } from './components/thumbnail';
import { List, ListItem } from './components/list';
import { Modal } from './components/modal';
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
  TextInput,
  SelectInput,
  SelectItem,
  Header,
  Page,
  Content,
  Card,
  Thumbnail,
  TicketCard,
  Carousel,
  Modal,
  List,
  ListItem,
};

const { Vulpes } = NativeModules;

export default Vulpes;
