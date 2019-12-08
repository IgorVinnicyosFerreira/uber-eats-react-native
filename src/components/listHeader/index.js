import React from 'react';

import {Container, Tag, Text, ChevronDown, Settings} from './styles';

const ListHeader = ({style}) => {
  return (
    <Container style={style}>
      <Tag>
        <Text>
          <Settings />
        </Text>
      </Tag>
      <Tag>
        <Text>Sort</Text>
        <ChevronDown />
      </Tag>
      <Tag>
        <Text>Price Range</Text>
        <ChevronDown />
      </Tag>
      <Tag>
        <Text>Dietary</Text>
        <ChevronDown />
      </Tag>
    </Container>
  );
};

export default ListHeader;
