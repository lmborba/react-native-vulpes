import { Colors } from '../colors';
import { flexHeight, windowHeight } from './windowHeight';

const styleContent = {
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  backgroundColor: Colors.white,
  marginTop: -24,
  flex: 1,
  overflow: 'hidden',
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
  regularPadding: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  pageContainer: {
    height: windowHeight,
    flex: flexHeight,
    flexDirection: 'column',
    backgroundColor: 'transparent',
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
  backgroundImageStyle: {
    flex: 1,
    justifyContent: 'center',
    flexLayout: 'column',
  },
  backgroundContent: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 39,
  },
};
