import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { getColors } from '../colors';
import { getFonts } from '../fonts';
import useVulpes from '../hooks/useVulpes';
import { Button } from './button';
import { Icon } from './icon';
import { NotificationMenu } from './notification_menu';
import { Text } from './text';
import { H2, Regular } from './typos';
import { FillSpace } from './utils';

const headers = {
  gogood: require('../../assets/images/header.png'),
  dasa: require('../../assets/images/header_dasa.png'),
  sesi: require('../../assets/images/header_sesi.png'),
};

const topHeaderContainer = {
  flexDirection: 'row',
  position: 'absolute',
  marginLeft: 8,
  marginRight: 8,
  height: 48,
  flex: 1,
  right: 0,
  left: 0,
  alignItems: 'center',
};

const BackAction = ({ backAction }) => {
  if (!backAction) return null;

  const backButtonStyle = {
    height: 36,
    justifyContent: 'center',
    width: 40,
    paddingLeft: 8,
  };
  return (
    <TouchableOpacity onPress={() => backAction()} style={backButtonStyle}>
      <Icon name="long_arrow_left" color="singleton.white" size={22} />
    </TouchableOpacity>
  );
};

const AdvanceActionButton = ({ advanceAction, advanceText }) => {
  const { theme } = useVulpes();
  const colors = getColors(theme);
  const fonts = getFonts(theme);
  if (!advanceAction) return null;
  return (
    <Button color={'singleton.white'} ghost onPress={advanceAction}>
      <Text style={{ ...fonts.regular, color: colors('singleton.white') }}>
        {advanceText}
      </Text>
    </Button>
  );
};

const helpContainer = { paddingLeft: 7 };
const titleLine = { flexDirection: 'row', alignItems: 'center' };

const HeaderTitleLine = ({ title, helpAction }) => {
  if (!title) return null;

  return (
    <View style={titleLine}>
      <H2 color={'singleton.white'}>{title}</H2>
      {helpAction && (
        <TouchableOpacity onPress={helpAction} style={helpContainer}>
          <Icon name={'help'} color={'singleton.white'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const HeaderSubtitleLine = ({ subtitle }) => {
  if (!subtitle) return null;

  return <Regular color={'singleton.white'}>{subtitle}</Regular>;
};

const HeaderTitles = ({ title, subtitle, helpAction }) => {
  if (!title && !subtitle) return null;

  const style = { marginTop: 24, marginBottom: 16 };
  return (
    <View style={style}>
      <HeaderTitleLine title={title} helpAction={helpAction} />
      <HeaderSubtitleLine subtitle={subtitle} />
    </View>
  );
};

const DummyHeader = () => {
  const style = { height: 48 };
  return <View style={style} />;
};

const DummyBottom = () => {
  const style = { height: 32 };
  return <View style={style} />;
};

const ContentComponent = ({ component }) => {
  if (!component) return <DummyHeader />;

  return component;
};

class HeaderComplete extends Component {
  imageBackground() {
    let { theme } = this.props;
    if (!theme || !headers[theme]) theme = 'gogood';
    return headers[theme];
  }

  render() {
    const {
      backAction,
      menuList,
      advanceAction,
      advanceText,
      contentComponent,
      title,
      subtitle,
      helpAction,
      imageStyle,
    } = this.props;
    return (
      <View>
        <ImageBackground
          source={this.imageBackground()}
          style={this.imageStyle()}
          imageStyle={imageStyle}
        >
          <View style={this.headerStyle()}>
            <ContentComponent component={contentComponent} />
            <HeaderTitles {...{ title, subtitle, helpAction }} />
            <DummyBottom />

            <View style={topHeaderContainer}>
              <BackAction backAction={backAction} />
              <FillSpace />
              <NotificationMenu menuList={menuList} />
              <AdvanceActionButton {...{ advanceAction, advanceText }} />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

  notchDifference() {
    if (DeviceInfo.hasNotch()) return 21;
    return 0;
  }

  imageStyle() {
    return {
      minHeight: 90,
    };
  }
  headerStyle() {
    return {
      marginTop: 12 + this.notchDifference(),
      paddingLeft: 16,
      paddingRight: 16,
    };
  }
}

export const Header = (props) => {
  const { theme } = useVulpes();
  return <HeaderComplete {...props} theme={theme} />;
};

Header.displayName = 'Header';
