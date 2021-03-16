import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../colors';
import { RegularBold } from '../components/typos';
import { Fonts } from '../fonts';
import styles from '../styles/buttons';

class Button extends Component {
  renderField() {
    if (this.props.children) return this.renderChildren();
    return <RegularBold color={this.textColor()}>Enviar</RegularBold>;
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child, i) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          color: this.textColor(),
          fontStyle: Fonts.regularBold,
          style: this.textStyle({
            isFirst: i === 0,
            isIcon: child.type.displayName === 'Icon',
          }),
        });
      }
      return child;
    });
  }

  primaryColor() {
    if (this.props.color) return this.props.color;
    if (this.props.disabled) return 'light_gray';
    return 'dark_gray';
  }

  textColor() {
    const { outline, ghost, textColor } = this.props;
    if (textColor) return textColor;
    if (outline || ghost) return this.primaryColor();
    return 'white';
  }

  textStyle({ isFirst, isIcon }) {
    const ret = {
      ...this.props.textStyle,
      marginLeft: isFirst ? undefined : 8,
    };
    if (isIcon) {
      ret.marginTop = 'auto';
      ret.marginBottom = 'auto';
    }
    return ret;
  }

  backgroundColor() {
    const { outline, ghost } = this.props;
    if (outline || ghost) return null;
    return Colors[this.primaryColor()];
  }

  borderColor() {
    const { outline } = this.props;
    if (outline) return Colors[this.primaryColor()];
    return null;
  }

  completeStyle() {
    const { ghost, outline } = this.props;
    if (outline) return styles.outlineStyle;
    if (ghost) return styles.ghostStyle;
    return styles.defaultStyle;
  }

  buttonStyle() {
    return {
      ...this.completeStyle(),
      ...this.props.style,
      backgroundColor: this.backgroundColor(),
      borderColor: this.borderColor(),
    };
  }

  render() {
    const { onPress, disabled } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={this.buttonStyle()}
        disabled={disabled}
      >
        {this.renderField()}
      </TouchableOpacity>
    );
  }
}

export { Button };
