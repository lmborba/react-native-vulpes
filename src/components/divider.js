import React from 'react';
import { View } from 'react-native';
import useVulpes from '../hooks/useVulpes';
import styles from '../styles/divider';

export const Divider = (props) => {
  const { theme } = useVulpes();
  const _styles = styles(theme);
  return <View style={[_styles.divider, props.style]} />;
};
