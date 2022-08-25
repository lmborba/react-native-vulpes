import React, { Component } from 'react';
import { View } from 'react-native';
import { BarChart as BChart } from 'react-native-gifted-charts';
import { getColors } from '../../colors';
import VulpesContext from '../../contexts/VulpesContext';
import { SmallBold } from './../typos';

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
    return <SmallBold>{value}</SmallBold>;
  }

  xLabelStyle() {
    return {
      fontSize: 11,
      textAlign: 'center',
    };
  }

  renderGraph() {
    const { data, color } = this.props;
    if (!this.props.width) return null;

    const itens = this.nItems;
    const wa = this.props.width - 12 - 12;

    this.spacing = (wa * 0.2) / (itens - 1);
    this.barWidth = (wa * 0.8) / itens;

    if (!data || !data.data || data.data.length === 0) {
      console.error('BarChart:: No data defined');
      return null;
    }

    for (const d of data.data) {
      d.topLabelComponent = () => this.topLabel(d.value);
      d.topLabelContainerStyle = { width: this.barWidth };
      d.onPress = () => console.log(d.value);
      d.labelTextStyle = this.xLabelStyle();
    }
    const sGraph = { flex: 1, paddingBottom: 16, marginLeft: -35 };
    const { theme } = this.context;
    const colors = getColors(theme);
    return (
      <View style={sGraph}>
        <BChart
          data={data.data}
          width={this.props.width}
          barWidth={this.barWidth}
          spacing={this.spacing}
          initialSpacing={12}
          noOfSections={4}
          yAxisThickness={0}
          isAnimated
          yAxisLabelWidth={0}
          hideYAxisText
          cappedBars={false}
          capThickness={0}
          capColor={colors('gray.100')}
          showGradient
          gradientColor={colors(color)}
          frontColor={colors(color)}
        />
      </View>
    );
  }

  render() {
    const { data } = this.props;
    if (!data || !data.length === 0) return null;
    return this.renderGraph();
  }
}

BarChart.contextType = VulpesContext;
