import React from 'react';
import { TouchableOpacity,Text, StyleSheet } from 'react-native';
import { color } from '../utils/theme';

const Button = ({
    onPress,
    placeholder,
    btnStyle,
    btnTextStyle
}) => (
    <TouchableOpacity
                onPress={onPress}
                style={[styles.btnLogin, btnStyle]}
              >
                <Text style={[styles.txtLoginBtn, btnTextStyle]}>
                  {placeholder}
                </Text>
              </TouchableOpacity>
)


const styles = StyleSheet.create({
    
    txtLoginBtn: {
        fontSize: 16,
        padding: 16,
        color: color.fontColor
      },
      btnLogin: {
        width: "100%",
        backgroundColor: color.colorPrimary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        marginTop: 20
      },
   
  });

  export default Button;
  