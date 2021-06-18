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

  render() {
    const { children, ...rest } = this.props;
    const { selected } = this.state;

    const titles = children
      .map((item) => {
        if (item.type.name !== 'Tab') return null;
        return item.props.title;
      })
      .filter((item) => item != null);
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
