import React, { Component } from 'react';
import { View } from 'react-native';
import { getColors } from '../colors';
import VulpesContext from '../contexts/VulpesContext';
import AnimatedCircularProgress from './progress/AnimatedCircularProgress';
import { H1, Regular } from './typos';

const childrenContainerStyle = { top: -24 };
const progressInfoStyle = { alignItems: 'center' };

const ProgressInfo = ({ checkins, target, unit }) => {
  return (
    <View style={progressInfoStyle}>
      <H1>{checkins}</H1>
      <Regular>
        / {target} {unit}
      </Regular>
    </View>
  );
};

export class CircularProgress extends Component {
  get target() {
    const { target } = this.props;
    return target || 12;
  }

  get percentage() {
    const { checkins } = this.props;
    return (checkins * 100) / this.target;
  }

  get width() {
    const { size } = this.props;
    return size || 220;
  }

  get height() {
    return this.width / 2 + 4;
  }

  get unit() {
    const { unit } = this.props;
    return unit || 'check-ins';
  }

  render() {
    const { checkins } = this.props;
    const { theme } = this.context;
    const colors = getColors(theme);
    return (
      <AnimatedCircularProgress
        fill={this.percentage}
        style={this.circularProgressStyle()}
        size={this.width}
        width={8}
        containerHeight={this.height}
        containerWidth={this.width}
        backgroundWidth={4}
        arcSweepAngle={180}
        lineCap={'round'}
        backgroundColor={colors.light_gray}
        childrenContainerStyle={childrenContainerStyle}
        {...this.props}
      >
        <ProgressInfo
          checkins={checkins}
          target={this.target}
          unit={this.unit}
        />
      </AnimatedCircularProgress>
    );
  }

  circularProgressStyle() {
    return {
      height: this.height,
      width: this.width + 2,
    };
  }
}

CircularProgress.contextType = VulpesContext;
