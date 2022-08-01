import React, { Component } from 'react';
import { Image, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { getColors } from '../colors';
import VulpesContext from '../contexts/VulpesContext';

const qrCodeContainer = { flexDirection: 'column', flex: 1 };
const qrCodeInnerContainer = { flex: 1, flexDirection: 'row' };
export class QRCodeValid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 100,
      height: 100,
    };
  }

  render() {
    const { logo, image, code, color } = this.props;
    const { width, height } = this.state;
    const { theme } = this.context;
    const colors = getColors(theme);
    const defSize = Math.min(width, height);
    return (
      <View style={qrCodeContainer}>
        <View
          style={qrCodeInnerContainer}
          onLayout={this.layoutHandler.bind(this)}
        >
          <QRCode
            value={code}
            color={colors(color)}
            ecl={'H'}
            size={defSize}
            logoMargin={2}
            logo={logo}
            logoSize={defSize * 0.3}
            logoBackgroundColor="white"
            logoBorderRadius={100}
          />
        </View>
        {image && (
          <Image source={image} style={this.qrCodeUsedImage(defSize)} />
        )}
      </View>
    );
  }

  qrCodeUsedImage(defSize) {
    const logoSize = (56 * defSize) / 100;
    const marginSize = (22 * defSize) / 100;
    return {
      position: 'absolute',
      width: logoSize,
      height: logoSize,
      margin: marginSize,
    };
  }

  layoutHandler(event) {
    var { width, height } = event.nativeEvent.layout;
    this.setState({ width: width, height: height });
  }
}

QRCodeValid.contextType = VulpesContext;

const confirmed = require('../../assets/images/qr_code_used.png');

export const QRCodeShow = ({ logo, color, code, used, ...restProps }) => {
  if (!code) return null;
  if (used) {
    return <QRCodeValid code={code} color={'gray.40'} image={confirmed} />;
  } else {
    return <QRCodeValid code={code} color={color} logo={logo} />;
  }
};
