import React from "react"
import { View, ToastAndroid, Alert } from "react-native"
import { Input } from "react-native-elements"
import { Actions } from "react-native-router-flux"
import Styles from "../components/Styles"
import Button from "../components/Button"


export default class extends React.Component{


    email = ""
    user = ""
    senha = ""
    senhaConf = ""

    cadastrar = () => {
        if (this.email && this.user && this.senha && this.senhaConf){
            ToastAndroid.show("Cadastrado com sucesso", ToastAndroid.LONG)
            Actions.popTo("inicio")
        }
        else{
            Alert.alert("Erro", "Preencha todos os campos disponíveis.")
        }
    }

    render(){
        return(
            <View style={Styles.container}>

                <Input 
                label="Email"
                inputContainerStyle={Styles.input}
                labelStyle={{color: "green"}}
                maxLength={30}
                onChangeText={(txt) => this.email = txt}
                placeholder="email@exemplo.com"
                />

                <Input 
                label="Usuário"
                inputContainerStyle={Styles.input}
                maxLength={15}
                onChangeText={(txt) => this.user = txt}
                labelStyle={{color: "green"}}
                />
                
                <Input 
                label="Senha"
                inputContainerStyle={Styles.input}
                labelStyle={{color: "green"}}
                secureTextEntry
                onChangeText={(txt) => this.senha = txt}
                />

                <Input 
                label="Confirme a Senha"
                inputContainerStyle={Styles.input}
                labelStyle={{color: "green"}}
                secureTextEntry
                onChangeText={(txt) => this.senhaConf = txt}
                />

                <Button 
                title="Finalizar"
                name="check"
                type="antdesign"
                onPress={() => this.cadastrar()}/>
                
            </View>
        )
    }
}