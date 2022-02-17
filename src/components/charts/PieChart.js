import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { G, Text as SText } from 'react-native-svg';
import { Colors } from '../../colors';
import { Card } from './../card';
import { H4, Small, SmallBold } from './../typos';
import { PieChart as PChart } from './pie';

const containerStyle = {
  minWidth: 300,
  flex: 1,
  marginBottom: 16,
  marginLeft: 8,
  marginRight: 8,
};
const bodyStyle = {
  flex: 1,
  height: 200,
  overflow: 'hidden',
  alignItems: 'center',
  flexDirection: 'row',
};
const colors = [
  'dark_cyan',
  'gray',
  'green',
  'yellow',
  'pink',
  'dark_red',
  'dark_purple',
  'dark_orange',
  'light_blue',
  'orange',
  'cyan',
  'dark_gray',
  'light_pink',
  'blue',
  'red',
  'purple',
  'light_red',
  'light_cyan',
  'light_yellow',
  'dark_pink',
  'light_purple',
  'dark_blue',
  'dark_green',
  'light_green',
  'dark_yellow',
  'light_gray',
  'light_orange',
];

export class PieChart extends Component {
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

  dataFormatter(data) {
    let pieData = data.data.filter((d, i) => d.value > 0);

    let total = pieData
      .map((item) => item.value)
      .reduce((prev, next) => prev + next);

    pieData = pieData.map((d, index) => ({
      ...d,
      percent: ((d.value * 100) / total).toFixed(1),
      svg: {
        fill: Colors[colors[index]],
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }));

    return pieData;
  }

  renderGraph(data) {}

  render() {
    const { data } = this.props;
    if (!data || !data.length === 0) return null;
    const headerStyle = { marginBottom: 16 };
    const pieData = this.dataFormatter(data);
    return (
      <Card style={containerStyle} cardContainer={{ flex: 1 }}>
        <H4 numberOfLines={1} style={headerStyle}>
          {data.title}
        </H4>

        <View style={[bodyStyle]} onLayout={this.onLayout.bind(this)}>
          <Graph data={pieData} />
          <Caption data={pieData} />
        </View>
      </Card>
    );
  }
}

const Graph = ({ data }) => {
  const gStyle = {
    maxHeight: 250,
    minWidth: 220,
    height: 350,
    flex: 1,
  };

  return (
    <PChart
      style={gStyle}
      data={data}
      innerRadius={'0%'}
      outerRadius={'85%'}
      labelRadius={75}
      sort={(a, b) => true}
    >
      <Labels />
    </PChart>
  );
};

const cptStyle = {
  flexDirection: 'row',
  minHeight: 24,
  paddingTop: 5,
  paddingBottom: 5,
  alignItems: 'center',
  paddingLeft: 8,
};

const dotStyle = {
  width: 16,
  height: 16,
  marginRight: 8,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
};
const contStyle = {
  maxWidth: '33%',
  minWidth: 130,
  justifyContent: 'center',
};

const Caption = ({ data }) => {
  const itens = data.map((d, i) => {
    const color = { backgroundColor: Colors[colors[i]] };
    return (
      <View style={cptStyle}>
        <View style={{ ...dotStyle, ...color }} />
        <SmallBold>{d.label}</SmallBold>
      </View>
    );
  });

  return <View style={contStyle}>{itens}</View>;
};

const Labels = ({ slices, height, width }) => {
  return slices.map((slice, index) => {
    const { labelCentroid, pieCentroid, data } = slice;
    return (
      <G key={index} x={pieCentroid[0]} y={pieCentroid[1]}>
        <SText
          key={index}
          x={labelCentroid[0]}
          y={labelCentroid[1]}
          fill={'black'}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={12}
          fontWeight="600"
          fontFamily={Platform.OS === 'web' ? 'Open Sans' : 'OpenSans-Bold'}
        >
          {data.percent}%
        </SText>
      </G>
    );
  });
};
