import React, { Component } from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import { ModalContainer } from './modal_container';
import { RegularBold } from './typos';

const containerStyle = {
  padding: 8,
  paddingBottom: Platform.OS === 'ios' ? 40 : 8,
};
const seletorStyle = {
  borderRadius: 8,
  backgroundColor: 'white',
  alignItems: 'center',
  maxHeight: '50%',
};
const headerContainerStyle = {
  padding: 10,
  width: '100%',
  alignItems: 'center',
  borderBottomWidth: 0.25,
  borderBottomColor: '#c1c1c1',
};

const cancelBtnStyle = {
  marginTop: 8,
  borderRadius: 8,
  padding: 8,
  paddingTop: 10,
  backgroundColor: 'white',
  alignItems: 'center',
};

export class ModalPicker extends Component {
  render() {
    const { children, onClose, headerText } = this.props;
    return (
      <ModalContainer {...this.props} style={[containerStyle]}>
        <View style={seletorStyle}>
          <View style={headerContainerStyle}>
            <RegularBold>{headerText}</RegularBold>
          </View>
          {children}
        </View>

        <TouchableOpacity onPress={onClose} style={cancelBtnStyle}>
          <RegularBold>Cancelar</RegularBold>
        </TouchableOpacity>
      </ModalContainer>
    );
  }
}
