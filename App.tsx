import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Tab from './navigation/stackNav';
import Counter from './navigation/counter';

const stack = createStackNavigator();

const App = () => {
  return (
    <Counter/>
    // <stack.Navigator>
    //   <stack.Screen name='First Screen' component={}  
    // </stack.Navigator>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: 400,
    textAlign:'center',
    alignContent:'center',
    fontSize:50,
    color:'black'
  }, buttonContainer: {
    color: 'black',
    marginBottom: 300
  }
});

export default App;
