import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Colors } from '../colors';
import style from '../styles/card';
import { Dash } from './dash';
import { Thumbnail } from './thumbnail';

const outerMiniCardStyle = { flexDirection: 'row' };

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
    let { cardContainer } = style;

    cardContainer = { ...cardContainer, ...this.props.cardContainer };

    return (
      <View style={this.props.style}>
        <View style={cardContainer}>{this.props.children}</View>
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

const TicketProfileCardSeparator = (props) => {
  return (
    <View style={style.ticketProfileCardDividerContainer}>
      <View style={style.profileCardDividerContent}>
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
      </View>
      <View style={style.ticketProfileCardImgContent}>
        <Thumbnail size="medium" source={props.source} />
      </View>
    </View>
  );
};

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

export class TicketProfileCard extends Component {
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
        <TicketProfileCardSeparator source={this.props.source} />
        {this.props.children}
      </Card>
    );
  }
}

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

export class MiniProfileCard extends Component {
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
      <Card cardContainer={style.miniCardContainer} {...this.props}>
        <View style={outerMiniCardStyle}>
          <Thumbnail source={this.props.source} size={'small'} />
          <View style={style.miniCardContentStyle}>{this.props.children}</View>
        </View>
      </Card>
    );
  }
}

const IllustrationOnCard = (props) => {
  return <Image source={props.source} style={style.illustrationOnCard} />;
};

export class IllustrationMiniCard extends Component {
  render() {
    return (
      <Card
        cardContainer={style.illustrationCardContainer}
        color={'transparent'}
        {...this.props}
      >
        <View style={outerMiniCardStyle}>
          <IllustrationOnCard source={this.props.source} />
          <View style={style.illustrationCardOuterStyle}>
            {this.props.children}
          </View>
        </View>
      </Card>
    );
  }
}
