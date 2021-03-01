import React from 'react';
import { View } from 'react-native';
import { Colors } from '../colors';
import { Regular } from './typos';

const listContainer = { marginTop: 8 };
const listItem = {
  padding: 16,
  borderBottomColor: Colors.light_gray,
  borderBottomWidth: 1,
};

export const List = (props) => {
  return <View style={listContainer}>{props.children}</View>;
};

export const ListItem = (props) => {
  return (
    <View style={listItem}>
      <Regular>{props.children}</Regular>
    </View>
  );
};
