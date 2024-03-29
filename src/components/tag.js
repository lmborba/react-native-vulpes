import React, { Component } from 'react';
import { View } from 'react-native';
import { getColors } from '../colors';
import { Text } from '../components/text';
import { RegularBold } from '../components/typos';
import VulpesContext from '../contexts/VulpesContext';
import { getFonts } from '../fonts';
import styles from '../styles/tags';

class Tag extends Component {
  renderField() {
    if (this.props.children) return this.renderChildren();
    return <RegularBold color={this.textColor()}>Enviar</RegularBold>;
  }

  renderChildren() {
    const { theme } = this.context;
    const fonts = getFonts(theme);
    return React.Children.toArray(this.props.children).map((child, i) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          color: this.textColor(),
          fontStyle: fonts.smallBold,
          style: this.textStyle({
            isFirst: i === 0,
            isIcon: child.type.displayName === 'Icon',
          }),
        });
      }

      if (typeof child === 'string') {
        return (
          <Text
            key={'.' + i}
            color={this.textColor()}
            fontStyle={fonts.smallBold}
          >
            {child}
          </Text>
        );
      }
      return child;
    });
  }

  primaryColor() {
    if (this.props.color) return this.props.color;
    return 'gray.100';
  }

  textColor() {
    const { outline, light, textColor } = this.props;
    if (textColor) return textColor;
    if (light) return 'singleton.black';
    if (outline) return 'singleton.black';
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
    const { outline } = this.props;
    if (outline) return null;
    const { theme } = this.context;
    const colors = getColors(theme);
    return colors(this.primaryColor());
  }

  borderColor() {
    const { outline } = this.props;
    if (!outline) return null;
    const { theme } = this.context;
    const colors = getColors(theme);
    return colors(this.primaryColor());
  }

  completeStyle() {
    const { ghost, outline, size } = this.props;
    const { theme } = this.context;
    const _styles = styles(theme);
    let toRet = {};
    if (size === 'medium') toRet = _styles.mediumMargin;
    if (outline) return { ..._styles.outlineStyle, ...toRet };
    if (ghost) return { ..._styles.ghostStyle, ...toRet };
    return { ..._styles.defaultStyle, ...toRet };
  }

  tagStyle() {
    return {
      ...this.completeStyle(),
      ...this.props.style,
      backgroundColor: this.backgroundColor(),
      borderColor: this.borderColor(),
    };
  }

  render() {
    return <View style={this.tagStyle()}>{this.renderField()}</View>;
  }
}

Tag.contextType = VulpesContext;

export { Tag };
