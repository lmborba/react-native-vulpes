import React, { Component } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { DEVICE_HEIGHT } from '../../../../js/utils/metrics';
import { ModalContainer } from './modal_container';
import { RegularBold } from './typos';

const containerStyle = {
  padding: 8,
  paddingBottom: 16,
};
const seletorStyle = {
  borderRadius: 8,
  backgroundColor: 'white',
  alignItems: 'center',
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

const optionsStyle = { maxHeight: DEVICE_HEIGHT * 0.4, width: '100%' };

export class ModalPicker extends Component {
  render() {
    const { children, onClose, headerText } = this.props;
    return (
      <ModalContainer {...this.props} style={[containerStyle]}>
        <SafeAreaView>
          <View style={seletorStyle}>
            <View style={headerContainerStyle}>
              <RegularBold>{headerText}</RegularBold>
            </View>
            <View style={optionsStyle}>{children}</View>
          </View>

          <TouchableOpacity onPress={onClose} style={cancelBtnStyle}>
            <RegularBold>Cancelar</RegularBold>
          </TouchableOpacity>
        </SafeAreaView>
      </ModalContainer>
    );
  }
}
