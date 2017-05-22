import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          containerStyle={styles.button}
          style={styles.buttonFont}>
          New Report
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding:10,
    height:45,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'grey'
  },
  buttonFont: {
    fontSize: 20,
    color: 'white'
  }
});
