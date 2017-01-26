import React from 'react'
import {
  Text,
  View
} from 'react-native';

export const Dot = ({
  styles, dotColor, dotBorderColor, activeDotColor, activeDotBorderColor, active
}) => {
  if (active) {
    return (
      <View
        style={[styles.dotStyle, styles.activeDotStyle, {
          backgroundColor: activeDotColor,
          borderWidth: 1,
          borderColor: activeDotBorderColor
        }]}
      />
    );
  } else {
    return (
      <View
        style={[styles.dotStyle, {
          backgroundColor: dotColor,
          borderWidth: 1,
          borderColor: dotBorderColor
        }]} />
    );
  }
}

export const RenderDots = (index, total, props) => {
  let dots = [];
  for (let i = 0; i < total; i++) {
    dots.push(React.createElement(Dot, {
      ...props,
      key: i,
      active: i === index
    }));
  }
  return dots;
}

export default RenderDots;
