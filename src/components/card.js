import React, { Component } from 'react';
import { View } from 'react-native';
import { Colors } from '../colors';
import style from '../styles/card';
import { Dash } from './dash';
import { Thumbnail } from './thumbnail';

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
      <View style={this.props.style}>
        <View style={style.cardContainer}>{this.props.children}</View>
        <View style={style.outerCardBorder}>
          <View style={{ ...style.cardTopBorder, ...this.changedColor() }} />
        </View>
      </View>
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
      <Card {...this.props}>
        <TicketCardSeparator />
        {this.props.children}
      </Card>
    );
  }
}

const ProfileCardSeparator = (props) => {
  return (
    <View style={style.profileCardDividerContainer}>
      <View style={style.profileCardDividerContent}>
        <View style={style.profileCardDivider} />
      </View>

      <View style={style.profileCardImgContent}>
        <Thumbnail size="medium" source={props.source} />
      </View>
    </View>
  );
};

export class ProfileCard extends Component {
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
      <Card {...this.props}>
        <ProfileCardSeparator source={this.props.source} />
        {this.props.children}
      </Card>
    );
  }
}
