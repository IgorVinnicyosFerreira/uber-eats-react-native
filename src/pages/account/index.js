import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';

// import { Container } from './styles';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default class Account extends Component {
  render() {
    return <View style={styles.container} />;
  }
}
