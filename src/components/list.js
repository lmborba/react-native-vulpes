import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Colors } from '../colors';
import { Icon } from './icon';
import { Regular, H4 } from './typos';

const listContainer = { marginTop: 8, marginBottom: 16 };

const listItem = {
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 0,
  paddingRight: 0,
  borderBottomColor: Colors.light_gray,
  borderBottomWidth: 1,
  flexDirection: 'row',
};

const checkedListItem = {
  padding: 6,
  flexDirection: 'row',
};

const checkedIcon = {
  marginTop: 5,
  marginRight: 8,
};
const touchStyle = {
  flexDirection: 'row',
  flex: 1,
};

const navIconCont = {
  alignContent: 'flex-end',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  textAlign: 'center',
  alignSelf: 'center',
  verticalAlign: 'center',
  paddingRight: 5,
};

const titleStyle = {
  marginBottom: 8,
};
const listItemText = {
  flex: 1,
};

const Title = (props) => {
  if (!props.title) return null;
  return <H4 style={titleStyle}>{props.title}</H4>;
};

export const List = (props) => {
  const itemCount = (props.children && props.children.length) || 0;

  return (
    <View style={[listContainer, props.style]}>
      <Title title={props.title} />
      {React.Children.map(props.children, (child, i) => {
        const last = i === itemCount - 1;
        return React.cloneElement(child, {
          checked: props.checked,
          last: last,
        });
      })}
    </View>
  );
};

function listProps(props) {
  let param = { activeOpacity: 1, style: listItem };
  if (props.checked) {
    param.style = checkedListItem;
  }
  if (props.onPress) {
    param.activeOpacity = 0.2;
  }
  if (props.last) {
    param.style = {
      ...param.style,
      borderBottomWidth: 0,
    };
  }

  return param;
}

const NavIcon = (props) => {
  if (!props.show) return null;
  return (
    <View style={navIconCont}>
      <Icon size={12} name={'chevron_right'} />
    </View>
  );
};
const CheckedIcon = (props) => {
  if (!props.show) return null;
  return <Icon size={12} name={'check'} style={checkedIcon} />;
};

const Children = ({ children }) => {
  if (typeof children !== 'string') return children;
  return <Regular style={listItemText}>{children}</Regular>;
};

export const ListItem = (props) => {
  const params = listProps(props);
  return (
    <View style={params.style}>
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={params.activeOpacity}
        style={touchStyle}
      >
        <CheckedIcon show={props.checked} />
        <Children children={props.children} />
        <NavIcon show={props.onPress} />
      </TouchableOpacity>
    </View>
  );
};

export const ListItemNav = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={checkedListItem}>
      <Icon size={12} name={'check'} style={checkedIcon} />
      <Regular>{props.children}</Regular>
    </TouchableOpacity>
  );
};
