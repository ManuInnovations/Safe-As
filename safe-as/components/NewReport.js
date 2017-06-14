import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';

export default class NewReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View>
        <View style={styles.reportBox}>
          <Text style={styles.textBox}>Your name:</Text>
          <TextInput style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <View style={styles.reportBox}>
          <Text style={styles.textBox}>Site name:</Text>
          <TextInput style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reportBox: {
    flexDirection: 'row'
  },
  textBox: {
  },
  textInput: {
    flex: 2,
    backgroundColor: 'grey',
    alignSelf: 'stretch',
    fontSize: 20,
    width: 100,
  }
})
