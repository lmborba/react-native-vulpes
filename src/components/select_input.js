import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { Colors } from '../colors';
import { Fonts } from '../fonts';
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
      children,
      ...rest
    } = this.props;
    return (
      <View style={style}>
        <Regular style={labelStyle}>{label}</Regular>
        <Picker
          note
          mode="dropdown"
          selectedValue={this.state.value}
          onValueChange={this.handleChange.bind(this)}
          placeholder={placeholder}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          {...rest}
          style={this.completeStyle()}
        >
          {children}
        </Picker>
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
