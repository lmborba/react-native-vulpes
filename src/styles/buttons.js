import { Platform } from 'react-native';
import { Colors } from '../colors';

const buttonHeight = 44;
const paddingHorizontal = 16;
const paddingVertical = 12;

const buttonStyle = {
  borderRadius: buttonHeight / 2,
  paddingTop: paddingVertical,
  paddingBottom: paddingVertical,
  paddingLeft: paddingHorizontal,
  paddingRight: paddingHorizontal,
  height: buttonHeight,
  flex: null,
  width: Platform.OS === 'web' ? 'fit-content' : null,
  alignSelf: 'flex-start',
  flexDirection: 'row',
};

export default {
  defaultStyle: {
    ...buttonStyle,
    backgroundColor: Colors.dark_gray,
    borderColor: null,
    borderWidth: 0,
  },
  outlineStyle: {
    ...buttonStyle,
    borderColor: Colors.dark_gray,
    borderWidth: 1,
  },
  ghostStyle: {
    ...buttonStyle,
    backgroundColor: null,
    borderColor: null,
    borderWidth: 0,
  },
};
