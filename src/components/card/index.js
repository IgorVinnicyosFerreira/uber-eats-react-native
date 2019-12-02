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
  CategoryContainer,
} from './styles';

const renderRestaurantCard = restaurant => {
  const avaluation = Math.random() * 5;
  const avaluationAmount = Math.ceil(Math.random() * 200);
  return (
    <Container>
      <Image source={restaurant.photo} />
      <DescriptionContainer>
        <Title>{restaurant.name}</Title>
        <InfoContainer>
          <InfoText>$</InfoText>
          {restaurant.categories.map(category => (
            <CategoryContainer key={`${restaurant.id}.${category}`}>
              <CircleSmall />
              <InfoText>{category}</InfoText>
            </CategoryContainer>
          ))}
        </InfoContainer>
        <TagContainer>
          <Tag>
            <TagText>{restaurant.deliveryTime}</TagText>
          </Tag>
          <Tag>
            <TagText>{avaluation < 3 ? 3.7 : avaluation.toFixed(1)}</TagText>
            <Star />
            <TagText>({avaluationAmount})</TagText>
          </Tag>
        </TagContainer>
      </DescriptionContainer>
    </Container>
  );
};

const Card = ({content, cardType}) => renderRestaurantCard(content);

export default Card;
