import React, {Component} from 'react';

import Card, {FOOD_CARD, RESTAURANT_LARGER_CARD} from '~/components/card';
import Section from '~/components/section';
import Header from '~/components/header';
import {Container, ArrowIcon, DropdownIcon} from './styles';
import {HeaderText} from '~/components/header/styles';
import {FlatList, Animated, Platform} from 'react-native';
import {getRestaurants, getRandomRestaurants} from '~/DAO/restaurants';
import ListFooter from '~/components/listFooter';
import CardWrapper from '~/components/cardWrapper';
import {getFoods} from '~/DAO/foods';
import ListHeader from '~/components/listHeader';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HEADER_HEIGHT = Platform.select({ios: hp('8%') + 20, android: hp('8%')});
const LIST_HEADER_HEIGHT = hp('7.5%') + HEADER_HEIGHT;

export default class Main extends Component {
  constructor(props) {
    super(props);
    const scrollAnim = new Animated.Value(0);
    const offsetAnim = new Animated.Value(0);
    const popularNearYouList = getRestaurants();
    const whenYrHungryNowList = getRestaurants(2);
    const recommendedDishesList = getFoods();
    const newOnUberEats = getRandomRestaurants(1)[0];

    this.state = {
      scrollAnim,
      offsetAnim,
      clampedScroll: Animated.diffClamp(
        Animated.add(
          scrollAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: 'clamp',
          }),
          offsetAnim,
        ),
        0,
        LIST_HEADER_HEIGHT - HEADER_HEIGHT,
      ),
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
      <Section
        title="Recommended Dishes"
        style={[Section.style, {paddingBottom: hp('10%')}]}>
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
    const {clampedScroll} = this.state;

    const navbarTranslate = clampedScroll.interpolate({
      inputRange: [0, LIST_HEADER_HEIGHT - HEADER_HEIGHT],
      outputRange: [0, -(LIST_HEADER_HEIGHT - HEADER_HEIGHT)],
      extrapolate: 'clamp',
    });

    return (
      <Container>
        <Header>
          <HeaderText>ASAP</HeaderText>
          <ArrowIcon />
          <HeaderText>R. Fulano de tal Lot Lorem, 105</HeaderText>
          <DropdownIcon />
        </Header>
        <Animated.ScrollView
          style={{paddingTop: hp('5.5%')}}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollAnim}}}],
            {useNativeDriver: true},
          )}>
          {this.popularNearYouSection()}
          {this.newOnUberEatsSection()}
          {this.whenYrHungryNowSection()}
          {this.recommendedDishes()}
        </Animated.ScrollView>
        <ListHeader style={{transform: [{translateY: navbarTranslate}]}} />
      </Container>
    );
  }
}
