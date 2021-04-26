import React, { Component } from 'react';
import { View } from 'react-native';
import { Colors } from '../colors';
import { RegularBold } from '../components/typos';
import { Text } from '../components/text';
import { Fonts } from '../fonts';
import styles from '../styles/tags';

class Tag extends Component {
  renderField() {
    if (this.props.children) return this.renderChildren();
    return <RegularBold color={this.textColor()}>Enviar</RegularBold>;
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child, i) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          color: this.textColor(),
          fontStyle: Fonts.smallBold,
          style: this.textStyle({
            isFirst: i === 0,
            isIcon: child.type.displayName === 'Icon',
          }),
        });
      }

      if (typeof child === 'string') {
        return (
          <Text color={this.textColor()} fontStyle={Fonts.smallBold}>
            {child}
          </Text>
        );
      }
      return child;
    });
  }

  primaryColor() {
    if (this.props.color) return this.props.color;
    return 'dark_gray';
  }

  textColor() {
    const { outline, light, textColor } = this.props;
    if (textColor) return textColor;
    if (light) return 'black';
    if (outline) return 'black';
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
    const { outline } = this.props;
    if (outline) return null;
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

export { Tag };
