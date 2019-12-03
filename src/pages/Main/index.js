import React, {Component} from 'react';

import Card, {FOOD_CARD, RESTAURANT_LARGER_CARD} from '~/components/card';
import Section from '~/components/section';
import Header from '~/components/header';
import {Container, ArrowIcon, DropdownIcon} from './styles';
import {HeaderText} from '~/components/header/styles';
import {FlatList, ScrollView} from 'react-native';
import {getRestaurants, getRandomRestaurants} from '~/DAO/restaurants';
import ListFooter from '~/components/listFooter';
import CardWrapper from '~/components/cardWrapper';
import {getFoods} from '~/DAO/foods';
import ListHeader from '~/components/listHeader';

export default class Main extends Component {
  constructor(props) {
    super(props);
    const popularNearYouList = getRestaurants();
    const whenYrHungryNowList = getRestaurants(2);
    const recommendedDishesList = getFoods();
    const newOnUberEats = getRandomRestaurants(1)[0];
    this.state = {
      popularNearYouList,
      whenYrHungryNowList,
      recommendedDishesList,
      newOnUberEats,
    };
  }

  renderRestaurantCard(restaurant, index, list) {
    return (
      <CardWrapper {...this.cardWrapperProps(index, list)}>
        <Card content={restaurant} />
      </CardWrapper>
    );
  }

  renderFoodCard(food, index, list) {
    return (
      <CardWrapper {...this.cardWrapperProps(index, list)}>
        <Card content={food} cardType={FOOD_CARD} />
      </CardWrapper>
    );
  }

  cardWrapperProps(index, list) {
    if (index === 0) return {first: true};
    else if (index === list.length - 1) return {last: true};
    else return {};
  }

  popularNearYouSection() {
    return (
      <Section title="Popular Near You">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.state.popularNearYouList}
          renderItem={({item, index}) =>
            this.renderRestaurantCard(
              item,
              index,
              this.state.popularNearYouList,
            )
          }
          ListFooterComponent={() => <ListFooter />}
          keyExtractor={item => `${item.id}`}
        />
      </Section>
    );
  }
  whenYrHungryNowSection() {
    return (
      <Section
        title="When You're Hungry Now"
        subtitle="The fastest food to your door">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.state.whenYrHungryNowList}
          renderItem={({item, index}) =>
            this.renderRestaurantCard(
              item,
              index,
              this.state.whenYrHungryNowList,
            )
          }
          keyExtractor={item => `${item.id}`}
        />
      </Section>
    );
  }
  recommendedDishes() {
    return (
      <Section title="Recommended Dishes">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.state.recommendedDishesList}
          renderItem={({item, index}) =>
            this.renderFoodCard(item, index, this.state.recommendedDishesList)
          }
          keyExtractor={item => `${item.id}`}
        />
      </Section>
    );
  }
  newOnUberEatsSection() {
    return (
      <Section title="New on Uber Eats">
        <CardWrapper>
          <Card
            content={this.state.newOnUberEats}
            cardType={RESTAURANT_LARGER_CARD}
          />
        </CardWrapper>
      </Section>
    );
  }

  render() {
    return (
      <Container>
        <Header>
          <HeaderText>ASAP</HeaderText>
          <ArrowIcon />
          <HeaderText>R. Fulano de tal Lot Lorem, 105</HeaderText>
          <DropdownIcon />
        </Header>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <ListHeader />}
          data={[
            this.popularNearYouSection(),
            this.newOnUberEatsSection(),
            this.whenYrHungryNowSection(),
            this.recommendedDishes(),
          ]}
          renderItem={({item}) => item}
          keyExtractor={(item, index) => `section-${index}`}
        />
      </Container>
    );
  }
}
