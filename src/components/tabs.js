import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { getColors } from '../colors';
import useVulpes from '../hooks/useVulpes';
import { Regular, RegularBold } from './typos';

const TabButton = ({ focus, title, onSelect }) => {
  const { theme } = useVulpes();
  const colors = getColors(theme);
  const TextComponent = focus ? RegularBold : Regular;
  const tabsStyle = {
    paddingBottom: 10,
    paddingTop: 10,
    marginRight: 32,
    borderBottomWidth: 4,
    borderBottomColor: focus ? colors('tab.underline') : colors('gray.40'),
    marginBottom: -1,
  };

  return (
    <TouchableOpacity onPress={onSelect} style={tabsStyle}>
      <TextComponent color={focus ? 'tab.activeText' : 'tab.inactiveText'}>
        {title}
      </TextComponent>
    </TouchableOpacity>
  );
};

const tabsContainerStyle = (theme) => {
  const colors = getColors(theme);
  return {
    marginRight: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors('gray.40'),
    flexDirection: 'row',
  };
};

const ListOfTabs = ({ titles, selected, onChange }) => {
  const { theme } = useVulpes();
  return (
    <View style={tabsContainerStyle(theme)}>
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
