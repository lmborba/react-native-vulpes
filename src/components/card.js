import React, { Component } from 'react';
import { View } from 'react-native';
import { Colors } from '../colors';
import style from '../styles/card';
import { Dash } from './dash';

export class Card extends Component {
  changedColor() {
    const { color } = this.props;
    const data = {};
    if (color) {
      data.backgroundColor = Colors[color];
    }
    return data;
  }
  render() {
    return (
      <>
        <View style={style.cardContainer}>{this.props.children}</View>
        <View style={style.outerCardBorder}>
          <View style={{ ...style.cardTopBorder, ...this.changedColor() }} />
        </View>
      </>
    );
  }
}

const TicketCardSeparator = (props) => {
  return (
    <View style={style.cardSeparator}>
      <View style={style.cardSeparatorLeft} />
      <Dash
        style={style.dashContainer}
        dashColor={Colors.lightGray}
        dashThickness={0}
        dashGap={7}
        dashLength={7}
        dashStyle={style.dashStyle}
      />
      <View style={style.cardSeparatorRight} />
    </View>
  );
};

export class TicketCard extends Component {
  render() {
    return (
      <Card>
        <TicketCardSeparator />
        {this.props.children}
      </Card>
    );
  }
}
