import { Colors } from '../colors';

const radius = 10;
const borderTopHeight = 4;
const remainingBorderHeight = 1;
const cardPadding = 16;
const additionalTopBottomPadding = 4;

export default {
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
    backgroundColor: Colors.cyan,
    height: radius,
  },
  cardSeparator: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    height: 24,
  },
  dashContainer: {
    flex: 1,
    height: 1,
    marginTop: 12,
  },
  cardSeparatorLeft: {
    borderRightColor: Colors.light_gray,
    borderRightWidth: 1,
    borderTopColor: Colors.light_gray,
    borderTopWidth: 1,
    borderBottomColor: Colors.light_gray,
    borderBottomWidth: 1,
    marginLeft: -17,
    height: 24, // change these values according to your requirement.
    width: 16,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: Colors.white,
  },
  cardSeparatorRight: {
    borderLeftColor: Colors.light_gray,
    borderLeftWidth: 1,
    borderTopColor: Colors.light_gray,
    borderTopWidth: 1,
    borderBottomColor: Colors.light_gray,
    borderBottomWidth: 1,
    marginRight: -17,
    height: 24, // change these values according to your requirement.
    width: 16,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: Colors.white,
  },
  dashStyle: {
    borderWidth: 0,
    height: 1,
    backgroundColor: Colors.light_gray,
    overflow: 'hidden',
  },

  cardContainerZeroPadding: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },

  cardContainer: {
    borderRadius: radius,
    borderColor: Colors.light_gray,
    borderWidth: remainingBorderHeight,
    paddingTop: additionalTopBottomPadding + cardPadding,
    paddingLeft: cardPadding,
    paddingRight: cardPadding,
    paddingBottom: additionalTopBottomPadding + cardPadding,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },

  illustrationOnCard: {
    width: 80,
    height: 91,
    margin: -1,
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
  },

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
    borderBottomColor: Colors.light_gray,
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
