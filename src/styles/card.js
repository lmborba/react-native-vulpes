import { Colors } from '../colors';

const radius = 10;
const borderTopHeight = 4;
const reaminingBorderHeight = 1;

export default {
  outerCardBorder: {
    position: 'absolute',
    height: borderTopHeight,
    overflow: 'hidden',
    left: 0,
    right: 0,
  },
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
  cardContainer: {
    borderRadius: radius,
    borderColor: Colors.light_gray,
    borderWidth: reaminingBorderHeight,
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 20,
  },
};
