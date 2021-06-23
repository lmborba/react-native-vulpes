import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Colors } from '../colors';
import { Regular, RegularBold } from './typos';

const tabsDefaultStyle = {
  paddingBottom: 10,
  paddingTop: 10,
  marginRight: 32,
  borderBottomWidth: 0,
  borderBottomColor: Colors.dark_gray,
  marginBottom: -1,
};

const TabButton = ({ focus, title, onSelect }) => {
  let TextComponent = Regular;
  let tabsStyle = { ...tabsDefaultStyle };
  if (focus) {
    TextComponent = RegularBold;
    tabsStyle.borderBottomWidth = 2;
  }

  return (
    <TouchableOpacity onPress={onSelect} style={tabsStyle}>
      <TextComponent color="dark_gray">{title}</TextComponent>
    </TouchableOpacity>
  );
};

const tabsContainerStyle = {
  marginRight: 5,
  borderBottomWidth: 1,
  borderBottomColor: Colors.light_gray,
  flexDirection: 'row',
};
const ListOfTabs = ({ titles, selected, onChange }) => {
  return (
    <View style={tabsContainerStyle}>
      {titles.map((title, i) => {
        if (!title) return;
        return (
          <TabButton
            title={title}
            focus={selected === i}
            onSelect={() => onChange(i)}
          />
        );
      })}
    </View>
  );
};

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  handleChange(newIndex) {
    this.setState({
      selected: newIndex,
    });
  }

  tabTitles(children) {
    try {
      if (!children) return [];

      if (!Array.isArray(children)) {
        let title = children.props.title;
        if (!title) return [];
        return [title];
      }

      return children.map((item) => {
        if (!item || !item.type) return null;
        if (item.type.name !== 'Tab') return null;
        return item.props.title;
      });
    } catch (error) {
      return [];
    }
  }

  render() {
    const { children, ...rest } = this.props;
    const { selected } = this.state;

    if (!children || children.length === 0) return;
    const titles = this.tabTitles(children);
    return (
      <View {...rest}>
        <ListOfTabs
          titles={titles}
          selected={selected}
          onChange={this.handleChange.bind(this)}
        />
        <View>{children[selected]}</View>
      </View>
    );
  }
}

export const Tab = (props) => {
  return <View>{props.children}</View>;
};
