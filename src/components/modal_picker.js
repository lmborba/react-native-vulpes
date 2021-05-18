import React, { Component } from 'react';
import { Modal, Platform, TouchableOpacity, View } from 'react-native';
import { RegularBold } from './typos';

const containerStyle = {
  flex: 1,
  backgroundColor: 'rgba(52, 52, 52, 0.6)',
  padding: 8,
  paddingBottom: Platform.OS === 'ios' ? 40 : 8,
};
const modalDismissStyle = { flex: 1 };
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
    const { children, onClose, visible, headerText } = this.props;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={containerStyle}>
          <TouchableOpacity
            style={modalDismissStyle}
            onPress={onClose}
            activeOpacity={1}
          />

          <View style={seletorStyle}>
            <View style={headerContainerStyle}>
              <RegularBold>{headerText}</RegularBold>
            </View>
            {children}
          </View>

          <TouchableOpacity onPress={onClose} style={cancelBtnStyle}>
            <RegularBold>Cancelar</RegularBold>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}
