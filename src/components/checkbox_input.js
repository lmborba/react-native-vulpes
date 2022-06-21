import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { getColors } from '../colors';
import { getFonts } from '../fonts';
import { Icon } from './icon';
import { Regular, Small } from './typos';

export class CheckboxInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.field = null;
  }

  handleReference(field) {
    this.field = field;
  }

  handleChange() {
    this.props.onChange && this.props.onChange(!this.props.value);
  }

  renderChecked() {
    const { value, checkType } = this.props;
    if (!value) return null;
    if (checkType)
      return <Icon size={10} name="check" color={this.colorRegular()} />;
    return <View style={this.checkInnerCircle()} />;
  }

  renderLabel() {
    const { label, labelStyle } = this.props;
    if (!label) return null;
    return <Regular style={labelStyle}>{label}</Regular>;
  }
  render() {
    const { error, style, text, value } = this.props;
    return (
      <View style={style}>
        {this.renderLabel()}
        <TouchableOpacity
          onPress={() => this.handleChange(!(value || false))}
          style={this.completeStyle()}
        >
          <View style={this.bodyStyle()}>
            <View style={this.checkCircleStyle()}>{this.renderChecked()}</View>
            <Regular style={this.fontStyle()}>{text}</Regular>
          </View>
        </TouchableOpacity>
        {error && (
          <Small style={this.errorStyle()} color={'error.100'}>
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

  completeStyle() {
    const { inputStyle } = this.props;

    return {
      ...this.fontStyle(),
      borderBottomColor: this.colorOutline(),
      borderBottomWidth: 1,
      height: 38,
      marginTop: 2,
      flexDirection: 'row',
      alignItems: 'center',
      ...this.cleanStyle(),
      ...inputStyle,
    };
  }

  cleanStyle() {
    if (!this.props.clean) return {};
    return {
      borderBottomColor: this.colorOutline(),
      borderBottomWidth: 0,
      height: 32,
    };
  }
  bodyStyle() {
    return {
      alignItems: 'center',
      flexDirection: 'row',
    };
  }
  checkCircleStyle() {
    return {
      borderWidth: 1,
      borderRadius: 100,
      height: 16,
      width: 16,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: this.colorRegular(),
      marginRight: 8,
    };
  }

  checkInnerCircle() {
    return {
      borderRadius: 100,
      height: 8,
      width: 8,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: this.colorOutline(),
      backgroundColor: this.colorRegular(),
    };
  }

  fontStyle() {
    const { theme } = this.context;
    const fonts = getFonts(theme);
    const colors = getColors(theme);
    let font = fonts.regular;
    if (this.props.error) font = { ...font, color: colors('error.100') };
    return font;
  }

  colorRegular() {
    const { theme } = this.context;
    const colors = getColors(theme);
    if (this.props.error) return colors('error.100');
    return colors('gray.80');
  }

  colorOutline() {
    const { theme } = this.context;
    const colors = getColors(theme);
    if (this.props.error) return colors('error.100');
    return colors('gray.40');
  }
}
