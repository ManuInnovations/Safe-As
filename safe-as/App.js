import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';

import NavBar from './components/NavBar'
import NewReport from './components/NewReport'
import Buttons from './components/Buttons'
export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <NavBar/>
        <Buttons/>
        <NewReport />
        <Text>Check if you have the right PPE </Text>
        <Text>for the job you need to do.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF69B4',
  },
});

//alignItems = makes things central and stops it from stretching
