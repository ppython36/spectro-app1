import { StatusBar } from 'expo-status-bar';
import Main from './src/Main'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Main/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initialText:{
    fontSize:20,
    color : 'red',
  }
});
