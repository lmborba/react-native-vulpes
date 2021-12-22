import { storiesOf } from '@storybook/react-native';
import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import {
  Button as B,
  Colors,
  Icon,
  Text,
  ToggleButton,
} from 'react-native-vulpes';
import { listOfIcons } from '../../../src/components/icon';

const colorList = () => {
  var keys = [undefined];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

const buttonContainer = { margin: 10 };

const Button = (props) => {
  return <B style={buttonContainer} {...props} />;
};
class TemplateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

  handlePress() {
    console.log('pressed', this.state);
    this.setState({
      value: !this.state.value,
    });
  }

  render() {
    const {
      color = undefined,
      outline = undefined,
      ghost = undefined,
      disabled = undefined,
      icon = 'like_empty',
      onIcon = 'like',
      offIcon = 'like_empty',
    } = this.props;

    const { value } = this.state;

    console.log(value);
    return (
      <>
        <Button
          color={color}
          outline={outline}
          ghost={ghost}
          disabled={disabled}
        >
          <Text>Enviar</Text>
        </Button>
        <Button
          color={color}
          outline={outline}
          ghost={ghost}
          disabled={disabled}
        >
          <Icon name={icon} />
          <Text>Enviar</Text>
        </Button>
        <Button
          color={color}
          outline={outline}
          ghost={ghost}
          disabled={disabled}
        >
          <Text>Enviar</Text>
          <Icon name={icon} />
        </Button>
        <Button
          color={color}
          outline={outline}
          ghost={ghost}
          disabled={disabled}
        >
          <Icon name={icon} />
        </Button>
        <ToggleButton
          color={color}
          onIcon={onIcon}
          offIcon={offIcon}
          onPress={this.handlePress.bind(this)}
          value={value}
        />
      </>
    );
  }
}

const TemplateButtonWrap = (props) => <TemplateButton {...props} />;

export const Example = TemplateButtonWrap;

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: {
      description: 'color for the button',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
    outline: {
      description: 'sets button of type outline',
      control: {
        type: 'boolean',
      },
    },
    ghost: {
      description: 'sets button of type ghost',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description: 'disables the button',
      control: {
        type: 'boolean',
      },
    },
    icon: {
      description: 'icon to be used',
      control: {
        type: 'select',
        options: listOfIcons(),
      },
    },
    onIcon: {
      description: 'icon to be used when toggle button is on',
      control: {
        type: 'select',
        options: listOfIcons(),
      },
    },
    offIcon: {
      description: 'icon to be used when toggle button is on',
      control: {
        type: 'select',
        options: listOfIcons(),
      },
    },
  },
};

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
  outline: false,
  ghost: false,
  disabled: false,
  icon: 'like_empty',
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Button', TemplateButton, Example.args);
}
