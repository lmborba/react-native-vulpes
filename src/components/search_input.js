import React, { Component } from 'react';
import { Platform, TextInput as Input, View } from 'react-native';
import { Colors } from '../colors';
import { Fonts } from '../fonts';
import { Icon } from './icon';
import { Small } from './typos';

export class SearchInput extends Component {
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
      <View style={this.completeOuterStyle()}>
        <Icon
          name="search"
          color={this.colorOutline()}
          size={16}
          style={this.iconStyle()}
        />
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

  iconStyle() {
    return {
      marginRight: 8,
      marginTop: 3,
    };
  }

  completeOuterStyle() {
    const { style } = this.props;

    return {
      borderColor: this.colorOutline(),
      borderWidth: this.widthOutline(),
      height: 44,
      borderRadius: 22,
      marginTop: 2,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 10,
      paddingBottom: 10,
      flexDirection: 'row',
      style,
    };
  }

  completeStyle() {
    const { inputStyle } = this.props;

    return {
      ...this.fontStyle(),
      ...this.systemOutline(),
      flex: 1,
      ...inputStyle,
    };
  }

  fontStyle() {
    let font = Fonts.regularBold;
    if (this.state.placeholder && !this.props.value) font = Fonts.regular;
    if (this.props.error) font = { ...font, color: Colors.error };
    if (this.props.noResult) font = { ...font, color: Colors.error };
    return font;
  }

  colorOutline() {
    if (this.props.error) return Colors.error;
    if (this.state.focused) return Colors.dark_gray;
    return Colors.dark_gray;
  }

  widthOutline() {
    if (this.props.error) return 1;
    if (this.state.focused) return 1;
    return 1;
  }
}
