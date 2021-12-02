import React from 'react';
import {
  FlatList,
  ImageBackground,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import style from '../styles/content';
import { Icon } from './icon';
import { H4 } from './typos';

export const Page = (props) => (
  <View style={style.pageContainer}>{props.children}</View>
);

export const ContentView = ({ noPadding, style: customStyle, ...props }) => {
  let completeStyle = style.contentContainer;
  if (noPadding) {
    completeStyle = {
      ...completeStyle,
      ...style.noPadding,
    };
  }
  completeStyle = { ...completeStyle, ...customStyle };
  return (
    <View {...props} style={completeStyle}>
      {props.children}
    </View>
  );
};
export const Content = ({
  noPadding,
  style: customStyle,
  isBackground,
  ...props
}) => {
  let completeStyle = style.contentContainer;
  if (noPadding) {
    completeStyle = {
      ...completeStyle,
      ...style.noPadding,
    };
  }
  if (isBackground) {
    completeStyle = {
      ...completeStyle,
      backgroundColor: 'transparent',
      paddingLeft: 32,
      paddingRight: 32,
      paddingTop: 39,
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
      {...props}
      style={completeStyle}
      refreshControl={refreshControl()}
    >
      <View style={style.dummyView} />
      <View>
        {props.title && <H4 style={style.contentTitle}>{props.title}</H4>}
        {props.onHelper && (
          <TouchableOpacity style={style.onHelper} onPress={props.onHelper}>
            <Icon name="help" size={20} />
          </TouchableOpacity>
        )}
      </View>
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

const backgroundImageStyle = {
  flex: 1,
  justifyContent: 'center',
  flexLayout: 'column',
};

export const BackgroundPage = (props) => {
  console.log(props);
  return (
    <View style={style.pageContainer}>
      <ImageBackground
        source={props.image}
        resizeMode="cover"
        style={backgroundImageStyle}
      >
        {React.Children.toArray(props.children).map((child, i) => {
          return React.cloneElement(child, {
            isBackground: true,
          });
        })}
      </ImageBackground>
    </View>
  );
};
