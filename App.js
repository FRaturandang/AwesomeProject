import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  constructor() {
    super();
    this.state = {
      greeting: 'Selamat Datang'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.greeting}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;