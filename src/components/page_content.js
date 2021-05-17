import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import style from '../styles/content';
import { H4 } from './typos';

export const Page = (props) => (
  <View style={style.pageContainer}>{props.children}</View>
);

export const Content = ({ noPadding, style: customStyle, ...props }) => {
  let completeStyle = style.contentContainer;
  if (noPadding) {
    completeStyle = {
      ...completeStyle,
      ...style.noPadding,
    };
  }
  completeStyle = { ...completeStyle, ...customStyle };
  return (
    <ScrollView
      style={completeStyle}
      disableScrollViewPanResponder={props.disableScrollViewPanResponder}
    >
      <View style={style.dummyView} />
      {props.title && <H4 style={style.contentTitle}>{props.title}</H4>}
      {props.children}
    </ScrollView>
  );
};

export const ContentList = ({ noPadding, style: customStyle, ...props }) => {
  let completeStyle = style.contentContainer;
  if (noPadding) {
    completeStyle = {
      ...completeStyle,
      ...style.noPadding,
    };
  }
  completeStyle = { ...completeStyle, ...customStyle };

  let header = () => {
    if (!props.title) return null;
    return <H4 style={style.contentTitle}>{props.title}</H4>;
  };

  return (
    <FlatList
      contentContainerStyle={style.contentContainerList}
      style={completeStyle}
      ListHeaderComponent={header.bind(this)}
      {...props}
    >
      {props.children}
    </FlatList>
  );
};
