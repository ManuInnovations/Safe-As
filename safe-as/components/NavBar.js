import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';

export default class NavBar extends React.Component {
  return(){
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
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
