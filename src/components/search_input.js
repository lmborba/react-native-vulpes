import React, { Component } from 'react';
import {
  Platform,
  TextInput as Input,
  TouchableOpacity,
  View,
} from 'react-native';
import { getColors } from '../colors';
import { getFonts } from '../fonts';
import { Icon } from './icon';
import { Small, SmallBold } from './typos';
import VulpesContext from '../contexts/VulpesContext';

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
      onFocus,
      allowSend,
      value,
      ...rest
    } = this.props;
    return (
      <View style={this.completeOuterStyle()}>
        <Icon
          name="search"
          color={'searchInput.text'}
          size={16}
          style={this.iconStyle()}
        />
        <Input
          allowFontScaling={false}
          ref={this.handleReference.bind(this)}
          placeholder={placeholder}
          placeholderTextColor={this.fontStyle().color}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          {...rest}
          style={this.completeStyle()}
          value={this.props.value}
          onSubmitEditing={this.onSend.bind(this)}
          onChangeText={this.handleChange.bind(this)}
        />
        {allowSend && (
          <TouchableOpacity onPress={this.onSend.bind(this)}>
            <SmallBold style={this.okStyle()} color={'primary.80'}>
              IR
            </SmallBold>
          </TouchableOpacity>
        )}
        {error && (
          <Small style={this.errorStyle()} color={'error.100'}>
            {error}
          </Small>
        )}
      </View>
    );
  }

  onSend() {
    const { allowSend, onFinish } = this.props;
    allowSend && onFinish && onFinish();
  }

  okStyle() {
    return { marginTop: 2 };
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
      ...style,
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
    const { theme } = this.context;
    const colors = getColors(theme);
    const fonts = getFonts(theme);
    let font = fonts.regularBold;

    if (this.state.placeholder && !this.props.value) font = fonts.regular;
    if (this.props.error) font = { ...font, color: colors('error.100') };
    if (this.props.noResult) font = { ...font, color: colors('error.100') };
    return { ...font, fontWeight: 'bold', color: colors('searchInput.text') };
  }

  colorOutline() {
    const { theme } = this.context;
    const colors = getColors(theme);
    if (this.props.error) return colors('error.100');
    if (this.state.focused) return colors('searchInput.outline');
    return colors('searchInput.outline');
  }

  widthOutline() {
    if (this.props.error) return 1;
    if (this.state.focused) return 1;
    return 1;
  }
}

SearchInput.contextType = VulpesContext;
