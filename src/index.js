import { NativeModules } from 'react-native';
import { Colors } from './colors';
import { Button, ToggleButton } from './components/button';
import {
  BannerCard,
  Card,
  CardActions,
  IllustrationMiniCard,
  MiniProfileCard,
  ProfileCard,
  TicketCard,
  TicketProfileCard,
} from './components/card';
import { Carousel } from './components/carousel';
import { CashbackProgress } from './components/cashback_progress';
import { Divider } from './components/divider';
import { GradientView } from './components/gradient_view';
import { Header } from './components/header';
import { Icon } from './components/icon';
import { List, ListItem } from './components/list';
import { Modal } from './components/modal';
import { ModalContainer } from './components/modal_container';
import { NotificationIcon } from './components/notification_icon';
import { NotificationMenu } from './components/notification_menu';
import { Content, ContentList, Page } from './components/page_content';
import { QRCodeShow } from './components/qr_code';
import { SearchInput } from './components/search_input';
import { SelectInput, SelectItem } from './components/select_input';
import { Tab, Tabs } from './components/tabs';
import { Tag } from './components/tag';
import { Text } from './components/text';
import { TextInput } from './components/text_input';
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
import { FillSpace, PaddedView } from './components/utils';
import { Fonts } from './fonts';

export {
  BannerCard,
  Colors,
  Text,
  Fonts,
  GradientView,
  H1,
  H2,
  H3,
  H4,
  Divider,
  PaddedView,
  BodyLarge,
  BodyLargeBold,
  Placeholder,
  PlaceholderBold,
  Regular,
  FillSpace,
  RegularBold,
  Small,
  QRCodeShow,
  Small2,
  SmallBold,
  Icon,
  Button,
  TicketProfileCard,
  NotificationMenu,
  Tabs,
  Tab,
  TextInput,
  SelectInput,
  SearchInput,
  SelectItem,
  Header,
  Page,
  Content,
  MiniProfileCard,
  ContentList,
  Card,
  CardActions,
  Thumbnail,
  NotificationIcon,
  TicketCard,
  ProfileCard,
  Carousel,
  Modal,
  ModalContainer,
  IllustrationMiniCard,
  List,
  ListItem,
  Tag,
  ToggleButton,
  CashbackProgress,
};

const { Vulpes } = NativeModules;

export default Vulpes;
