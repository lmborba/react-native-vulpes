import { getColors } from '../colors';

export default (theme) => {
  const colors = getColors(theme);
  return {
    divider: {
      borderBottomWidth: 1,
      borderBottomColor: colors('gray.40'),
      marginTop: 16,
      marginBottom: 16,
    },
  };
};
