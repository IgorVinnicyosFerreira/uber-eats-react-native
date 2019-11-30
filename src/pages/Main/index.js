import React from 'react';

import {View, StyleSheet, Dimensions} from 'react-native';
import Card from '~/components/card';
import Section from '~/components/section';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEBEB',
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Main = () => (
  <View style={styles.container}>
    <Section title="Popular Near You" subtitle="The fastest food to your door">
      <Card />
    </Section>
  </View>
);

export default Main;
