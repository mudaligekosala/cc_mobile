import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({
    onChangeText,
    placeholder
}) => (
    <TextInput
                placeholder={placeholder}
                padding={15}
                style={styles.textInput}
                onChangeText={onChangeText}
              />
)


const styles = StyleSheet.create({
    
    textInput: {
      width: "100%",
      borderWidth: 1,
      borderRadius: 80,
      marginTop: 20
    },
   
  });

  export default Input;
  