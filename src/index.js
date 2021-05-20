import { NativeModules } from 'react-native';
import { Colors } from './colors';
import { Button } from './components/button';
import {
  Card,
  MiniProfileCard,
  ProfileCard,
  TicketCard,
} from './components/card';
import { Carousel } from './components/carousel';
import { Divider } from './components/divider';
import { GradientView } from './components/gradient_view';
import { Header } from './components/header';
import { Icon } from './components/icon';
import { List, ListItem } from './components/list';
import { Modal } from './components/modal';
import { Content, ContentList, Page } from './components/page_content';
import { SelectInput, SelectItem } from './components/select_input';
import { Tag } from './components/tag';
import { Text } from './components/text';
import { TextInput } from './components/text_input';
import { SearchInput } from './components/search_input';
import { Thumbnail } from './components/thumbnail';
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
  Divider,
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
  SearchInput,
  SelectInput,
  SelectItem,
  Header,
  Page,
  Content,
  MiniProfileCard,
  ContentList,
  Card,
  Thumbnail,
  TicketCard,
  ProfileCard,
  Carousel,
  Modal,
  List,
  ListItem,
  Tag,
};

const { Vulpes } = NativeModules;

export default Vulpes;
