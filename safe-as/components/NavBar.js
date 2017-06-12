import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Button from 'react-native-button';

export default class NavBar extends React.Component {
  // console.log(Dimensions.get('window'))

  render(){
    return(
      <View style={styles.navbar}>
        <Image style={styles.logo} source={require('../static/images/checkbox.png')} />
        <Text >
          SAFE-AS
        </Text>
      </View>
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
  },
  logo:{
    width: 50,
    height: 50,
  }
});

// alignItems: 'center',
// justifyContent: 'center',
