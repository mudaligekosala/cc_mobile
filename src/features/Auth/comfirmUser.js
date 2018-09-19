import React, {PureComponent} from 'react';
import { StyleSheet,View, Text, Image, text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputView from '../../components/textInput';
import ButtonView from '../../components/button';


class ComfirmUser extends PureComponent {

    comfirmUser = () => {
        alert('comfirm')
    }

    updateComfirmCode = () => {

    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Icon name={"keyboard-backspace"} size={30} color={'black'} onPress={() => this.props.navigation.goBack()}/>
                </View>
                <View style={styles.body}>
                    <InputView placeholder={'Comfirmation Code'} onChangeText={() => this.updateComfirmCode()}/>
            <ButtonView placeholder= {'Send'}  onPress={() => this.comfirmUser()} />
                
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:20
    },
    header:{
        width:'100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    body:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }

})
export default ComfirmUser;
