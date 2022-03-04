import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { G, Text as SText } from 'react-native-svg';
import { Colors } from '../../colors';
import { Small } from './../typos';
import { PieChart as PChart } from './pie';

const colors = [
  'cyan',
  'blue',
  'purple',
  'green',
  'orange',
  'red',
  'yellow',
  'pink',
  'gray',
  'dark_cyan',
  'dark_red',
  'dark_purple',
  'dark_orange',
  'light_blue',
  'dark_gray',
  'light_pink',
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
  }

  dataFormatter(data) {
    if (!data || !data.data || !data.data.length === 0) return [];
    let pieData = data.data.filter((d, i) => d.value > 0);
    if (pieData.length === 0) return [];

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

  render() {
    const { data } = this.props;
    if (!data || !data.length === 0) return null;
    const pieData = this.dataFormatter(data);

    return (
      <>
        <Graph data={pieData} />
        <Caption data={pieData} />
      </>
    );
  }
}

const Graph = ({ data }) => {
  const gStyle = {
    maxHeight: 250,
    minWidth: 220,
    // height: 320,
    height: '100%',
    flex: 1,
  };

  return (
    <PChart
      style={gStyle}
      data={data}
      innerRadius={'20%'}
      outerRadius={'100%'}
      labelRadius={5}
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
  width: 200,
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
  minWidth: 80,
  justifyContent: 'center',
};

const Caption = ({ data }) => {
  const itens = data.map((d, i) => {
    const color = { backgroundColor: Colors[colors[i]] };
    return (
      <View key={'c' + i} style={cptStyle}>
        <View style={{ ...dotStyle, ...color }} />
        <Small numberOfLines={1}>{d.label}</Small>
      </View>
    );
  });

  return <View style={contStyle}>{itens}</View>;
};

const Labels = ({ slices, height, width }) => {
  return slices.map((slice, index) => {
    const { labelCentroid, pieCentroid, data } = slice;
    const val = data.percent + '%';
    if (data.percent < 6) return null;
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
          fontWeight="300"
          fontFamily={Platform.OS === 'web' ? 'Open Sans' : 'OpenSans-Light'}
        >
          {val}
        </SText>
      </G>
    );
  });
};
