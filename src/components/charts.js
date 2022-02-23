import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Card } from './card';
import { BarChart as BChart } from './charts/BarChart';
import { PieChart as PChart } from './charts/PieChart';
import { StackChart as SChart } from './charts/StackChart';
import { Icon } from './icon';
import { Modal } from './modal';
import { ModalContainer } from './modal_container';
import { H4, Regular } from './typos';

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
      visible: false,
    };
  }

  onLayout({ nativeEvent }) {
    const { width } = nativeEvent.layout;
    this.setState({ width: width });
  }

  renderHelper() {
    const { data } = this.props;

    if (!data.helper) return null;

    const ss = { padding: 8 };
    return (
      <TouchableOpacity
        style={ss}
        onPress={() => this.setState({ visible: true })}
      >
        <Icon name="help" size="16" />
      </TouchableOpacity>
    );
  }

  renderModal(data) {
    if (!data.helper) return null;

    const ss = { marginTop: 16, marginBottom: 16 };
    return (
      <ModalContainer
        visible={this.state.visible}
        onClose={() => this.setState({ visible: false })}
      >
        <Modal
          title="Informações adicionais"
          onClose={() => this.setState({ visible: false })}
          onGoto={() => this.setState({ visible: false })}
          gotoText="Fechar"
        >
          <Regular style={ss}>{data.helper}</Regular>
        </Modal>
      </ModalContainer>
    );
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
      <Card style={containerStyle} cardContainer={{ flex: 1 }}>
        <View style={headerStyle}>
          <H4 numberOfLines={1}>{data.title}</H4>
          {this.renderHelper()}
        </View>

        <View style={bodyStyle} onLayout={this.onLayout.bind(this)}>
          {React.cloneElement(children, {
            width: this.state.width,
            data: data,
          })}
          {this.renderModal(data)}
        </View>
      </Card>
    );
  }
}
