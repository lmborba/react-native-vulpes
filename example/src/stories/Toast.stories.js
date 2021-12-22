import React from 'react';
import { View } from 'react-native';
import { Button, Toast } from 'react-native-vulpes';

const mobileStyleWidget = { maxWidth: 320 };
export default {
  title: 'Example/Toast',
  component: Toast,
  decorators: [(story) => <View style={mobileStyleWidget}>{story()}</View>],
  argTypes: {
    type: {
      description: 'color for the button',
      control: {
        type: 'select',
        options: ['success', 'warning', 'error'],
      },
    },
  },
};

const TemplateGradientView = ({ ...rest }) => {
  return (
    <View>
      <Toast />
      <Button
        text="Mostrar toast"
        onPress={() => {
          Toast.show({
            title: 'Hello',
            text: 'world...',
            duration: 2000,
            ...rest,
          });
        }}
      />
    </View>
  );
};

export const Example = TemplateGradientView;
Example.args = {
  type: 'success',
};
