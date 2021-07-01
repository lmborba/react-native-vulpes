import React, { Component } from 'react';
import { View } from 'react-native';
import { Colors } from '../colors';
import { H1, Regular } from './typos';
import AnimatedCircularProgress from './progress/AnimatedCircularProgress';

const childrenContainerStyle = { top: -24 };
const cashbackInfoStyle = { alignItems: 'center' };

const CashbackInfo = ({ checkins, target }) => {
  return (
    <View style={cashbackInfoStyle}>
      <H1>{checkins}</H1>
      <Regular>/ {target} checkins</Regular>
    </View>
  );
};

export class CashbackProgress extends Component {
  render() {
    const { checkins, target, size } = this.props;
    const tgt = target || 12;
    const fill = (checkins * 100) / tgt;
    const defWidth = size || 220;

    const defHeight = defWidth / 2 + 4;
    return (
      <AnimatedCircularProgress
        fill={fill}
        style={{
          height: defHeight,
          width: defWidth + 2,
        }}
        size={defWidth}
        width={8}
        containerHeight={defHeight}
        containerWidth={defWidth}
        backgroundWidth={4}
        arcSweepAngle={180}
        lineCap={'round'}
        // onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor={Colors.light_gray}
        childrenContainerStyle={childrenContainerStyle}
        {...this.props}
      >
        <CashbackInfo checkins={checkins} target={tgt} />
      </AnimatedCircularProgress>
    );
  }
}
