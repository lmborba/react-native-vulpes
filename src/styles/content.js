import { Colors } from '../colors';
import { windowHeight, flexHeight } from './windowHeight';

const styleContent = {
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  backgroundColor: Colors.white,
  marginTop: -24,
  paddingLeft: 16,
  paddingRight: 16,
  flex: 1,
};

export default {
  contentContainer: {
    ...styleContent,
  },
  contentContainerList: {
    paddingTop: 32,
    paddingBottom: 16,
  },
  noPadding: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  pageContainer: {
    height: windowHeight,
    flex: flexHeight,
    flexDirection: 'column',
  },
  dummyView: {
    height: 32,
  },
  contentTitle: {
    marginBottom: 24,
  },
  onHelper: {
    position: 'absolute',
    padding: 3,
    right: 0,
  },
};
