import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Button from 'react-native-button';

export default class NavBar extends React.Component {
  // console.log(Dimensions.get('window'))

  render(){
    return(
      <Text style={styles.navbar}>
        This is the NavBar
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    top: 25,
    borderWidth: 1,
    backgroundColor: 'grey',
    textAlign: 'center'
  }
});

// alignItems: 'center',
// justifyContent: 'center',
