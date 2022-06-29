import React, { Component } from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import { getColors } from '../colors';
import { Button } from './button';
import { Icon } from './icon';
import { Text } from './text';
import { H4 } from './typos';
import DeviceInfo from 'react-native-device-info';
import VulpesContext from '../contexts/VulpesContext';

const modalHeight = () => {
  const notch = DeviceInfo.hasNotch() ? 40 : 10;
  return Dimensions.get('window').height - notch;
};

const isIOS = Platform.OS === 'ios';

const modalContainer = (theme) => {
  const colors = getColors(theme);
  return {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: colors('gray.40'),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors('singleton.white'),
    maxHeight: modalHeight(),
    bottom: 0,
  };
};

const scrollContainer = {
  paddingBottom: isIOS ? 32 : 0,
};

const modalContent = {
  marginLeft: 24,
  marginRight: 24,
  marginTop: 12,
  marginBottom: 24,
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

const titleStyle = {
  marginBottom: 16,
  textAlign: 'center',
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
          textAlign: 'center',
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

  renderCloseButton() {
    const { onClose, noClose } = this.props;
    if (noClose) return null;
    return <CloseModal onClose={onClose} />;
  }

  render() {
    const { clearModal, children, title, scrollEnabled } = this.props;
    const { theme } = this.context;
    return (
      <KeyboardAvoidingView behavior={isIOS ? 'padding' : undefined}>
        <View style={modalContainer(theme)}>
          {this.renderCloseButton()}
          <ScrollView scrollEnabled={scrollEnabled || false}>
            <View style={scrollContainer}>
              {clearModal ? (
                children
              ) : (
                <View style={modalContent}>
                  {this.renderImage()}
                  {title && <H4 style={titleStyle}>{title}</H4>}
                  {this.populateChildren()}
                  {this.renderActions()}
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

Modal.contextType = VulpesContext;
