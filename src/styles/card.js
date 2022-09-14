import { getColors } from '../colors';

const radius = 10;
const borderTopHeight = 4;
const remainingBorderHeight = 1;
const cardPadding = 16;
const additionalTopBottomPadding = 4;
export default (theme) => {
  const colors = getColors(theme);
  const gray = colors('gray.40');
  const white = colors('singleton.white');
  return {
    outerCardBorder: {
      position: 'absolute',
      height: borderTopHeight,
      overflow: 'hidden',
      left: 0,
      right: 0,
    },
    checkinImageOuter: { marginTop: 11, marginBottom: 11 },
    checkinImage: { width: 40, height: 42 },
    cardTopBorder: {
      borderTopLeftRadius: radius,
      borderTopRightRadius: radius,
      backgroundColor: colors('primary.80'),
      height: radius,
    },
    cardSeparator: {
      marginTop: 15,
      marginBottom: 15,
      flexDirection: 'row',
      height: 24,
    },
    _cardSeparator: {
      flex: 1,
      height: 1,
      marginTop: 12,
      borderWidth: 0,
      overflow: 'hidden',
      backgroundColor: gray,
    },
    cardSeparatorLeft: {
      borderRightColor: gray,
      borderRightWidth: 1,
      borderTopColor: gray,
      borderTopWidth: 1,
      borderBottomColor: gray,
      borderBottomWidth: 1,
      marginLeft: -17,
      height: 24, // change these values according to your requirement.
      width: 16,
      borderTopRightRadius: 12,
      borderBottomRightRadius: 12,
      backgroundColor: white,
    },
    cardSeparatorRight: {
      borderLeftColor: gray,
      borderLeftWidth: 1,
      borderTopColor: gray,
      borderTopWidth: 1,
      borderBottomColor: gray,
      borderBottomWidth: 1,
      marginRight: -17,
      height: 24, // change these values according to your requirement.
      width: 16,
      borderTopLeftRadius: 12,
      borderBottomLeftRadius: 12,
      backgroundColor: white,
    },
    cardContainerZeroPadding: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },

    cardContainer: {
      borderRadius: radius,
      borderColor: gray,
      borderWidth: remainingBorderHeight,
      paddingTop: additionalTopBottomPadding + cardPadding,
      paddingLeft: cardPadding,
      paddingRight: cardPadding,
      paddingBottom: additionalTopBottomPadding + cardPadding,
      backgroundColor: white,
      overflow: 'hidden',
    },

    illustrationOnCard: {
      width: 80,
      height: 91,
      margin: -1,
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
    },

    // Upload card
    uploadCardContainer: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      height: 51,
      flexDirection: 'row',
      alignItems: 'center',
    },

    uploadCardIconContainer: {
      width: 80,
      height: 91,

      margin: -1,
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
      backgroundColor: colors('uploadCard.background'),
    },

    uploadCardIcon: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    uploadCardContentContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexGrow: 1,
    },

    uploadCardLabelContainer: {
      flex: 1,
      marginLeft: 16,
    },

    // IllustrationCard
    illustrationCardContainer: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },

    illustrationCardOuterStyle: {
      margin: 16,
      flex: 1,
    },

    miniCardContainer: {
      paddingTop: cardPadding,
      paddingBottom: cardPadding,
    },

    profileCardDivider: {
      borderBottomWidth: 1,
      borderBottomColor: gray,
    },
    profileCardDividerContainer: {
      marginLeft: -cardPadding,
      marginRight: -cardPadding,
      marginBottom: 32,
    },

    ticketProfileCardDividerContainer: {
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 10,
    },

    profileCardDividerContent: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
    },

    profileCardImgContent: {
      paddingLeft: cardPadding,
      paddingRight: cardPadding,
      position: 'absolute',
      marginTop: -32,
    },

    cardActionsContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      marginTop: 16,
      position: 'absolute',
      zIndex: 99,
      elevation: 99,
    },

    ticketProfileCardImgContent: {
      paddingLeft: cardPadding - 10,
      paddingRight: cardPadding - 10,
    },

    miniCardContentStyle: {
      flex: 1,
      paddingLeft: 8,
      paddingTop: 4,
    },
    bannerCardGradient: { height: 162, borderRadius: 10, overflow: 'hidden' },
    outerViewBannerCard: { flexDirection: 'row', height: '100%' },
    textsViewBannerCard: {
      flex: 1,
      flexDirection: 'column',
      padding: 16,
      paddingRight: 90,
    },

    cardCoverContainer: {
      flex: 1,
      flexDirection: 'row',
      height: 130,
      marginLeft: -17,
      marginRight: -17,
      marginTop: -21,
    },
    cardContainerCoverBackground: {
      flex: 1,
      height: 130,
      padding: 16,
    },
    cardContainerCoverImage: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },

    titleTextBannerCard: { marginBottom: 8 },
    buttonTextBannerCard: { paddingLeft: 0, marginTop: 12 },
    imageInBannerCard: { position: 'absolute', right: 0 },
  };
};
