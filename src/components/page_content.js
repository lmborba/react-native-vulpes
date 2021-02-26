import React from 'react';
import { View } from 'react-native';
import style from '../styles/content';

export const Page = (props) => (
  <View style={style.pageContainer}>{props.children}</View>
);

export const Content = (props) => {
  return <View style={style.contentContainer}>{props.children}</View>;
};
