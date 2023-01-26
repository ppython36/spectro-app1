import React from "react";
import Constants from "expo-constants";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import StateItem from './contexts/contexItem/stateItem';





const Main = () => {
  return (
    <StateItem>
    <View style={styles.container}>
      <Text style={styles.logo}>Spectro Proyect!</Text>
      <View style={styles.container}>
        <View style={styles.inputView} >
        <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="UserName" 
            placeholderTextColor="white"
            //onChangeText={text => this.setState({password:text})}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="white"
            //onChangeText={text => this.setState({password:text})}
            />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    </View>
    </StateItem>
  );
  

  
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    initialText:{
      fontSize:20,
      color : 'red',
    },
    inputText:{
      height:50,
      color:"white"
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40,
      padding:20
    },
    inputView:{
      width:250,
      backgroundColor:"#465881",
      borderRadius:15,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      width:250,
      backgroundColor:"#fb5b5a",
      borderRadius:15,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    }
  });
export default Main;
