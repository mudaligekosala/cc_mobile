import React, { PureComponent } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { color, fontSize } from "../../utils/theme";
import InputView from '../../components/textInput';
import ButtonView from '../../components/button';



class Auth extends PureComponent {
  state = {
    isLogin: true,
    loginBtnText: "Login",
    chooseBtnText: `Still don't Have a Account Register here.`,
    comfirmUser: false,
    form:{
        username:{
            value:'',
            valid:false
        },
        password:{
            value:'',
            valid:false
        },
        email:{
            value:'',
            valid:false
        },
        comfPassword:{
            value:'',
            valid:false
        }
    }
  };

  userAuthAction = () => {
    this.props.navigation.navigate('ComfirmUser');

  };

  changeButtonText = () => {
    let isLogin = this.state.isLogin;
    if (isLogin === true) {
      this.setState({
        isLogin: false,
        loginBtnText: "Register",
        chooseBtnText: "Already a Member Login Here."
      });
    } else {
      this.setState({
        isLogin: true,
        loginBtnText: "Login",
        chooseBtnText: `Still don't Have a Account Register here.`
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.logo}
          source={require("../../image/logo.png")}
        >
          <View
            style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}
          >
            <View style={styles.header}>
              <Text style={styles.title}>scissors creation</Text>
            </View>

            <View style={styles.body}>
              <InputView placeholder={"username"} onChangeText={(value) => this.updateText('username', value) }/>
             
              {!this.state.isLogin &&
              <InputView placeholder={"email"} onChangeText={(value) => this.updateText('email', value) }/>
              }
              <InputView placeholder={"password"} onChangeText={(value) => this.updateText('password', value) }/>

            { !this.state.isLogin &&
              <InputView placeholder={"comfirm password"} onChangeText={(value) => this.updateText('comfPassword', value) }/>

            }
            <ButtonView placeholder= {this.state.loginBtnText}  onPress={() => this.userAuthAction()}/>
             
            <ButtonView placeholder= {this.state.chooseBtnText}  onPress={() => this.changeButtonText()} btnStyle={styles.btnChoose} btnTextStyle={styles.txtChooseBtn}/>

              
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "100%"
  },
  container: {
    backgroundColor: color.backgroundColor
  },
  header: {
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 80,
    marginTop: 20
  },
  
  title: {
    fontSize: fontSize.exLarge,
    fontWeight: "100",
    marginBottom: "25%"
  },
  btnChoose: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    backgroundColor:null
  },
  txtChooseBtn: {
    fontSize: 16,
    padding: 16,
    color: color.colorPrimary
  }
});

export default Auth;
