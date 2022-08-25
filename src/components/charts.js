import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Card } from './card';
import { BarChart as BChart } from './charts/BarChart';
import { PieChart as PChart } from './charts/PieChart';
import { StackChart as SChart } from './charts/StackChart';
import { ModalHelper } from './modal_helper';
import { Text } from './text';
import { H4 } from './typos';

const emptyChartWrapper = {
  textAlign: 'center',
  alignSelf: 'center',
  flex: 1,
};

const containerStyle = {
  width: 'auto',
  minWidth: 400,
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

  renderContent() {
    const { data, children } = this.props;

    return React.cloneElement(children, {
      width: this.state.width,
      data: data,
    });
  }
  render() {
    const { title, helper, color } = this.props;
    const headerStyle = {
      marginBottom: 24,
      flexDirection: 'row',
      alignItems: 'center',
    };

    return (
      <Card style={containerStyle} cardContainer={{ flex: 1 }} color={color}>
        <View style={headerStyle}>
          <H4 numberOfLines={1}>{title}</H4>
          <ModalHelper title={title} helper={helper} show={!!helper} />
        </View>

        <View style={bodyStyle} onLayout={this.onLayout.bind(this)}>
          {this.renderContent()}
        </View>
      </Card>
    );
  }
}

const cardImage = {
  marginTop: 27,
  marginBottom: 25,
  height: 120,
  width: '100%',
  alignSelf: 'center',
  resizeMode: 'contain',
};

export const BarChart = (props) => (
  <CardChart {...props}>
    <BChart {...props} />
  </CardChart>
);
export const PieChart = (props) => (
  <CardChart {...props}>
    <PChart {...props} />
  </CardChart>
);
export const StackChart = (props) => (
  <CardChart {...props}>
    <SChart {...props} />
  </CardChart>
);

export const EmptyChart = (props) => (
  <CardChart {...props}>
    <View style={emptyChartWrapper}>
      <Image source={props.image} style={cardImage} />
      <Text color={'gray.100'}>{props.emptyText}</Text>
    </View>
  </CardChart>
);
