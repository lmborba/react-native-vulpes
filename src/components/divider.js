import React from 'react';
import { View } from 'react-native';
import styles from '../styles/divider';

export const Divider = (props) => {
  return <View style={[styles.divider, props.style]} />;
};
