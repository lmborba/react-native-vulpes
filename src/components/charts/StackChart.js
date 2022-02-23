import React, { Component } from 'react';
import { View } from 'react-native';
import { BarChart as Chart } from 'react-native-gifted-charts';
import { Small, SmallBold } from './../typos';

export class StackChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captionHeight: null,
    };

    this.nItems = 0;
    const { data } = props;
    if (data && data.data && data.data.length > 0) {
      this.nItems = data.data.length;
    }
    this.maxCaptionLayout = 5;
  }

  topLabel(value) {
    return <Small>{value}</Small>;
  }

  xLabelStyle() {
    return {
      fontSize: 10,
      textAlign: 'center',
    };
  }

  onCaptionLayout({ nativeEvent }) {
    const { height } = nativeEvent.layout;
    this.maxCaptionLayout -= 1;
    if (this.maxCaptionLayout < 0) return;
    if (Math.abs(height - this.state.captionHeight) < 3) return;
    this.setState({ captionHeight: height });
  }

  innerBarComponent(value) {
    const style = { flex: 1, justifyContent: 'center', alignItems: 'center' };
    return (
      <View style={style}>
        <Small>{value}</Small>
      </View>
    );
  }

  renderGraph(data) {
    if (!this.props.width) return null;

    const itens = this.nItems;
    const wa = this.props.width - 35 - 12 - 12;

    this.spacing = (wa * 0.2) / (itens - 1);
    this.barWidth = (wa * 0.8) / itens;

    for (const line of data.data) {
      line.labelTextStyle = this.xLabelStyle();
      for (const d of line.stacks) {
        d.onPress = () => console.log(d.value);
        d.marginBottom = 1;
        d.innerBarComponent = () => {
          if (!d.value) return null;
          return this.innerBarComponent(d.value);
        };
      }
    }

    const { captionHeight } = this.state;
    const gHeight = captionHeight ? 170 - captionHeight : 130;
    const sCaption = { marginTop: 8 };
    return (
      <View>
        <Chart
          height={gHeight}
          stackData={data.data}
          width={this.props.width - 35}
          barWidth={this.barWidth}
          spacing={this.spacing}
          initialSpacing={12}
          noOfSections={4}
          showYAxisIndices={true}
        />

        <View
          style={sCaption}
          onLayout={(event) => this.onCaptionLayout(event)}
        >
          <Caption data={data.data} width={this.props.width} />
        </View>
      </View>
    );
  }

  render() {
    const { data } = this.props;
    if (!data || !data.length === 0) return null;
    return this.renderGraph(data);
  }
}

const cptStyle = {
  flexDirection: 'row',
  paddingTop: 5,
  paddingBottom: 5,
  alignItems: 'center',
  paddingRight: 8,
};

const dotStyle = {
  width: 12,
  height: 12,
  marginRight: 6,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
};

const Caption = ({ data, width }) => {
  const oItens = {};

  for (const line of data) {
    for (const i of line.stacks) {
      if (i.name) oItens[i.name] = i.color;
    }
  }

  const itens = Object.keys(oItens).map((d, i) => {
    const color = { backgroundColor: oItens[d] };
    return (
      <View key={'c' + i} style={cptStyle}>
        <View style={{ ...dotStyle, ...color }} />
        <SmallBold>{d}</SmallBold>
      </View>
    );
  });

  const contStyle = {
    width: width,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  };
  return <View style={contStyle}>{itens}</View>;
};
