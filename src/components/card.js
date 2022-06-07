import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { getColors } from '../colors';
import VulpesContext from '../contexts/VulpesContext';
import useVulpes from '../hooks/useVulpes';
import style from '../styles/card';
import { Button } from './button';
import { Dash } from './dash';
import { GradientView } from './gradient_view';
import { Icon } from './icon';
import { Tag } from './tag';
import { Text } from './text';
import { Thumbnail } from './thumbnail';
import { Regular, RegularBold } from './typos';
import { FillSpace } from './utils';

const outerMiniCardStyle = { flexDirection: 'row' };

const uncheckedImage = require('../../assets/images/unchecked.png');
const checkedImage = require('../../assets/images/checked.png');

export class Card extends Component {
  changedColor() {
    const { color } = this.props;
    const data = {};
    if (color) {
      const { theme } = this.context;
      const colors = getColors(theme);
      data.backgroundColor = colors(color);
    }
    return data;
  }

  render() {
    const { theme } = this.context;
    const zeroPadding = this.props.noPadding
      ? style.cardContainerZeroPadding
      : {};

    let cardContainer = {
      ...style(theme).cardContainer,
      ...zeroPadding,
    };

    cardContainer = { ...cardContainer, ...this.props.cardContainer };

    const MainComponent = this.props.onPress ? TouchableOpacity : View;

    return (
      <MainComponent onPress={this.props.onPress} style={this.props.style}>
        <View style={cardContainer}>{this.props.children}</View>
        <View style={style(theme).outerCardBorder}>
          <View
            style={{ ...style(theme).cardTopBorder, ...this.changedColor() }}
          />
        </View>
      </MainComponent>
    );
  }
}
Card.contextType = VulpesContext;

const TicketCardSeparator = (props) => {
  const { theme } = useVulpes();
  const colors = getColors(theme);
  const _style = style(theme);
  return (
    <View style={_style.cardSeparator}>
      <View style={_style.cardSeparatorLeft} />
      <Dash
        style={_style.dashContainer}
        dashColor={colors('gray.40')}
        dashThickness={0}
        dashGap={7}
        dashLength={7}
        dashStyle={_style.dashStyle}
      />
      <View style={_style.cardSeparatorRight} />
    </View>
  );
};

export class TicketCard extends Component {
  render() {
    return (
      <Card cardContainer={{ overflow: null }} {...this.props}>
        <TicketCardSeparator />
        {this.props.children}
      </Card>
    );
  }
}

const CheckinImage = (props) => {
  const { theme } = useVulpes();
  const _style = style(theme);
  return (
    <View style={_style.checkinImageOuter}>
      {props.checked ? (
        <Image source={checkedImage} style={_style.checkinImage} />
      ) : (
        <Image source={uncheckedImage} style={_style.checkinImage} />
      )}
    </View>
  );
};

const TicketCheckinCardSeparator = (props) => {
  const { theme } = useVulpes();
  const colors = getColors(theme);
  const _style = style(theme);

  return (
    <View style={_style.ticketProfileCardDividerContainer}>
      <View style={_style.profileCardDividerContent}>
        <View style={_style.cardSeparator}>
          <View style={_style.cardSeparatorLeft} />
          <Dash
            style={_style.dashContainer}
            dashColor={colors('gray.40')}
            dashThickness={0}
            dashGap={7}
            dashLength={7}
            dashStyle={_style.dashStyle}
          />
          <View style={_style.cardSeparatorRight} />
        </View>
      </View>
      <View style={_style.ticketProfileCardImgContent}>
        <CheckinImage checked={props.checked} />
      </View>
    </View>
  );
};

const TicketProfileCardSeparator = (props) => {
  const { theme } = useVulpes();
  const _style = style(theme);
  const colors = getColors(theme);
  return (
    <View style={_style.ticketProfileCardDividerContainer}>
      <View style={_style.profileCardDividerContent}>
        <View style={_style.cardSeparator}>
          <View style={_style.cardSeparatorLeft} />
          <Dash
            style={_style.dashContainer}
            dashColor={colors('gray.40')}
            dashThickness={0}
            dashGap={7}
            dashLength={7}
            dashStyle={_style.dashStyle}
          />
          <View style={_style.cardSeparatorRight} />
        </View>
      </View>
      <View style={_style.ticketProfileCardImgContent}>
        <Thumbnail size="medium" source={props.source} />
      </View>
    </View>
  );
};

const ProfileCardSeparator = (props) => {
  const { theme } = useVulpes();
  const _style = style(theme);
  if (!props.source) {
    const sMargin = { marginBottom: 16 };
    return (
      <View style={[_style.profileCardDividerContainer, sMargin]}>
        <View style={_style.profileCardDivider} />
      </View>
    );
  }

  return (
    <View style={_style.profileCardDividerContainer}>
      <View style={_style.profileCardDivider} />
      <View style={_style.profileCardImgContent}>
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
      const { theme } = this.context;
      const colors = getColors(theme);
      data.backgroundColor = colors(color);
    }
    return data;
  }
  render() {
    return (
      <Card {...this.props} cardContainer={{ overflow: null }}>
        <TicketProfileCardSeparator source={this.props.source} />
        {this.props.children}
      </Card>
    );
  }
}
TicketProfileCard.contextType = VulpesContext;

