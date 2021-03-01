import React, { Component } from 'react';
import { View } from 'react-native';
import SideSwipe from 'react-native-sideswipe';

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 320,
      height: 200,
      currentIndex: 0,
    };
  }

  _renderItem({ item, itemIndex, currentIndex }) {
    return (
      <View style={this.componentExtraStyle(itemIndex === currentIndex)}>
        {item}
      </View>
    );
  }

  componentExtraStyle(active) {
    const ret = {
      margin: 4,
      width: this.componentWidth() - 8,
    };
    if (!active) {
      ret.transform = [
        {
          scale: 0.85,
        },
      ];
    }
    return ret;
  }

  handleLayout(event) {
    const { width, height } = event.nativeEvent.layout;
    this.setState({
      width: width,
      height: height,
    });
  }

  render() {
    const componentWidth = this.componentWidth();
    const { width } = this.state;
    const mapped = this.mapChildren();

    const contentOffset = (width - componentWidth) / 2;

    return (
      <View onLayout={this.handleLayout.bind(this)}>
        <SideSwipe
          index={this.state.currentIndex}
          itemWidth={componentWidth}
          style={{ width }}
          data={mapped}
          contentOffset={contentOffset}
          onIndexChange={(index) =>
            this.setState(() => ({ currentIndex: index }))
          }
          renderItem={this._renderItem.bind(this)}
        />
      </View>
    );
  }

  componentWidth() {
    let { width: componentWidth } = this.props;
    componentWidth = componentWidth ? componentWidth : 400;
    return componentWidth;
  }

  mapChildren() {
    const { children } = this.props;
    const mapped = React.Children.map(children, (child, i) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child);
      }
    });
    return mapped;
  }
}
