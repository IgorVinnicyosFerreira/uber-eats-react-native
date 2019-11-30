import React from 'react';

import {Container, Title, Subtitle} from './styles';

const Section = ({children, title, subtitle}) => (
  <Container>
    {title && <Title>{title}</Title>}
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {children}
  </Container>
);

export default Section;
