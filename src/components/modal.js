import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Colors } from '../colors';
import { Button } from './button';
import { Icon } from './icon';
import { Text } from './text';
import { H4 } from './typos';

const CloseModal = (props) => {
  return (
    <Button ghost onPress={props.onClose}>
      <Icon size={12} name="close" />
      <Text>Fechar</Text>
    </Button>
  );
};

const modalContainer = {
  borderWidth: 1,
  borderColor: Colors.light_gray,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  backgroundColor: Colors.white,
};
const modalContent = {
  marginLeft: 16,
  marginRight: 16,
  marginTop: 12,
  marginBottom: 16,
};
const modalImage = {
  marginTop: 27,
  marginBottom: 25,
  height: 120,
  width: '100%',
  alignSelf: 'center',
  resizeMode: 'contain',
};
export class Modal extends Component {
  populateChildren() {
    const { children } = this.props;
    return React.Children.map(children, (child, i) => {
      return React.cloneElement(child, {
        style: {
          ...child.style,
          marginBottom: 16,
        },
      });
    });
  }

  render() {
    const { onClose, onGoto, gotoText, title, image } = this.props;
    return (
      <View style={modalContainer}>
        <CloseModal onClose={onClose} />
        <View style={modalContent}>
          <H4>{title}</H4>
          <Image source={image} style={modalImage} />
          {this.populateChildren()}
          <Button onPress={onGoto}>
            <Text>{gotoText}</Text>
          </Button>
        </View>
      </View>
    );
  }
}
