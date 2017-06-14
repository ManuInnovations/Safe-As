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
          <Text>Your name:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  textInput: {
    backgroundColor: 'grey',
  }
})
