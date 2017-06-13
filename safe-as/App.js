import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-material-design';
import NavBar from './components/NavBar'
import NewReport from './components/NewReport'

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <NavBar/>
        <Button value="New Report" raised={true} onPress={()=> console.log("I pressed a raised button")} />
        <Button value="Current Report" raised={true} onPress={()=> console.log("I pressed a flat button")} />
        <Button value="About SafeAs" raised={true} onPress={()=> console.log("I pressed a flat button")} />
        <NewReport />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  button: {
    width: 280,
    margin: 10,
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
