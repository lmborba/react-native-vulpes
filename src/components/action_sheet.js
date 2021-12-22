import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Colors } from '../colors';
import { Fonts } from '../fonts';
import { ModalPicker } from './modal_picker';
import { Regular, RegularBold } from './typos';

const itemStyleContainer = {
  width: '100%',
  flex: 1,
  borderBottomColor: '#c1c1c1',
  borderBottomWidth: 0.25,
  alignItems: 'center',
  alignContent: 'center',
};

const itemStyle = {
  flex: 1,
  textAlign: 'center',
};

const itemTouchStyle = {
  flex: 1,
  padding: 8,
  width: '100%',
  alignContent: 'center',
};

export const SelectItem = (props) => {
  let lastStyle = props.last ? { borderBottomWidth: 0 } : {};
  let TextComponent =
    props.currentValue === props.value ? RegularBold : Regular;

  return (
    <View style={[itemStyleContainer, lastStyle]}>
      <TouchableOpacity onPress={() => props.onSelect()} style={itemTouchStyle}>
        <TextComponent style={itemStyle}>{props.label}</TextComponent>
      </TouchableOpacity>
    </View>
  );
};

let mainOpenFunctions = {};

export const openActionSheet = (key = 0) => {
  mainOpenFunctions[key] && mainOpenFunctions[key]();
};

export class ActionSheet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
      itens: this.loadItens(),
    };

    this.open = this.openModal.bind(this);
    mainOpenFunctions[props.keyReference || 0] = this.openModal.bind(this);
  }

  loadItens() {
    return React.Children.toArray(this.props.children).map((item) => {
      return item.props;
    });
  }

  openModal() {
    this.setState({ modalShow: true });
  }

  closeModal() {
    this.setState({ modalShow: false });
  }

  render() {
    return (
      <ModalPicker
        visible={this.state.modalShow}
        onClose={this.closeModal.bind(this)}
        headerText={this.props.headerText || 'Ações'}
      >
        {this.drawPicker()}
      </ModalPicker>
    );
  }

  onSelect(child) {
    const { onSelect } = child.props;
    return () => {
      this.setState({ modalShow: false });
      setTimeout(() => {
        onSelect && onSelect();
      }, 500);
    };
  }

  drawPicker() {
    const { children } = this.props;
    const itemCount = (children && children.length) || 0;

    return (
      <ScrollView style={this.scrollViewContainer()}>
        {React.Children.toArray(children).map((child, i) => {
          const last = i === itemCount - 1;
          return React.cloneElement(child, {
            onSelect: this.onSelect.bind(this)(child),
            last: last,
          });
        })}
      </ScrollView>
    );
  }

  selectedLabel() {
    const label = this.state.selectedLabel;

    if (!label) return this.props.placeholder;
    return label;
  }

  scrollViewContainer() {
    return { width: '100%', flexGrow: 0 };
  }
  textStyle() {
    return {
      ...this.fontStyle(),
      backgroundColor: 'transparent',
      height: 37,
      lineHeight: 37,
      marginTop: 2,
    };
  }

  fontStyle() {
    let font = Fonts.regularBold;
    if (this.state.placeholder && !this.props.value)
      font = Fonts.placeholderBold;
    if (this.props.error) font = { ...font, color: Colors.error };
    return font;
  }

  colorOutline() {
    if (this.props.error) return Colors.error;
    if (this.state.focused) return Colors.cyan;
    return Colors.light_gray;
  }
}
