import React, { Component } from 'react';
import { View } from 'react-native';
import { BarChart as BChart } from 'react-native-gifted-charts';
import { Colors } from '../../colors';
import { Card } from '.././card';
import { H4, Small } from './../typos';

const containerStyle = {
  width: 'auto',
  minWidth: 300,
  flex: 1,
  marginBottom: 16,
  marginLeft: 8,
  marginRight: 8,
};
const bodyStyle = {
  flex: 1,
  overflow: 'hidden',
  paddingBottom: 16,
  alignItems: 'center',
  flexDirection: 'row',
};

export class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      with: null,
    };

    this.nItems = 0;
    const { data } = props;
    if (data && data.data && data.data.length > 0) {
      this.nItems = data.data.length;
    }
  }

  topLabel(value) {
    return <Small>{value}</Small>;
  }

  xLabelStyle() {
    return {
      fontSize: 10,
    };
  }

  onLayout({ nativeEvent }) {
    const { width } = nativeEvent.layout;

    const itens = this.nItems;
    const wa = width - 35 - 12 - 12;

    this.spacing = (wa * 0.2) / (itens - 1);
    this.barWidth = (wa * 0.8) / itens;

    this.setState({ width: width });
  }

  renderGraph(data) {
    if (!this.state.width) return null;

    for (const d of data.data) {
      d.topLabelComponent = () => this.topLabel(d.value);
      d.topLabelContainerStyle = { width: this.barWidth };
      d.onPress = () => console.log(d.value);
      d.labelTextStyle = this.xLabelStyle();
    }

    return (
      <BChart
        data={data.data}
        width={this.state.width - 35}
        barWidth={this.barWidth}
        spacing={this.spacing}
        initialSpacing={12}
        noOfSections={4}
        showYAxisIndices
        isAnimated
        cappedBars
        capThickness={1}
        capColor={Colors.dark_gray}
        showGradient
        gradientColor={Colors.dark_cyan}
        frontColor={Colors.light_cyan}
      />
    );
  }

  render() {
    const { data } = this.props;
    if (!data || !data.length === 0) return null;
    const headerStyle = { marginBottom: 16 };

    return (
      <Card style={containerStyle} cardContainer={{ flex: 1 }}>
        <H4 numberOfLines={1} style={headerStyle}>
          {data.title}
        </H4>

        <View style={bodyStyle} onLayout={this.onLayout.bind(this)}>
          {this.renderGraph(data)}
        </View>
      </Card>
    );
  }
}
