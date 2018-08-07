import {
  StyleSheet, Text, TextInput, Button, TouchableHighlight, TouchableOpacity,
  TouchableWithoutFeedback, Alert, View
} from 'react-native';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  onChangeText = (text) => this.setState({ text });
  onPressButton = () => Alert.alert('You pressed the button!');
  onLongPressButton = () => Alert.alert('You Long-pressed the button!');

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity onPress={this.onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={this.onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableHighlight onPress={this.onPressButton} onLongPress={this.onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    padding: 20,
    color: 'white',
  },
});
