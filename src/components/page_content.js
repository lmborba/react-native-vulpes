import React from 'react';
import { ScrollView, View } from 'react-native';
import style from '../styles/content';

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
      {props.children}
    </ScrollView>
  );
};
