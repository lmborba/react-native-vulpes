import { Platform } from 'react-native';
import { Colors } from '../colors';

const buttonHeight = 44;
const paddingHorizontal = 16;
const paddingVertical = 8;

const buttonStyle = (theme) => {
  const styles = {
    gogood: {
      borderRadius: buttonHeight / 2,
      paddingTop: paddingVertical,
      paddingBottom: paddingVertical,
      paddingLeft: paddingHorizontal,
      paddingRight: paddingHorizontal,
      alignItems: 'center',
      height: buttonHeight,
      flex: null,
      width: Platform.OS === 'web' ? 'fit-content' : null,
      alignSelf: 'flex-start',
      flexDirection: 'row',
    },
    dasa: {
      borderRadius: 4,
      paddingTop: paddingVertical,
      paddingBottom: paddingVertical,
      paddingLeft: paddingHorizontal,
      paddingRight: paddingHorizontal,
      alignItems: 'center',
      height: buttonHeight,
      flex: null,
      width: Platform.OS === 'web' ? 'fit-content' : null,
      alignSelf: 'flex-start',
      flexDirection: 'row',
    },
    sesi: {
      borderRadius: buttonHeight / 2,
      paddingTop: paddingVertical,
      paddingBottom: paddingVertical,
      paddingLeft: paddingHorizontal,
      paddingRight: paddingHorizontal,
      alignItems: 'center',
      height: buttonHeight,
      flex: null,
      width: Platform.OS === 'web' ? 'fit-content' : null,
      alignSelf: 'flex-start',
      flexDirection: 'row',
    },
  };
  return styles[theme || 'gogood'];
};

export default (theme) => {
  return {
    defaultStyle: {
      ...buttonStyle(theme),
      backgroundColor: Colors.dark_gray,
      borderColor: null,
      borderWidth: 0,
    },
    outlineStyle: {
      ...buttonStyle(theme),
      borderColor: Colors.dark_gray,
      borderWidth: 1,
    },
    ghostStyle: {
      ...buttonStyle(theme),
      backgroundColor: null,
      borderColor: null,
      borderWidth: 0,
    },
    blockOuter: {
      flex: 1,
      alignItems: 'center',
    },
    blockInner: {
      flexDirection: 'row',
    },
  };
};
