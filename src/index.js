import { NativeModules } from 'react-native';
import { Colors, colorList, getColors } from './colors';
import { Accordion, AccordionItem } from './components/accordion';
import { ActionSheet, openActionSheet } from './components/action_sheet';
import { Button, ToggleButton } from './components/button';
import {
  BannerCard,
  Card,
  CardActions,
  IllustrationMiniCard,
  MiniProfileCard,
  ProfileCard,
  TicketCard,
  TicketCheckinCard,
  TicketProfileCard,
} from './components/card';
import { Carousel } from './components/carousel';
import {
  BarChart,
  EmptyChart,
  PieChart,
  StackChart,
} from './components/charts';
import { CheckboxInput } from './components/checkbox_input';
import { Checkbox } from './components/checkbox';
import { CircularProgress } from './components/circular_progress';
import { Divider } from './components/divider';
import { GradientView } from './components/gradient_view';
import { Header } from './components/header';
import { Icon } from './components/icon';
import { LeftMenu, LeftMenuItem } from './components/left_menu';
import { List, ListItem } from './components/list';
import { Menu, MenuItem } from './components/menu';
import { Modal } from './components/modal';
import { ModalHelper } from './components/modal_helper';
import { ModalContainer } from './components/modal_container';
import { NotificationIcon } from './components/notification_icon';
import { NotificationMenu } from './components/notification_menu';
import {
  BackgroundPage,
  Content,
  ContentList,
  ContentView,
  Page,
} from './components/page_content';
import { PaginationBullets } from './components/pagination_bullets';
import { QRCodeShow } from './components/qr_code';
import { SearchInput } from './components/search_input';
import { SelectInput, SelectItem } from './components/select_input';
import { SnapCarousel } from './components/snap_carousel';
import { Spinner } from './components/spinner';
import { Row, Table } from './components/table';
import { Tab, Tabs } from './components/tabs';
import { Tag } from './components/tag';
import { Text } from './components/text';
import { TextInput } from './components/text_input';
import { Thumbnail } from './components/thumbnail';
import { Toast } from './components/toast';
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
  Subtitle,
} from './components/typos';
import { FillSpace, PaddedView } from './components/utils';
import { Fonts } from './fonts';

import VulpesContext from './contexts/VulpesContext';
import VulpesProvider from './providers/VulpesProvider';
import useVulpes from './hooks/useVulpes';

export {
  PaginationBullets,
  Spinner,
  Menu,
  MenuItem,
  LeftMenu,
  LeftMenuItem,
  BannerCard,
  ActionSheet,
  openActionSheet,
  Colors,
  colorList,
  getColors,
  Text,
  Fonts,
  GradientView,
  FillSpace,
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
  RegularBold,
  Small,
  Small2,
  SmallBold,
  QRCodeShow,
  Icon,
  Button,
  Subtitle,
  TicketProfileCard,
  TicketCheckinCard,
  NotificationMenu,
  Tabs,
  Tab,
  TextInput,
  CheckboxInput,
  Checkbox,
  SelectInput,
  BackgroundPage,
  SearchInput,
  SelectItem,
  Header,
  Page,
  Content,
  MiniProfileCard,
  ContentList,
  ContentView,
  Card,
  CardActions,
  Thumbnail,
  NotificationIcon,
  TicketCard,
  BarChart,
  PieChart,
  StackChart,
  EmptyChart,
  ProfileCard,
  Carousel,
  SnapCarousel,
  Modal,
  ModalHelper,
  ModalContainer,
  IllustrationMiniCard,
  List,
  ListItem,
  Accordion,
  AccordionItem,
  Tag,
  Toast,
  ToggleButton,
  CircularProgress,
  Table,
  Row,
  VulpesContext,
  VulpesProvider,
  useVulpes,
};

const { Vulpes } = NativeModules;

export default Vulpes;
