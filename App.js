import {
  StyleSheet, Text, SectionList, Alert, View
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
        <SectionList
          sections={[
            { title: 'D', data: ['David'] },
            { title: 'M', data: ['Moath', 'Mohammad'] },
            { title: 'A', data: ['Ahmad', 'Arunalu', 'Abdullah', 'Andrea'] },
            { title: 'J', data: ['James'] },
            { title: 'B', data: ['Bea'] },
            { title: 'E', data: ['Enoch'] },
            { title: 'S', data: ['Steven'] },
            { title: 'H', data: ['Henry'] },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});
