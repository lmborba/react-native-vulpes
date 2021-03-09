import React from 'react';
import { View, ScrollView } from 'react-native';
import style from '../styles/content';

export const Page = (props) => (
  <ScrollView style={style.pageContainer}>{props.children}</ScrollView>
);

export const Content = (props) => {
  return <View style={style.contentContainer}>{props.children}</View>;
};
