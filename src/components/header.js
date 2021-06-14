import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import image from '../../assets/images/header.png';
import { Icon } from './icon';
import { NotificationMenu } from './notification_menu';
import { H2, Regular } from './typos';
import { FillSpace } from './utils';

const headerSubtitleStyle = { marginBottom: 52 };

const topHeaderContainer = { flexDirection: 'row' };
export class Header extends Component {
  render() {
    const { backAction, menuList } = this.props;
    return (
      <View>
        <ImageBackground source={image} style={this.headerStyle()}>
          <View style={topHeaderContainer}>
            {backAction && (
              <TouchableOpacity
                onPress={this.handleBackButton.bind(this)}
                style={this.backButtonStyle()}
              >
                <Icon name="long_arrow_left" color="white" size={18} />
              </TouchableOpacity>
            )}
            <FillSpace />
            {menuList && <NotificationMenu menuList={menuList} />}
          </View>
          {this.mainTitle(this.props.title)}
          {this.mainSubtitle(this.props.subtitle)}
        </ImageBackground>
      </View>
    );
  }

  mainTitle(title) {
    if (!title) return null;
    const style = { marginTop: 24 };
    return (
      <H2 style={style} color={'white'}>
        {title}
      </H2>
    );
  }

  mainSubtitle(title) {
    if (!title) return null;
    return (
      <Regular color={'white'} style={headerSubtitleStyle}>
        {title}
      </Regular>
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
    if (!this.props.title) return 0;
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
