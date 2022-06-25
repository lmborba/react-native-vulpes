import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { getColors } from '../colors';
import { getFonts } from '../fonts';
import { Icon } from './icon';
import { Regular, Small } from './typos';

const CheckboxLabel = ({ label, labelStyle }) => {
  if (!label) return null;
  return <Regular style={labelStyle}>{label}</Regular>;
};

export class Checkbox extends Component {
  constructor(props) {
    super(props);
  }

  handleChange() {
    const { onChange = null, checked } = this.props;
    onChange && onChange(!checked);
  }

  render() {
    const { error, style, text, label, labelStyle } = this.props;
    return (
      <View style={style}>
        <CheckboxLabel {...{ label, labelStyle }} />
        <TouchableOpacity
          onPress={() => this.handleChange()}
          style={this.completeStyle()}
        >
          <View style={this.bodyStyle()}>
            <View style={this.checkboxStyle()}>{this.renderChecked()}</View>
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

  renderChecked() {
    const { checked } = this.props;
    if (!checked) return null;
    return (
      <View style={this.checkedBoxStyle()}>
        <Icon size={16} name={'check'} color={'singleton.white'} />
      </View>
    );
  }

  errorStyle() {
    return {
      marginTop: 8,
    };
  }

  completeStyle() {
    return {
      ...this.fontStyle(),
      height: 38,
      marginTop: 2,
      flexDirection: 'row',
      alignItems: 'center',
    };
  }

  bodyStyle() {
    return {
      alignItems: 'center',
      flexDirection: 'row',
    };
  }

  checkboxStyle() {
    return {
      borderWidth: 1,
      borderRadius: 4,
      height: 20,
      width: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: this.colorRegular(),
      marginRight: 8,
    };
  }

  checkedBoxStyle() {
    return {
      borderRadius: 4,
      height: 20,
      width: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: this.colorRegular(),
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
    return colors('gray.100');
  }

  colorOutline() {
    const { theme } = this.context;
    const colors = getColors(theme);
    if (this.props.error) return colors('error.100');
    return colors('gray.100');
  }
}
