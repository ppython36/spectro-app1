import React from "react";
import Constants from "expo-constants";
import { Text, View, StyleSheet } from "react-native";
import StateItem from './contexts/contexItem/stateItem';

const Main = () => {
  return (
    <StateItem>
    <View style={styles.container}>
      <Text style={styles.initialText}>Spectro Proyect!</Text>
    </View>
    </StateItem>
  );

  
};
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
export default Main;
