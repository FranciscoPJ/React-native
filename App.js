import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}/>
      <TextInput placeholder='Item de Lista' style={styles.input}/>
      <Button title='Agregar'/>
      <View>
      <View style={styles.itemsContainer}/>
        <Text style={styles.item}>Item 1</Text>
        <Text style={styles.item}>Item 2</Text>
        <Text style={styles.item}>Item 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:30,
  },
  inputContainer:{
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input:{
    width: 200,
    height: 50,
    borderBottomColor: 'black',
    borderLeftWidth: 1,
  },
  itemsContainer:{
    marginTop: 30,
  },
  item:{
    padding: 10,
    textAlign: 'center',
    color: 'gree',
  }
});
