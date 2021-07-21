import React, { Component } from 'react';
import { View, Dimensions, FlatList } from 'react-native';

export class Carousel extends Component {
  constructor(props) {
    super(props);
    const { width } = Dimensions.get('window');

    this.itemSep = props.itemSep || 16;
    this.itemWidth = props.width || width - 64;
    this.componentWidth = this.itemWidth + this.itemSep;
    this.carouselWidth = this.componentWidth;

    this.state = {
      currentIndex: props.firstIndex ? props.firstIndex : 0,
    };
  }

  componentExtraStyle() {
    return {
      width: this.itemWidth,
    };
  }
  _renderItem({ item, itemIndex, currentIndex }) {
    return <View style={this.componentExtraStyle()}>{item}</View>;
  }

  _itemSeparator() {
    return <View style={{ width: this.itemSep }} />;
  }

  flatContainerStyle(offset) {
    return {
      paddingLeft: offset,
      paddingRight: offset,
    };
  }

  render() {
    const {
      containerStyle,
      firstIndex,
      contentContainerStyle,
      contentOffset: offset,
    } = this.props;

    const mapped = this.mapChildren();
    return (
      <View style={containerStyle}>
        <FlatList
          {...this.props}
          width={null}
          contentOffset={null}
          initialNumToRender={3}
          getItemLayout={(data, index) => ({
            length: this.componentWidth,
            offset: this.componentWidth * index,
            index,
          })}
          initialScrollIndex={firstIndex}
          contentContainerStyle={[
            this.flatContainerStyle(offset),
            { ...contentContainerStyle },
          ]}
          horizontal={true}
          ItemSeparatorComponent={() => this._itemSeparator()}
          directionalLockEnabled={true}
          decelerationRate={'fast'}
          data={mapped}
          renderItem={this._renderItem.bind(this)}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }

  mapChildren() {
    const { children } = this.props;
    return React.Children.toArray(children).map((child, i) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child);
      }
    });
  }
}
