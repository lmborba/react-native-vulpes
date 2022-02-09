import React from 'react';
import {
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import style from '../styles/content';
import { ContentMessage } from './content_message';
import { Icon } from './icon';
import { H4 } from './typos';
import { Spinner } from './spinner';

export const Page = (props) => (
  <View style={{ ...style.pageContainer, ...props.style }}>
    {props.children}
  </View>
);
export const BackgroundPage = (props) => {
  return (
    <View style={style.pageContainer}>
      <ImageBackground
        source={props.image}
        resizeMode="cover"
        style={style.backgroundImageStyle}
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

const containerStyle = ({ containerStyle: cStyle, isBackground }) => {
  const s = [style.contentContainer];
  if (isBackground) s.push({ backgroundColor: 'transparent' });
  if (cStyle) s.push(cStyle);

  return s;
};

const contentStyle = ({ style: cStyle, noPadding, isBackground }) => {
  const s = [style.regularPadding, { flex: 1 }];
  if (noPadding) s.push(style.noPadding);
  if (isBackground) s.push(style.backgroundContent);
  if (containerStyle) s.push(cStyle);

  return s;
};

const refreshControl = ({ onRefresh, refreshing }) => {
  if (!onRefresh) return null;
  return (
    <RefreshControl refreshing={refreshing || false} onRefresh={onRefresh} />
  );
};

const HelperBtn = ({ onHelper }) => {
  if (!onHelper) return null;
  return (
    <TouchableOpacity style={style.onHelper} onPress={onHelper}>
      <Icon name="help" size={20} />
    </TouchableOpacity>
  );
};

const Title = ({ title }) => {
  if (!title) return null;
  return <H4 style={style.contentTitle}>{title}</H4>;
};

const Loading = () => {
  const s = { padding: 20 };
  return <Spinner style={s} />;
};

const MainContent = (props) => {
  const content = props.loading ? <Loading /> : props.children;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={containerStyle(props)}
    >
      {content}
    </KeyboardAvoidingView>
  );
};

export const ContentView = (props) => {
  return (
    <MainContent {...props}>
      <View {...props} style={contentStyle(props)}>
        {props.children}
      </View>
    </MainContent>
  );
};

export const Content = (props) => {
  return (
    <MainContent {...props}>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        refreshControl={refreshControl(props)}
        {...props}
        style={contentStyle(props)}
      >
        <ContentMessage data={props.message} />
        <View style={style.dummyView} />
        <View>
          <Title title={props.title} />
          <HelperBtn onHelper={props.onHelper} />
        </View>
        {props.children}
      </ScrollView>
    </MainContent>
  );
};

export const ContentList = ({ noPadding, style: customStyle, ...props }) => {
  const SepItemDefault = () => {
    const sepStyle = { height: 16 };
    return <View style={sepStyle} />;
  };

  let header = () => {
    return (
      <View>
        {props.title && <H4 style={style.contentTitle}>{props.title}</H4>}
        {props.ListHeaderComponent}
      </View>
    );
  };
  return (
    <MainContent {...props}>
      <FlatList
        contentContainerStyle={style.contentContainerList}
        ItemSeparatorComponent={SepItemDefault}
        {...props}
        ListHeaderComponent={header}
        style={contentStyle(props)}
      >
        {props.children}
      </FlatList>
    </MainContent>
  );
};
