import React from "react";
import { StyleSheet } from "react-native";
import { InputText } from "./InputLogin/InputText";

const styles = StyleSheet.create({
  inputText:{
    height:50,
    color:"white"
  },
 
});

export const StyledInput = ({ children, inputText, style,...restOfProps }) => {
  const inputStyles = [
    inputText && styles.inputText,
    style,

];
  return <InputText style={inputStyles}/> //<View style={inputStyles}>
    //{children}
  //</View>;
};