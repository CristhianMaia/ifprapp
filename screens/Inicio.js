import React from "react"
import { View, Alert } from "react-native"
import { Overlay, Input } from "react-native-elements"
import { Actions } from "react-native-router-flux"
import Styles from "../components/Styles"
import Button from "../components/Button"


export default class extends React.Component{
    state = {
        overlay: false
    }

    email = ""


    checkEmail = (email) => {
        if (email == ""){
            Alert.alert("Erro", "Preencha todos os campos disponíveis.")
        }
        else{
            Alert.alert("Sucesso", "Um link de verificação foi enviado ao seu email.")
            this.setState({overlay: false})
        }
    }


    render(){
        return(
            <View style={Styles.container}>

                <Overlay
                isVisible={this.state.overlay}
                overlayStyle={Styles.overlay}
                onBackdropPress={() => this.setState({overlay: false})}>

                    <Input 
                    label="Digite seu email"
                    inputContainerStyle={Styles.input}
                    labelStyle={{color: "green"}}
                    onChangeText={(txt) => this.email = txt}
                    placeholder="email@exemplo.com"/>

                    <Button 
                    title="Confirmar"
                    onPress={() => this.checkEmail(this.email)}
                    name="check"
                    type="antdesign"

                    />
                
                </Overlay>

                <View style={{paddingVertical: 50}} />

                <Button 
                title="Cadastro"
                onPress={() => Actions.validacao()}
                name="user"
                type="antdesign"
                />

                <Button 
                title="Esqueci a senha"
                onPress={() => this.setState({overlay: true})}
                name="lock"
                type="antdesign"
                />

                <Button 
                title="Suporte"
                onPress={() => null}
                name="tool"
                type="antdesign"
                />

            </View>
        )
    }
}