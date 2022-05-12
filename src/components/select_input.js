import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Colors } from '../colors';
import { Fonts } from '../fonts';
import { Icon } from './icon';
import { ModalPicker } from './modal_picker';
import { Text } from './text';
import { Regular, RegularBold, Small } from './typos';

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
  height:40, 
  lineHeight:40,
  textAlign: 'center',
};

const itemTouchStyle = {
  flex: 1,
  width: '100%',
  alignContent: 'center',
};

export const SelectItem = (props) => {
  let lastStyle = props.last ? { borderBottomWidth: 0 } : {};
  let TextComponent =
    props.currentValue === props.value ? RegularBold : Regular;

  return (
    <View style={[itemStyleContainer, lastStyle]}>
      <TouchableOpacity
        onPress={() => props.onSelect(props.value, props.label)}
        style={itemTouchStyle}
      >
        <TextComponent style={itemStyle}>{props.label}</TextComponent>
      </TouchableOpacity>
    </View>
  );
};

export class SelectInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: !props.value || props.value.length === 0,
      modalShow: false,
      selectedLabel: undefined,
      selectedValue: undefined,
      itens: this.loadItens(),
    };
    const selected = this.loadSelected();
    if (selected) {
      this.state.selectedLabel = selected.label;
      this.state.selectedValue = selected.value;
    }

    this.field = null;
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.selectedValue) {
      const selected = state.itens.find((i) => i.value === props.value);
      if (selected) {
        return {
          selectedLabel: selected.label,
          selectedValue: selected.value,
        };
      }
    }
    return null;
  }

  loadItens() {
    return React.Children.toArray(this.props.children).map((item) => {
      return item.props;
    });
  }

  loadSelected() {
    const mapping = this.loadItens();
    if (!mapping || mapping.length === 0) return null;

    return mapping.find((item) => item.value === this.props.value);
  }

  focus() {
    this.field && this.field.focus();
  }

  handleReference(field) {
    this.field = field;
  }

  inputBorders() {
    return {
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomColor: this.colorOutline(),
      borderBottomWidth: 1,
    };
  }

  onSelect(value, label) {
    this.setState({
      selectedLabel: label,
      selectedValue: value,
      placeholder: !value || value.length === 0,
      modalShow: false,
    });

    this.props.onChangeValue && this.props.onChangeValue(value);
  }

  iconStyle() {
    return {
      marginTop: 13,
      position: 'absolute',
      right: 0,
    };
  }

  loadModalPicker() {
    this.setState({ modalShow: true });
  }
  closeModal() {
    this.setState({ modalShow: false });
  }

  render() {
    const { error, style, label, labelStyle } = this.props;

    return (
      <View style={style}>
        {label && <Regular style={labelStyle}>{label}</Regular>}
        <TouchableOpacity
          style={this.inputBorders()}
          onPress={this.loadModalPicker.bind(this)}
        >
          <Icon
            size={16}
            name={'chevron_down'}
            style={this.iconStyle()}
            color="dark_gray"
          />
          <Text style={this.textStyle()}>{this.selectedLabel()}</Text>
        </TouchableOpacity>
        {error && (
          <Small style={this.errorStyle()} color={'error'}>
            {error}
          </Small>
        )}

        <ModalPicker
          visible={this.state.modalShow}
          onClose={this.closeModal.bind(this)}
          headerText={'Selecione'}
        >
          {this.drawPicker()}
        </ModalPicker>
      </View>
    );
  }

  drawPicker() {
    const { children } = this.props;
    const itemCount = (children && children.length) || 0;

    return (
      <ScrollView style={this.scrollViewContainer()}>
        {React.Children.map(children, (child, i) => {
          const last = i === itemCount - 1;
          return React.cloneElement(child, {
            onSelect: this.onSelect.bind(this),
            last: last,
            currentValue: this.state.selectedValue,
          });
        })}
      </ScrollView>
    );
  }

  errorStyle() {
    return {
      marginTop: 8,
    };
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
