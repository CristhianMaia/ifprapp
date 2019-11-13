import React from "react"
import { View, Alert } from "react-native"
import { Overlay, Input } from "react-native-elements"
import { Actions } from "react-native-router-flux"
import Styles from "../components/Styles"
import Button from "../components/Button"


export default class Inicio extends React.Component{
    state = {
        overlay: false
    }

    email = ""


    checkEmail = () => {
        if (this.email == ""){
            Alert.alert("Erro", "Preencha todos os campos disponíveis.")
        }
        else{
            Alert.alert("Sucesso", "Um link de verificação foi enviado ao seu email.\nApós clicar no link realize o cadastro novamente pelo app.")
            this.setState({overlay: false})
        }
    }


    render(){
        return(
            <View style={Styles.container}>

                <Overlay
                    isVisible={this.state.overlay}
                    overlayStyle={Styles.overlay}
                    onBackdropPress={() => this.setState({overlay: false})}
                >

                    <Input 
                        label="Digite seu email"
                        inputContainerStyle={Styles.input}
                        labelStyle={{color: "green"}}
                        onChangeText={(txt) => this.email = txt}
                        maxLength={30}
                        placeholder="email@exemplo.com"
                    />

                    <Button 
                        title="Confirmar"
                        name="check"
                        type="antdesign"
                        style={Styles.botaowidth}
                        onPress={() => this.checkEmail()}

                    />
                
                </Overlay>

                <View style={{paddingVertical: 50}} />

                <Button 
                    title="Cadastro"
                    name="user"
                    type="antdesign"
                    style={Styles.botao}
                    onPress={() => Actions.validacao()}
                    />

                <Button 
                    title="Esqueci a senha"
                    name="lock"
                    type="antdesign"
                    style={Styles.botao}
                    onPress={() => this.setState({overlay: true})}
                />

                <Button 
                    title="Suporte"
                    name="tool"
                    type="antdesign"
                    style={Styles.botao}
                    onPress={() => Actions.suporte()}
                />

            </View>
        )
    }
}