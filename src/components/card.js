import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { getColors } from '../colors';
import VulpesContext from '../contexts/VulpesContext';
import useVulpes from '../hooks/useVulpes';
import getStyle from '../styles/card';
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
    const style = getStyle(theme);
    const zeroPadding = this.props.noPadding
      ? style.cardContainerZeroPadding
      : {};

    let cardContainer = {
      ...getStyle(theme).cardContainer,
      ...zeroPadding,
    };

    cardContainer = { ...cardContainer, ...this.props.cardContainer };

    const MainComponent = this.props.onPress ? TouchableOpacity : View;

    return (
      <MainComponent onPress={this.props.onPress} style={this.props.style}>
        <View style={cardContainer}>{this.props.children}</View>
        <View style={getStyle(theme).outerCardBorder}>
          <View
            style={{ ...getStyle(theme).cardTopBorder, ...this.changedColor() }}
          />
        </View>
      </MainComponent>
    );
  }
}
Card.contextType = VulpesContext;

const CardSeparator = () => {
  const { theme } = useVulpes();
  const style = getStyle(theme);
  return <View style={style._cardSeparator} />;
};

const TicketCardSeparator = (props) => {
  const { theme } = useVulpes();
  const style = getStyle(theme);
  return (
    <View style={style.cardSeparator}>
      <View style={style.cardSeparatorLeft} />
      <CardSeparator />
      <View style={style.cardSeparatorRight} />
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
  const style = getStyle(theme);
  return (
    <View style={style.checkinImageOuter}>
      {props.checked ? (
        <Image source={checkedImage} style={style.checkinImage} />
      ) : (
        <Image source={uncheckedImage} style={style.checkinImage} />
      )}
    </View>
  );
};

const TicketCheckinCardSeparator = (props) => {
  const { theme } = useVulpes();
  const style = getStyle(theme);

  return (
    <View style={style.ticketProfileCardDividerContainer}>
      <View style={style.profileCardDividerContent}>
        <View style={style.cardSeparator}>
          <View style={style.cardSeparatorLeft} />
          <CardSeparator />
          <View style={style.cardSeparatorRight} />
        </View>
      </View>
      <View style={style.ticketProfileCardImgContent}>
        <CheckinImage checked={props.checked} />
      </View>
    </View>
  );
};

const TicketProfileCardSeparator = (props) => {
  const { theme } = useVulpes();
  const style = getStyle(theme);
  const colors = getColors(theme);
  return (
    <View style={style.ticketProfileCardDividerContainer}>
      <View style={style.profileCardDividerContent}>
        <View style={style.cardSeparator}>
          <View style={style.cardSeparatorLeft} />
          <CardSeparator />
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
  const { theme } = useVulpes();
  const style = getStyle(theme);
  if (!props.source) {
    const sMargin = { marginBottom: 16 };
    return (
      <View style={[style.profileCardDividerContainer, sMargin]}>
        <View style={style.profileCardDivider} />
      </View>
    );
  }

  return (
    <View style={style.profileCardDividerContainer}>
      <View style={style.profileCardDivider} />
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
  const style = getStyle(theme);
  return (
    <View style={style.cardCoverContainer}>
      <ImageBackground
        source={source}
        style={style.cardContainerCoverBackground}
        imageStyle={style.cardContainerCoverImage}
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
    const style = getStyle(theme);
    return (
      <Card cardContainer={style.miniCardContainer} {...this.props}>
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
          <View style={style.miniCardContentStyle}>{this.props.children}</View>
        </View>
      </Card>
    );
  }
}
MiniProfileCard.contextType = VulpesContext;

const IllustrationOnCard = (props) => {
  const { theme } = useVulpes();
  const style = getStyle(theme);
  return <Image source={props.source} style={style.illustrationOnCard} />;
};

export class IllustrationMiniCard extends Component {
  render() {
    const { theme } = this.context;
    const style = getStyle(theme);
    return (
      <Card
        cardContainer={style.illustrationCardContainer}
        color={'singleton.transparent'}
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
IllustrationMiniCard.contextType = VulpesContext;

export class UploadCard extends Component {
  handlePress() {
    const { onClose } = this.props;
    onClose && onClose();
  }

  render() {
    const { theme } = this.context;
    const { filename } = this.props;
    const style = getStyle(theme);
    return (
      <Card
        cardContainer={style.uploadCardContainer}
        color={'singleton.transparent'}
        {...this.props}
      >
        <View style={style.uploadCardIconContainer}>
          <Icon
            style={style.uploadCardIcon}
            name={'file'}
            size={24}
            color={'singleton.white'}
          />
        </View>
        <View style={style.uploadCardContentContainer}>
          <View style={style.uploadCardLabelContainer}>
            <Regular numberOfLines={1}>{filename}</Regular>
          </View>
          <Button
            color={'gray.100'}
            onPress={this.handlePress.bind(this)}
            ghost
          >
            <Icon size={16} name={'close'} />
          </Button>
        </View>
      </Card>
    );
  }
}
UploadCard.contextType = VulpesContext;

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
  const style = getStyle(theme);
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
        style={[style.bannerCardGradient, { height: cardHeight }]}
      >
        <View style={style.outerViewBannerCard}>
          <View style={style.imageInBannerCard}>
            <Image source={source} style={imageStyle} />
          </View>

          <View style={style.textsViewBannerCard}>
            <RegularBold
              color="singleton.white"
              style={style.titleTextBannerCard}
            >
              {title}
            </RegularBold>
            <Regular color="singleton.white">{description}</Regular>
            {linkText && (
              <Button
                color="singleton.white"
                ghost
                style={style.buttonTextBannerCard}
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
  const style = getStyle(theme);
  return (
    <View style={[style.cardActionsContainer, pStyle]}>
      <FillSpace />
      <View>{children}</View>
    </View>
  );
};
