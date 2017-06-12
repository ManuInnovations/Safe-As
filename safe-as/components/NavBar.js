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
    position: 'absolute',
    top: 30,
    flex: 1,
    flexDirection:'row',
    alignSelf: 'center',
    backgroundColor: 'grey',
  }
});

// alignItems: 'center',
// justifyContent: 'center',
