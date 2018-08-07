import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  onChangeText = (text) => this.setState({ text });

  render() {
    return (
      <View style={styles.view}>
        <TextInput
          style={styles.textInput}
          placeholder="Type here to translate!"
          onChangeText={this.onChangeText}
        />
        <Text style={styles.text}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    fontSize: 24,
  },
  text: {
    padding: 10,
    fontSize: 42,
  },
});
