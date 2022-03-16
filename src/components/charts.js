import React, { Component } from 'react';
import { View } from 'react-native';
import { Card } from './card';
import { BarChart as BChart } from './charts/BarChart';
import { PieChart as PChart } from './charts/PieChart';
import { StackChart as SChart } from './charts/StackChart';
import { ModalHelper } from './modal_helper';
import { H4 } from './typos';

const containerStyle = {
  width: 'auto',
  minWidth: 350,
  flex: 1,
  marginBottom: 16,
  marginLeft: 8,
  marginRight: 8,
  minHeight: 320,
  // borderWidth:1
  // height:'100%'
};
const bodyStyle = {
  flex: 1,
  height: 200,
  overflow: 'hidden',
  alignItems: 'center',
  flexDirection: 'row',
};

class CardChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      with: null,
    };
  }

  onLayout({ nativeEvent }) {
    const { width } = nativeEvent.layout;
    this.setState({ width: width });
  }

  render() {
    const { data, children } = this.props;
    if (!data || !data.length === 0) return null;
    const headerStyle = {
      marginBottom: 24,
      flexDirection: 'row',
      alignItems: 'center',
    };

    return (
      <Card
        style={containerStyle}
        cardContainer={{ flex: 1 }}
        color={data.color}
      >
        <View style={headerStyle}>
          <H4 numberOfLines={1}>{data.title}</H4>
          <ModalHelper
            title={data.title}
            helper={data.helper}
            show={!!data.helper}
          />
        </View>

        <View style={bodyStyle} onLayout={this.onLayout.bind(this)}>
          {React.cloneElement(children, {
            width: this.state.width,
            data: data,
          })}
        </View>
      </Card>
    );
  }
}

export const BarChart = (props) => (
  <CardChart {...props}>
    <BChart />
  </CardChart>
);
export const PieChart = (props) => (
  <CardChart {...props}>
    <PChart />
  </CardChart>
);
export const StackChart = (props) => (
  <CardChart {...props}>
    <SChart />
  </CardChart>
);