export class TicketCheckinCard extends Component {
  changedColor() {
    const { color } = this.props;
    const data = {};
    if (color) {
      const { theme } = this.context;
      const colors = getColors(theme);
      data.backgroundColor = colors(color);
    }
    return data;
  }
  render() {
    return (
      <Card {...this.props} cardContainer={{ overflow: null }}>
        <TicketCheckinCardSeparator checked={this.props.checked} />
        {this.props.children}
      </Card>
    );
  }
}
TicketCheckinCard.contextType = VulpesContext;

const CardTag = ({ icon, color, text, textColor, marginBottom }) => {
  const mgBottom = marginBottom ? { marginBottom: 8 } : {};
  return (
    <Tag
      textColor={textColor || 'singleton.white'}
      color={color || 'gray.100'}
      style={mgBottom}
    >
      {icon && <Icon name={icon} size={12} />}
      <Text>{text}</Text>
    </Tag>
  );
};

const CardCover = ({ tagText, tagIcon, tagColor, tagTextColor, source }) => {
  const { theme } = useVulpes();
  if (!source) {
    const dummyStyle = { height: 32 };
    return <View style={dummyStyle} />;
  }
  const _style = style(theme);
  return (
    <View style={_style.cardCoverContainer}>
      <ImageBackground
        source={source}
        style={_style.cardContainerCoverBackground}
        imageStyle={_style.cardContainerCoverImage}
      >
        {(tagText || tagIcon) && (
          <CardTag
            textColor={tagTextColor}
            color={tagColor}
            text={tagText}
            icon={tagIcon}
          />
        )}
      </ImageBackground>
    </View>
  );
};

export class ProfileCard extends Component {
  render() {
    const { cover, color, source, children, ...rest } = this.props;

    return (
      <Card {...this.props} color={cover ? 'singleton.transparent' : color}>
        <CardCover source={cover} {...rest} />
        <View>
          <ProfileCardSeparator source={source} />
          {children}
        </View>
      </Card>
    );
  }
}

export class MiniProfileCard extends Component {
  changedColor() {
    const { color } = this.props;
    const data = {};
    if (color) {
      const { theme } = this.context;
      const colors = getColors(theme);
      data.backgroundColor = colors(color);
    }
    return data;
  }
  render() {
    const { tagTextColor, tagColor, tagText, tagIcon } = this.props;
    const { theme } = this.context;
    const _style = style(theme);
    return (
      <Card cardContainer={_style.miniCardContainer} {...this.props}>
        {(tagText || tagIcon) && (
          <CardTag
            textColor={tagTextColor}
            color={tagColor}
            text={tagText}
            icon={tagIcon}
            marginBottom={true}
          />
        )}
        <View style={outerMiniCardStyle}>
          <Thumbnail source={this.props.source} size={'small'} />
          <View style={_style.miniCardContentStyle}>{this.props.children}</View>
        </View>
      </Card>
    );
  }
}
MiniProfileCard.contextType = VulpesContext;

const IllustrationOnCard = (props) => {
  const { theme } = useVulpes();
  const _style = style(theme);
  return <Image source={props.source} style={_style.illustrationOnCard} />;
};

export class IllustrationMiniCard extends Component {
  render() {
    const { theme } = this.context;
    const _style = style(theme);
    return (
      <Card
        cardContainer={_style.illustrationCardContainer}
        color={'singleton.transparent'}
        {...this.props}
      >
        <View style={outerMiniCardStyle}>
          <IllustrationOnCard source={this.props.source} />
          <View style={_style.illustrationCardOuterStyle}>
            {this.props.children}
          </View>
        </View>
      </Card>
    );
  }
}
IllustrationMiniCard.contextType = VulpesContext;

export const BannerCard = ({
  title,
  description,
  linkText,
  source,
  color,
  onPress,
  onPressLink,
  height,
  style: bStyle,
}) => {
  const { theme } = useVulpes();
  const _style = style(theme);
  const OuterComp = onPress ? TouchableOpacity : View;

  const cardHeight = height || 162;
  let width = 90;

  if (Image.resolveAssetSource) {
    const { width: w, height: h } = Image.resolveAssetSource(source);
    const ratio = w / h;
    width = Math.round(cardHeight * ratio);
  }
  let imageStyle = { height: cardHeight, width: width };

  return (
    <OuterComp onPress={onPress} style={bStyle}>
      <GradientView
        color={color}
        style={[_style.bannerCardGradient, { height: cardHeight }]}
      >
        <View style={_style.outerViewBannerCard}>
          <View style={_style.imageInBannerCard}>
            <Image source={source} style={imageStyle} />
          </View>

          <View style={_style.textsViewBannerCard}>
            <RegularBold
              color="singleton.white"
              style={_style.titleTextBannerCard}
            >
              {title}
            </RegularBold>
            <Regular color="singleton.white">{description}</Regular>
            {linkText && (
              <Button
                color="singleton.white"
                ghost
                style={_style.buttonTextBannerCard}
                onPress={onPressLink}
              >
                <Text>{linkText}</Text>
                <Icon name="long_arrow_right" />
              </Button>
            )}
          </View>
        </View>
      </GradientView>
    </OuterComp>
  );
};

export const CardActions = ({ children, style: pStyle }) => {
  const { theme } = useVulpes();
  const _style = style(theme);
  return (
    <View style={[_style.cardActionsContainer, pStyle]}>
      <FillSpace />
      <View>{children}</View>
    </View>
  );
};
