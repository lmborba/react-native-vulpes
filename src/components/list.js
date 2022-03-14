import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  checkedIcon,
  checkedListItem,
  listContainer,
  listItem,
  listItemText,
  navIconCont,
  titleStyle,
  touchStyle,
} from '../styles/list';
import { Icon } from './icon';
import { H4, Regular } from './typos';

const Title = (props) => {
  if (!props.title) return null;
  return <H4 style={titleStyle}>{props.title}</H4>;
};

export const List = (props) => {
  const cItens = React.Children.toArray(props.children).filter(
    (c) => c.props.visible !== false
  );

  const itemCount = cItens.length;
  return (
    <View style={[listContainer, props.style]}>
      <Title title={props.title} />
      {cItens.map((child, i) => {
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
  let param = { activeOpacity: 1, style: { ...listItem, ...props.style } };
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
