import React from 'react';
import Card from '~/components/card';
import Section from '~/components/section';
import Header from '~/components/header';
import {Container, ArrowIcon, DropdownIcon} from './styles';
import {HeaderText} from '~/components/header/styles';

const Main = () => (
  <Container>
    <Header>
      <HeaderText>ASAP</HeaderText>
      <ArrowIcon />
      <HeaderText>R. Fulano de tal Lot Lorem, 105</HeaderText>
      <DropdownIcon />
    </Header>
    <Section title="Popular Near You" subtitle="The fastest food to your door">
      <Card />
    </Section>
  </Container>
);

export default Main;
