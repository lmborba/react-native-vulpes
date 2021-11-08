import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import image from '../../assets/images/header.png';
import { Colors } from '../colors';
import { Fonts } from '../fonts';
import { Button } from './button';
import { Icon } from './icon';
import { NotificationMenu } from './notification_menu';
import { Text } from './text';
import { H2, Regular } from './typos';
import { FillSpace } from './utils';

const topHeaderContainer = {
  flexDirection: 'row',
  position: 'absolute',
  marginTop: 24,
  marginLeft: 16,
  marginRight: 16,
  height: 44,
  flex: 1,
  width: '100%',
  alignItems: 'center',
};

const BackAction = ({ backAction }) => {
  if (!backAction) return null;

  const backButtonStyle = {
    height: 36,
    justifyContent: 'center',
    width: 40,
  };
  return (
    <TouchableOpacity onPress={() => backAction()} style={backButtonStyle}>
      <Icon name="long_arrow_left" color="white" size={22} />
    </TouchableOpacity>
  );
};

const AdvanceActionButton = ({ advanceAction, advanceText }) => {
  if (!advanceAction) return null;
  return (
    <Button color="white" ghost onPress={advanceAction}>
      <Text style={{ ...Fonts.regular, color: Colors.white }}>
        {advanceText}
      </Text>
    </Button>
  );
};

const HeaderTitleLine = ({ title }) => {
  if (!title) return null;

  return <H2 color={'white'}>{title}</H2>;
};

const HeaderSubtitleLine = ({ subtitle }) => {
  if (!subtitle) return null;

  return <Regular color={'white'}>{subtitle}</Regular>;
};

const DummyHeader = () => {
  const style = { height: 64 };
  return <View style={style} />;
};

const ContentComponent = ({ component }) => {
  if (!component) return <DummyHeader />;

  return <View>{component}</View>;
};

export class Header extends Component {
  render() {
    const {
      backAction,
      menuList,
      advanceAction,
      advanceText,
      contentComponent,
      title,
      subtitle,
    } = this.props;
    return (
      <View>
        <ImageBackground source={image} style={this.headerStyle()}>
          <ContentComponent component={contentComponent} />
          <HeaderTitleLine title={title} />
          <HeaderSubtitleLine subtitle={subtitle} />
          <View style={this.styleImage()} />

          <View style={topHeaderContainer}>
            <BackAction backAction={backAction} />
            <FillSpace />
            <NotificationMenu menuList={menuList} />
            <AdvanceActionButton {...{ advanceAction, advanceText }} />
          </View>
        </ImageBackground>
      </View>
    );
  }

  styleImage() {
    return { marginBottom: 64 };
  }

  notchDifference() {
    if (DeviceInfo.hasNotch()) return 21;
    return 0;
  }

  titleDiference() {
    if (!this.props.title && !this.props.advanceAction) return 0;
    return 16 + 16 + 33;
  }

  headerStyle() {
    return {
      minHeight: 90 + this.notchDifference() + this.titleDiference(),
      paddingTop: 24 + this.notchDifference(),
      paddingLeft: 16,
      paddingRight: 16,
    };
  }
}
Header.displayName = 'Header';
