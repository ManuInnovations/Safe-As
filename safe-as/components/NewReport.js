import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';
import { Subheader } from 'react-native-material-design';

export default class NewReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.reportBox}>
      <Subheader text="New Report"/>
      <Text>Your name:</Text>
      <TextInput style={styles.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Text>Site name:</Text>
      <TextInput style={styles.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reportBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: 'grey',
    fontSize: 20,
    // width: 100,
  }
})
