import React from 'react';

import Touchable from 'react-native-platform-touchable';
const TabBarButtom = props => (
  <Touchable
    delayPressIn={0}
    background={Touchable.Ripple('#4D4D4D', true)}
    {...props}>
    {props.children[0]}
  </Touchable>
);

export default TabBarButtom;
