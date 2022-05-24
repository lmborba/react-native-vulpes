import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from './icon';
import { Modal } from './modal';
import { ModalContainer } from './modal_container';
import { Regular } from './typos';

export class ModalHelper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  renderModal() {
    const { title, message, helper, children } = this.props;

    const ss = { marginTop: 16, marginBottom: 16 };
    return (
      <ModalContainer
        visible={this.state.visible}
        onClose={() => this.setState({ visible: false })}
      >
        <Modal
          title={title}
          onClose={() => this.setState({ visible: false })}
          onGoto={() => this.setState({ visible: false })}
          gotoText=" Fechar "
        >
          {message && <Regular style={ss}>{message}</Regular>}
          {helper && <Regular style={ss}>{helper}</Regular>}
          {children}
        </Modal>
      </ModalContainer>
    );
  }

  render() {
    const { style, show, icon } = this.props;
    const ss = { padding: 8 };
    if (!show) return null;
    return (
      <TouchableOpacity
        style={{ ...ss, ...style }}
        onPress={() => this.setState({ visible: true })}
      >
        <Icon name={icon || 'help'} size="16" />
        {this.renderModal()}
      </TouchableOpacity>
    );
  }
}
