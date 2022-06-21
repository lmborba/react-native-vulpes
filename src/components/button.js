import React, { Component } from 'react';
import { TouchableOpacity, Keyboard } from 'react-native';
import { getColors } from '../colors';
import { RegularBold } from '../components/typos';
import { getFonts } from '../fonts';
import styles from '../styles/buttons';
import { Icon } from './icon';
import VulpesContext from '../contexts/VulpesContext';

class Button extends Component {
  renderField() {
    const { children, text, leftIcon, rightIcon, iconSize } = this.props;
    if (children) return this.renderChildren();

    const tx = text === undefined ? 'Enviar' : text;

    const t = tx && (
      <RegularBold key={'t'} color={this.textColor()}>
        {tx}
      </RegularBold>
    );
    const l = leftIcon && (
      <Icon
        key={'l'}
        name={leftIcon}
        color={this.textColor()}
        size={iconSize}
      />
    );
    const r = rightIcon && (
      <Icon
        key={'r'}
        name={rightIcon}
        color={this.textColor()}
        size={iconSize}
      />
    );

    const els = [l, t, r].filter((i) => i);

    return els.map((el, i) => {
      if (React.isValidElement(el)) {
        if (i === 0) return el;
        return React.cloneElement(el, {
          style: {
            paddingLeft: 8,
            ...el.props.style,
          },
        });
      }
    });
  }

  renderChildren() {
    const { theme } = this.context;
    const fonts = getFonts(theme);
    return React.Children.map(this.props.children, (child, i) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          color: this.textColor(),
          fontStyle: fonts.regularBold,
          style: {
            ...this.textStyle({
              isFirst: i === 0,
              isIcon: child.type.displayName === 'Icon',
            }),
            ...child.props.style,
          },
        });
      }
      return child;
    });
  }

  primaryColor() {
    const { color, disabled } = this.props;
    if (color) return color;
    if (disabled) return 'gray.40';
    return 'gray.100';
  }

  textColor() {
    const { outline, ghost, textColor } = this.props;
    if (textColor) return textColor;
    if (outline || ghost) return this.primaryColor();
    return 'singleton.white';
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
    const { theme } = this.context;
    if (outline || ghost) return null;
    const colors = getColors(theme);
    return colors(this.primaryColor());
  }

  borderColor() {
    const { outline } = this.props;
    const { theme } = this.context;
    const colors = getColors(theme);
    if (outline) return colors(this.primaryColor());
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

  onPress() {
    const { onPress } = this.props;
    Keyboard.dismiss();
    onPress();
  }
  render() {
    const { disabled } = this.props;
    console.log(this.textColor());
    return (
      <TouchableOpacity
        onPress={this.onPress.bind(this)}
        style={this.buttonStyle()}
        disabled={disabled}
      >
        {this.renderField()}
      </TouchableOpacity>
    );
  }
}
Button.contextType = VulpesContext;

class ToggleButton extends Component {
  handleClick() {
    return this.props.onPress && this.props.onPress();
  }

  color() {
    const { color } = this.props;
    if (!color) return 'gray.100';
    return color;
  }
  size() {
    return this.props.size || 18;
  }

  render() {
    const { value, onIcon, offIcon, style } = this.props;
    return (
      <TouchableOpacity onPress={this.handleClick.bind(this)} style={style}>
        {value ? (
          <Icon name={onIcon} size={this.size()} color={this.color()} />
        ) : (
          <Icon name={offIcon} size={this.size()} color={this.color()} />
        )}
      </TouchableOpacity>
    );
  }
}

export { Button, ToggleButton };
