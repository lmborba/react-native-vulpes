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

const headerSubtitleStyle = { marginBottom: 52, flex: 1 };

const topHeaderContainer = { flexDirection: 'row' };

const AdvanceActionButton = (props) => {
  console.log(props);
  return (
    <Button color="white" ghost>
      <Text style={{ ...Fonts.regular, color: Colors.white }}>
        {props.advanceText}
      </Text>
    </Button>
  );
};

const headerSubtitleContainer = { flexDirection: 'row' };
const advanceActionButtonStyle = { width: 100 };
const HeaderSubtitleLine = (props) => {
  const { subtitle, advanceAction, advanceText } = props;
  return (
    <>
      <View style={headerSubtitleContainer}>
        {subtitle ? (
          <Regular color={'white'} style={headerSubtitleStyle}>
            {subtitle}
          </Regular>
        ) : (
          <FillSpace />
        )}
        {advanceAction ? (
          <AdvanceActionButton
            style={advanceActionButtonStyle}
            {...{ advanceAction, advanceText }}
          />
        ) : null}
      </View>
    </>
  );
};

const mainTitleStyle = { marginTop: 46 };
export class Header extends Component {
  render() {
    const { backAction, menuList, advanceAction, advanceText } = this.props;
    return (
      <View>
        <ImageBackground source={image} style={this.headerStyle()}>
          <View style={topHeaderContainer}>
            {backAction && (
              <TouchableOpacity
                onPress={this.handleBackButton.bind(this)}
                style={this.backButtonStyle()}
              >
                <Icon name="long_arrow_left" color="white" size={22} />
              </TouchableOpacity>
            )}
            <FillSpace />
            {menuList && <NotificationMenu menuList={menuList} />}
          </View>
          {this.mainTitle(this.props.title)}
          <HeaderSubtitleLine
            subtitle={this.props.subtitle}
            {...{ advanceAction, advanceText }}
          />
        </ImageBackground>
      </View>
    );
  }

  mainTitle(title) {
    if (!title) {
      if (this.props.advanceAction) return <View style={mainTitleStyle} />;
      return null;
    }
    const style = { marginTop: 24 };
    return (
      <H2 style={style} color={'white'}>
        {title}
      </H2>
    );
  }

  backButtonStyle() {
    return {
      marginTop: -7,
      marginBottom: -7,
      height: 36,
      justifyContent: 'center',
      paddingLeft: 0,
      width: 36,
    };
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
  handleBackButton() {
    const { backAction } = this.props;
    backAction && backAction();
  }
}
Header.displayName = 'Header';
