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
      loading: true,
    };
    this.field = null;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 10);
  }

  focus() {
    this.field && this.field.focus();
  }

  handleReference(field) {
    this.field = field;
  }

  handleChange(text) {
    this.setState({
      placeholder: !text || text.length === 0,
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
      onFocus,
      value,
      ...rest
    } = this.props;
    if (this.state.loading) return null;
    return (
      <View style={style} {...this.handlePointer()}>
        <Regular style={labelStyle}>{label}</Regular>
        <Input
          placeholder={placeholder}
          placeholderTextColor={this.fontStyle().color}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          {...rest}
          ref={this.handleReference.bind(this)}
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
    if (this.props.editable === false) font = { ...font, color: Colors.gray };
    if (this.props.error) font = { ...font, color: Colors.error };
    return font;
  }

  colorOutline() {
    if (this.props.error) return Colors.error;
    if (this.state.focused) return Colors.cyan;
    return Colors.light_gray;
  }
}
