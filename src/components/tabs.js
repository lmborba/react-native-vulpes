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
            key={'tb' + i}
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
      selected: props.current ? props.current : 0,
    };
  }

  handleChange(newIndex) {
    this.setState(
      {
        selected: newIndex,
      },
      () => {
        this.props.onChangeTab && this.props.onChangeTab(newIndex);
      }
    );
  }

  tabTitles(children) {
    try {
      if (!children) return [];
      return React.Children.toArray(children).map((child, i) => {
        if (!child) return null;
        let { title, visible } = child.props;
        if (!title || visible === false) return null;
        return title;
      });
    } catch (error) {
      return [];
    }
  }

  render() {
    const { children, current, ...rest } = this.props;
    const { selected } = this.state;

    let currentTab = current === undefined ? selected : current;

    if (!children || children.length === 0) return null;
    const titles = this.tabTitles(children);
    return (
      <View {...rest}>
        <ListOfTabs
          titles={titles}
          selected={currentTab}
          onChange={this.handleChange.bind(this)}
        />
        <View>{children[currentTab]}</View>
      </View>
    );
  }
}

export const Tab = (props) => {
  return <View>{props.children}</View>;
};
