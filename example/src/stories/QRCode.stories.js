import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Colors, QRCodeShow } from 'react-native-vulpes';
const exampleImage = require('../images/transparentLogo.png');

const imageList = () => {
  return [
    exampleImage,
    'static/media/thumb.5ebfbd91.png',
    'https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/26/44/72/2644724f-d58e-3097-9f6c-da427946c99e/source/60x60bb.jpg',
    undefined,
  ];
};

const colorList = () => {
  var keys = [];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};
export default {
  title: 'Example/QRCodes',
  component: QRCodeShow,
  argTypes: {
    color: {
      description: 'color for the QRCode',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    code: {
      description: 'QRCode to be used',
      control: {
        type: 'text',
      },
    },
    used: {
      description: 'if the code has already been used',
      control: {
        type: 'boolean',
      },
    },
    source: {
      description: 'source for profile image',
      control: {
        type: 'select',
        options: imageList(),
      },
    },
  },
};
const qrCodeSize = { width: 400, height: 400 };
const TemplateQRCodes = ({
  color = undefined,
  code = 'menu',
  used,
  source,
  ...rest
}) => {
  return (
    <View style={qrCodeSize}>
      <QRCodeShow
        code={code}
        color={color}
        used={used}
        logo={source}
        {...rest}
      />
    </View>
  );
};
export const Example = TemplateQRCodes;
Example.argTypes = {
  color: {
    description: 'color for the text',
    control: {
      type: 'select',
      options: colorList(),
    },
  },
};
Example.args = {
  color: undefined,
  code: 'menu',
  used: false,
  source: 'static/media/thumb.5ebfbd91.png',
};
if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));
  fillStories.add('QRCode', Example);
}
