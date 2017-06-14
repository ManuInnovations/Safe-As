import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';

export default class Buttons extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Button
          containerStyle={styles.button}
          style={styles.buttonFont}>
          New Report
        </Button>

        <Button
          containerStyle={styles.button}
          style={styles.buttonFont}>
          Current Report
        </Button>

        <Button
          containerStyle={styles.button}
          style={styles.buttonFont}>
          About Safe-As
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF69B4',
  },
  button: {
    margin: 10,
    padding:10,
    height:45,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'grey',
    width: 300,
  },
  buttonFont: {
    fontSize: 20,
    color: 'white'
  }
});

//alignItems = makes things central and stops it from stretching
