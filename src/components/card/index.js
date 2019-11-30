import React from 'react';

import {
  Container,
  Image,
  DescriptionContainer,
  Title,
  TagContainer,
  Tag,
  TagText,
  Star,
  InfoText,
  InfoContainer,
  CircleSmall,
} from './styles';

const Card = () => (
  <Container>
    <Image
      source={require('../../assets/images/restaurants/acai-online.jpg')}
    />
    <DescriptionContainer>
      <Title>Tigela grande</Title>
      <InfoContainer>
        <InfoText>$</InfoText>
        <CircleSmall />
        <InfoText>Chinese </InfoText>
      </InfoContainer>
      <TagContainer>
        <Tag>
          <TagText>35-40 Min</TagText>
        </Tag>
        <Tag>
          <TagText>4.7</TagText>
          <Star />
          <InfoText>(152)</InfoText>
        </Tag>
      </TagContainer>
    </DescriptionContainer>
  </Container>
);

export default Card;
