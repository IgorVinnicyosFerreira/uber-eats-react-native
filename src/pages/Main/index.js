import React, {Component} from 'react';

import Card from '~/components/card';
import Section from '~/components/section';
import Header from '~/components/header';
import {Container, ArrowIcon, DropdownIcon, MarginContainer} from './styles';
import {HeaderText} from '~/components/header/styles';
import {FlatList} from 'react-native';
import {getRestaurants} from '~/DAO/restaurants';
import ListFooter from '~/components/ListFooter';

export default class Main extends Component {
  constructor(props) {
    super(props);
    const popularNearYouList = getRestaurants();
    this.state = {
      popularNearYouList,
    };
  }

  renderRestaurantCard(restaurant) {
    return <Card content={restaurant} />;
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
        <Section title="Popular Near You">
          <FlatList
            style={{paddingLeft: '2%'}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.state.popularNearYouList}
            renderItem={({item}) => this.renderRestaurantCard(item)}
            ListFooterComponent={() => <ListFooter />}
            keyExtractor={item => {
              console.log(item.id);
              return `${item.id}`;
            }}
          />
        </Section>
      </Container>
    );
  }
}
