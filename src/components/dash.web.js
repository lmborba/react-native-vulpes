import React, { Component } from 'react';
import { Colors } from '../colors';

class Dash extends Component {
  dashedColor() {
    const color = Colors.light_gray;
    return color.substring(1);
  }

  style() {
    return {
      backgroundImage:
        "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23" +
        this.dashedColor() +
        "FF' stroke-width='1' stroke-dasharray='7%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
      height: 1,
    };
  }

  render() {
    return <div style={{ ...this.props.style, ...this.style() }} />;
  }
}

export { Dash };
