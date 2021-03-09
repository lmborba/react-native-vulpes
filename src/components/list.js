import React from 'react';
import { View } from 'react-native';
import { Colors } from '../colors';
import { Icon } from './icon';
import { Regular } from './typos';

const listContainer = { marginTop: 8 };
const listItem = {
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 0,
  paddingRight: 0,
  borderBottomColor: Colors.light_gray,
  borderBottomWidth: 1,
};

const checkedListItem = {
  padding: 6,
  flexDirection: 'row',
};

const checkedIcon = {
  marginTop: 5,
  marginRight: 8,
};

export const List = (props) => {
  return (
    <View style={listContainer}>
      {React.Children.map(props.children, (child, i) => {
        return React.cloneElement(child, { checked: props.checked });
      })}
    </View>
  );
};

export const ListItem = (props) => {
  if (props.checked) {
    return (
      <View style={checkedListItem}>
        <Icon size={12} name={'check'} style={checkedIcon} />
        <Regular>{props.children}</Regular>
      </View>
    );
  } else {
    return (
      <View style={listItem}>
        <Regular>{props.children}</Regular>
      </View>
    );
  }
};
