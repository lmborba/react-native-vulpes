import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { Colors } from '../colors';
import { Fonts } from '../fonts';
import { Icon } from './icon';
import { Text } from './text';
import { Regular, Small } from './typos';

export const SelectItem = (props) => {
  return <Picker.Item {...props} />;
};

export class SelectInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: !props.value || props.value.length === 0,
      focused: false,
      value: props.value,
    };
    this.field = null;
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

  handleChange(value) {
    this.setState({
      placeholder: !value || value.length === 0,
      value: value,
    });
    this.props.onChangeValue && this.props.onChangeValue(value);
  }

  handleFocus() {
    this.setState({ focused: true });
    this.props.onFocus && this.props.onFocus();
  }

  handleBlur() {
    this.setState({ focused: false });
    this.props.onBlur && this.props.onBlur();
  }

  iconStyle() {
    return {
      marginTop: 13,
      position: 'absolute',
      right: 0,
    };
  }

  render() {
    const { error, style, label, labelStyle } = this.props;
    return (
      <View style={style}>
        <Regular style={labelStyle}>{label}</Regular>
        <View style={this.inputBorders()}>
          <Icon
            size={16}
            name={'chevron_down'}
            style={this.iconStyle()}
            color="dark_gray"
          />
          <Text style={this.textStyle()}>{this.selectedLabel()}</Text>
          {this.drawPicker()}
        </View>
        {error && (
          <Small style={this.errorStyle()} color={'error'}>
            {error}
          </Small>
        )}
      </View>
    );
  }

  cleanPropsForPicker() {
    const {
      error,
      style,
      label,
      placeholder,
      onValueChange,
      labelStyle,
      inputStyle,
      onPress,
      onBlur,
      onFocus,
      value,
      children,
      ref,
      ...rest
    } = this.props;
    return rest;
  }

  drawPicker() {
    const { placeholder, children } = this.props;
    return (
      <Picker
        ref={this.handleReference.bind(this)}
        prompt={placeholder}
        note
        mode="dropdown"
        selectedValue={this.state.value}
        onValueChange={this.handleChange.bind(this)}
        placeholder={placeholder}
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
        {...this.cleanPropsForPicker()}
        style={this.completeStyle()}
      >
        {placeholder ? (
          <Picker.Item label={placeholder} value={null} color={Colors.gray} />
        ) : null}
        {children}
      </Picker>
    );
  }

  errorStyle() {
    return {
      marginTop: 8,
    };
  }

  systemOutline() {
    if (Platform.OS !== 'web') return {};
    return {
      outline: 'none',
    };
  }

  selectedLabel() {
    const mapping = React.Children.map(this.props.children, (item) => {
      return item.props;
    });
    const selected = mapping.find((item) => item.value === this.state.value);
    if (!selected) return this.props.placeholder;
    return selected.label;
  }

  textStyle() {
    return {
      ...this.fontStyle(),
      position: 'absolute',
      backgroundColor: 'transparent',
      height: 37,
      lineHeight: 37,
      marginTop: 2,
    };
  }

  completeStyle() {
    const { inputStyle } = this.props;

    return {
      backgroundColor: 'transparent',
      height: 37,
      marginTop: 2,
      opacity: 0,
      border: 0,
      ...this.systemOutline(),
      ...inputStyle,
    };
  }

  fontStyle() {
    let font = Fonts.regularBold;
    if (this.state.placeholder) font = Fonts.placeholderBold;
    if (this.props.error) font = { ...font, color: Colors.error };
    return font;
  }

  colorOutline() {
    if (this.props.error) return Colors.error;
    if (this.state.focused) return Colors.cyan;
    return Colors.light_gray;
  }
}
