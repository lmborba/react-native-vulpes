import { Dimensions } from 'react-native';
import { Colors } from '../colors';
const windowHeight = Dimensions.get('window').height;

export default {
  contentContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.white,
    marginTop: -24,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    flex: 1,
  },
  pageContainer: {
    height: windowHeight,
    flexDirection: 'column',
  },
};
