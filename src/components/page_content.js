import React from 'react';
import { FlatList, ScrollView, View, RefreshControl } from 'react-native';
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
  let refreshControl = () => {
    let { onRefresh, refreshing } = props;
    if (!onRefresh) return null;
    return (
      <RefreshControl refreshing={refreshing || false} onRefresh={onRefresh} />
    );
  };
  completeStyle = { ...completeStyle, ...customStyle };
  return (
    <ScrollView
      style={completeStyle}
      disableScrollViewPanResponder={props.disableScrollViewPanResponder}
      refreshControl={refreshControl()}
    >
      <View style={style.dummyView} />
      {props.title && <H4 style={style.contentTitle}>{props.title}</H4>}
      {props.children}
    </ScrollView>
  );
};

const SepItemDefault = () => {
  const sepStyle = { height: 16 };
  return <View style={sepStyle} />;
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
    return (
      <View>
        {props.title && <H4 style={style.contentTitle}>{props.title}</H4>}
        {props.ListHeaderComponent}
      </View>
    );
  };

  return (
    <FlatList
      contentContainerStyle={style.contentContainerList}
      style={completeStyle}
      ItemSeparatorComponent={SepItemDefault}
      {...props}
      ListHeaderComponent={header.bind(this)}
    >
      {props.children}
    </FlatList>
  );
};
