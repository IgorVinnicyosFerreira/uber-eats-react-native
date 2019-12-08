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
  FoodContainer,
  LargerContainer,
  LargerContainerWithoutElevation,
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

const renderFoodCard = food => {
  return (
    <FoodContainer>
      <Image source={food.photo} />
      <DescriptionContainer>
        <Title>{food.name}</Title>
        <TagContainer>
          <Tag>
            <TagText>{food.preparationTime}</TagText>
          </Tag>
          <Tag>
            <TagText>R${food.price.toFixed(2)} Dish</TagText>
          </Tag>
        </TagContainer>
        <InfoText>Served by Lorem</InfoText>
      </DescriptionContainer>
    </FoodContainer>
  );
};

const renderDescriptionLargerCard = restaurant => {
  return (
    <DescriptionContainer>
      <Title>{restaurant.name}</Title>
      <InfoContainer>
        <InfoText>$</InfoText>
        {restaurant.categories.map(category => {
          return (
            <CategoryContainer
              key={`${restaurant.id}-${category}-newOnUberEats`}>
              <CircleSmall />
              <InfoText>{category}</InfoText>
            </CategoryContainer>
          );
        })}
      </InfoContainer>
      <TagContainer>
        <Tag>
          <TagText>{restaurant.deliveryTime}</TagText>
        </Tag>
      </TagContainer>
    </DescriptionContainer>
  );
};

const renderLargerCard = restaurant => {
  return (
    <LargerContainer>
      <Image source={restaurant.photo} />
      {renderDescriptionLargerCard(restaurant)}
    </LargerContainer>
  );
};

const renderLargerCardWithoutElevation = restaurant => {
  return (
    <LargerContainerWithoutElevation>
      <Image source={restaurant.photo} />
      {renderDescriptionLargerCard(restaurant)}
    </LargerContainerWithoutElevation>
  );
};

export const RESTAURANT_CARD = 1;
export const FOOD_CARD = 2;
export const RESTAURANT_LARGER_CARD = 3;
export const RESTAURANT_LARGER_CARD_WITHOUT_ELEVATION = 4;

const Card = ({content, cardType = RESTAURANT_CARD}) => {
  if (cardType === RESTAURANT_CARD) return renderRestaurantCard(content);
  if (cardType === FOOD_CARD) return renderFoodCard(content);
  if (cardType === RESTAURANT_LARGER_CARD) return renderLargerCard(content);
  if (cardType === RESTAURANT_LARGER_CARD_WITHOUT_ELEVATION)
    return renderLargerCardWithoutElevation(content);
  return <Container />;
};

export default Card;
