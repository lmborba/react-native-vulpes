import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import image from '../../assets/images/header.png';
import { Icon } from './icon';

export class Header extends Component {
  render() {
    const { backAction } = this.props;
    return (
      <View>
        <ImageBackground source={image} style={this.headerStyle()}>
          {backAction && (
            <TouchableOpacity
              onPress={this.handleBackButton.bind(this)}
              style={this.backButtonStyle()}
            >
              <Icon name="long_arrow_left" color="white" size={18} />
            </TouchableOpacity>
          )}
        </ImageBackground>
      </View>
    );
  }

  backButtonStyle() {
    return {
      width: 18,
    };
  }

  notchDifference() {
    if (DeviceInfo.hasNotch()) return 21;
    return 0;
  }

  headerStyle() {
    return {
      height: 90 + this.notchDifference(),
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
