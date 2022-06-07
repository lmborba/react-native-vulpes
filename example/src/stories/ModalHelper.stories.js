import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Colors, ModalHelper, Regular } from 'react-native-vulpes';

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
  title: 'Example/ModalHelper',
  component: ModalHelper,
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

const TemplateGradientView = ({ ...rest }) => {
  return (
    <ModalHelper
      title="Informações adicionais"
      message={'Mensagem de ajuda'}
      show={true}
    >
      <Regular>
        A GoGood está verificando a autorização de desconto em folha com sua
        empresa. Seu acesso às academias deve ser liberado em até 2 dias úteis.
      </Regular>
      <Regular>
        Enquanto isso, que tal dar uma explorada nas academias disponíveis para
        você? :)
      </Regular>
    </ModalHelper>
  );
};

export const Example = TemplateGradientView;
Example.args = {
  color: 'primary.80',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Modal', TemplateGradientView, Example.args);
}
