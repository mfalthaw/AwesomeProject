import {
  StyleSheet, Text, Image, ScrollView, Alert, View
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
      <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 96 }}>If you like</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 96 }}>scrolling down</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 96 }}>What's the best</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 96 }}>Framework around</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 96 }}>React native</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
      </ScrollView>

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
