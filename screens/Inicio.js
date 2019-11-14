import React from "react"
import { View, Alert, ActivityIndicator } from "react-native"
import { Overlay, Input } from "react-native-elements"
import { Actions } from "react-native-router-flux"
import Rest from "../components/Rest"
import RNSmtpMailer from "react-native-smtp-mailer"
import Styles from "../components/Styles"
import Button from "../components/Button"

const Api = new Rest()

export default class Inicio extends React.Component{
    state = {
        overlay: false,
        loading: false
    }

    email = ""


    checkEmail = () => {
        this.setState({loading: true})

        if (this.email == ""){
            this.setState({loading: false})
            Alert.alert("Erro", "Preencha todos os campos disponíveis.")
        }
        else{
            Api.postValidar(this.email).then(result => {
                if (result){

                    RNSmtpMailer.sendMail({
                        mailhost: "smtp.gmail.com",
                        port: "465",
                        ssl: true, 
                        username: "ifprpvaiapp",
                        password: "gtasan123",
                        from: "ifprpvaiapp@gmail.com",
                        recipients: this.email,
                        subject: "Redefinição de senha acesso à internet IFPR",
                        htmlBody: "<p>Foi solicitado a redefinição da senha da conta deste email no App Internet IFPR. Clique neste link para redefinir sua senha.\nSe você não realizou esta ação, ignore este email.</p>",
                        attachmentPaths: [],
                        attachmentNames: [],
                        attachmentTypes: []
        
                    }).then(result => {
                        this.setState({loading: false})
        
                        if (result.status != "SUCCESS"){
                            Alert.alert("Erro", "Ocorreu um erro ao enviar o email de redefinição.")
                        }
                        else{
                            this.setState({overlay: false})
                            Alert.alert("Sucesso", "Um link de verificação foi enviado ao email "+this.email+".\nApós clicar no link realize o cadastro novamente pelo app.")
                            this.email = ""
                        }
                        
                    }).catch(err => {
                        this.setState({loading: false})
                        console.warn(err)
                        Alert.alert("Erro", "O email digitado é inálido.")
                    })
                }
                })
            }

            
    }


    render(){
        return(
            <View style={Styles.container}>

                <Overlay
                isVisible={this.state.loading}
                overlayStyle={{backgroundColor: "transparent", elevation: 0, justifyContent: "center"}}
                >
                    <ActivityIndicator
                    size={80}
                    color="green" />
                </Overlay>

                <Overlay
                    isVisible={this.state.overlay}
                    overlayStyle={Styles.overlay}
                    onBackdropPress={() => {
                        this.setState({overlay: false})
                        this.email = ""
                    }}
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