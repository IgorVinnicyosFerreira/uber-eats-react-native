import React from 'react';

import {First, Last, BetweenCards} from './styles';

const CardWrapper = ({first = false, last = false, children}) => {
  if (first) {
    return <First>{children}</First>;
  } else if (last) {
    return <Last>{children}</Last>;
  }
  return <BetweenCards>{children}</BetweenCards>;
};

export default CardWrapper;
