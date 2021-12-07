import React, { Component } from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { Colors } from '../colors';
import { Button } from './button';
import { Icon } from './icon';
import { Text } from './text';
import { H4 } from './typos';

const modalContainer = {
  borderWidth: 1,
  borderColor: Colors.light_gray,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  backgroundColor: Colors.white,
};

const modalContent = {
  marginLeft: 24,
  marginRight: 24,
  marginTop: 12,
  marginBottom: 32,
};

const modalImage = {
  marginTop: 27,
  marginBottom: 25,
  height: 120,
  width: '100%',
  alignSelf: 'center',
  resizeMode: 'contain',
};

const closeModalIcon = {
  marginTop: 4,
};

const btnStyle = {
  alignSelf: 'center',
};

const CloseModal = (props) => {
  return (
    <Button ghost onPress={props.onClose}>
      <Icon size={12} name="close" style={closeModalIcon} />
      <Text>Fechar</Text>
    </Button>
  );
};

export class Modal extends Component {
  populateChildren() {
    const { children } = this.props;
    return React.Children.toArray(children).map((child, i) => {
      return React.cloneElement(child, {
        style: {
          marginBottom: 16,
          ...child.props.style,
        },
      });
    });
  }

  renderImage() {
    const { image } = this.props;
    if (!image) return null;
    return <Image source={image} style={modalImage} />;
  }

  renderActions() {
    const { onGoto, gotoText } = this.props;
    if (!gotoText) return null;

    return (
      <Button onPress={onGoto} style={btnStyle}>
        <Text>{gotoText}</Text>
      </Button>
    );
  }

  render() {
    const { onClose, clearModal, children, title } = this.props;
    return (
      <View style={modalContainer}>
        <CloseModal onClose={onClose} />
        {clearModal ? (
          children
        ) : (
          <View style={modalContent}>
            <SafeAreaView>
              {title && <H4>{title}</H4>}
              {this.renderImage()}
              {this.populateChildren()}
              {this.renderActions()}
            </SafeAreaView>
          </View>
        )}
      </View>
    );
  }
}
