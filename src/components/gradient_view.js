import { parse as GradientParse } from 'gradient-parser';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../colors';

const stopToColor = (stop) => {
  switch (stop.type) {
    case 'hex':
      return '#' + stop.value;
    case 'literal':
      return stop.value;
    case 'rgb':
      return 'rgb(' + stop.value + ')';
    case 'rgba':
      return 'rgba(' + stop.value + ')';
  }
};

const stopToPosition = (stop) => {
  if (!stop.length.value) return null;
  return stop.length.value / 100.0;
};

const calcStart = (data) => {
  const angle = ((data.orientation.value % 360) + 360) % 360;
  if (angle > 180) {
    return { x: 1, y: 1 };
  } else {
    return { x: 0, y: 1 };
  }
};

const calcEnd = (data) => {
  const angle = ((data.orientation.value % 360) + 360) % 360;
  if (angle === 180) {
    return { x: 0, y: 0 };
  } else if (angle > 180) {
    return { x: 1 + (angle * Math.PI) / 180, y: 0 };
  } else {
    return { x: 0 + (angle * Math.PI) / 180, y: 0 };
  }
};

const GradientView = ({ children, ...props }) => {
  const grad = Colors[props.color];
  const parsed = GradientParse(grad)[0];
  let positions = parsed.colorStops.map(stopToPosition);
  positions = positions.filter((it) => it != null);
  const toRN = {
    colors: parsed.colorStops.map(stopToColor),
    start: calcStart(parsed),
    end: calcEnd(parsed),
  };
  if (positions.length === toRN.colors.length) {
    toRN.positions = positions;
  }

  return (
    <LinearGradient {...toRN} {...props}>
      {children}
    </LinearGradient>
  );
};

export { GradientView };
