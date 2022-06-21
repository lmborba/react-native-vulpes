import { Platform } from 'react-native';
import { getColors } from '../colors';

const tagHeight = 24;
const tagMediumHeight = 32;
const paddingHorizontal = 16;
const paddingVertical = 0;
const paddingMediumVertical = 6;

const tagStyle = {
  borderRadius: tagHeight / 2,
  paddingTop: paddingVertical,
  paddingBottom: paddingVertical,
  paddingLeft: paddingHorizontal,
  paddingRight: paddingHorizontal,
  height: tagHeight,
  flex: null,
  width: Platform.OS === 'web' ? 'fit-content' : null,
  alignItems: 'center',
  alignSelf: 'flex-start',
  flexDirection: 'row',
};

export default (theme) => {
  const colors = getColors(theme);
  return {
    defaultStyle: {
      ...tagStyle,
      backgroundColor: colors('gray.100'),
      borderColor: null,
      borderWidth: 0,
    },
    mediumMargin: {
      paddingTop: paddingMediumVertical,
      paddingBottom: paddingMediumVertical,
      height: tagMediumHeight,
    },
    outlineStyle: {
      ...tagStyle,
      borderColor: colors('gray.100'),
      borderWidth: 1,
    },
    ghostStyle: {
      ...tagStyle,
      backgroundColor: null,
      borderColor: null,
      borderWidth: 0,
    },
  };
};
