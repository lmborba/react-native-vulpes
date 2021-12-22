import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Modal, Colors, Regular } from 'react-native-vulpes';

import image from './business.png';

const colorList = () => {
  var keys = [];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

const mobileStyleWidget = { maxWidth: 320 };
export default {
  title: 'Example/Modal',
  component: Modal,
  decorators: [(story) => <View style={mobileStyleWidget}>{story()}</View>],
  argTypes: {
    color: {
      description: 'color for the button',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
  },
};

const handleClose = (props) => {
  console.warn('Close');
};

const handleGoto = (props) => {
  console.warn('GoTo');
};

const TemplateGradientView = ({ ...rest }) => {
  return (
    <Modal
      title="Seu acesso às academias foi liberado!"
      onClose={handleClose}
      onGoto={handleGoto}
      image={image}
      gotoText={'Explorar academias do meu plano'}
    >
      <Regular>
        A GoGood está verificando a autorização de desconto em folha com sua
        empresa. Seu acesso às academias deve ser liberado em até 2 dias úteis.
      </Regular>
      <Regular>
        Enquanto isso, que tal dar uma explorada nas academias disponíveis para
        você? :)
      </Regular>
    </Modal>
  );
};

export const Example = TemplateGradientView;
Example.args = {
  color: 'cyan',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Modal', TemplateGradientView, Example.args);
}
