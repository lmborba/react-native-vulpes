import React, { Component } from 'react';
import { Platform, TextInput as Input, View } from 'react-native';
import { Colors } from '../colors';
import { Fonts } from '../fonts';
import { Regular, Small } from './typos';

export class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: !props.value || props.value.length === 0,
      focused: false,
    };
    this.field = null;
  }

  focus() {
    this.field && this.field.focus();
  }

  handleReference(field) {
    this.field = field;
  }

  handleChange(text) {
    this.setState({
      placeholder: text.length === 0,
    });
    this.props.onChangeText && this.props.onChangeText(text);
  }

  handleFocus() {
    this.setState({ focused: true });
    this.props.onFocus && this.props.onFocus();
  }

  handleBlur() {
    this.setState({ focused: false });
    this.props.onBlur && this.props.onBlur();
  }

  handlePointer() {
    if (Platform.OS !== 'ios') return {};
    if (this.props.editable === false) return { pointerEvents: 'none' };
    return {};
  }

  render() {
    const {
      error,
      style,
      label,
      placeholder,
      onChangeText,
      labelStyle,
      inputStyle,
      onPress,
      onBlur,
      ref,
      onFocus,
      value,
      ...rest
    } = this.props;
    return (
      <View style={style} {...this.handlePointer()}>
        <Regular style={labelStyle}>{label}</Regular>
        <Input
          ref={this.handleReference.bind(this)}
          placeholder={placeholder}
          placeholderTextColor={this.fontStyle().color}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          {...rest}
          style={this.completeStyle()}
          value={this.props.value}
          onChangeText={this.handleChange.bind(this)}
        />
        {error && (
          <Small style={this.errorStyle()} color={'error'}>
            {error}
          </Small>
        )}
      </View>
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

  completeStyle() {
    const { inputStyle } = this.props;

    return {
      ...this.fontStyle(),
      borderBottomColor: this.colorOutline(),
      borderBottomWidth: 1,
      height: 38,
      marginTop: 2,
      ...this.systemOutline(),
      ...inputStyle,
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
