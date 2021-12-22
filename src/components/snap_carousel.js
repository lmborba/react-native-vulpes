import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import SideSwipe from 'react-native-sideswipe';

export class SnapCarousel extends Component {
  constructor(props) {
    super(props);
    const { width } = Dimensions.get('window');

    this.itemSep = props.itemSep === undefined ? 16 : props.itemSep;
    this.itemWidth = props.width || width - 64;
    this.componentWidth = this.itemWidth + this.itemSep;
    this.carouselWidth = this.componentWidth;

    this.state = {
      currentIndex: props.firstIndex ? props.firstIndex : 0,
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
      marginLeft: this.itemSep / 2,
      marginRight: this.itemSep / 2,
      width: this.itemWidth,
    };
    if (!active) {
      ret.transform = [{ scale: 1 }];
    }
    return ret;
  }

  handleLayout(event) {
    const { width } = event.nativeEvent.layout;
    this.carouselWidth = width;
    this.forceUpdate();
  }

  offset() {
    const { noOffset, contentOffset } = this.props;
    if (noOffset !== undefined) return -this.itemSep;
    if (contentOffset) return contentOffset - this.itemSep / 2;
    return Math.round((this.carouselWidth - this.componentWidth) / 2);
  }

  render() {
    const { containerStyle, firstIndex } = this.props;

    const mapped = this.mapChildren();
    const threshold = Math.round(Math.max(this.componentWidth / 2 - 5, 0));
    return (
      <View onLayout={this.handleLayout.bind(this)} style={containerStyle}>
        <SideSwipe
          {...this.props}
          index={firstIndex}
          itemWidth={this.componentWidth}
          data={mapped}
          contentOffset={this.offset()}
          renderItem={this._renderItem.bind(this)}
          threshold={threshold}
        />
      </View>
    );
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
