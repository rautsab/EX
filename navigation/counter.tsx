import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  }
  const decrease = () => {
    if(counter != 0) {setCounter(counter -1);}        
  }
  const reset = () => {
    setCounter(0);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{counter}</Text>
      <Button title='Increase' onPress={increase}></Button>
      <Button title='Decrease' onPress={decrease}></Button>
      <Button title='Reset' onPress={reset}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: 300,
    textAlign:'center',
    alignContent:'center',
    fontSize:50,
    color:'black'
  }, buttonContainer: {
    color: 'black',
    marginBottom: 300
  }
});

export default Counter;
