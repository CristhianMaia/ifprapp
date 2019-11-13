import React from "react"
import { View, ActivityIndicator, Alert } from "react-native"
import { Input, Overlay } from "react-native-elements"
import { Actions } from "react-native-router-flux"
import RNSmtpMailer from "react-native-smtp-mailer"
import Button from "../components/Button"
import Styles from "../components/Styles"


export default class Suporte extends React.Component{

    state = {
        overlay: false
    }

    titulo = ""
    desc = ""

    enviarTicket = () => {

        this.setState({overlay: true})

        RNSmtpMailer.sendMail({
            mailhost: "smtp.gmail.com",
            port: "465",
            ssl: true, 
            username: "ifprpvaiapp",
            password: "gtasan123",
            from: "ifprpvaiapp@gmail.com",
            recipients: "rafael.rodrigues@ifpr.edu.br",
            subject: "Ticket de Suporte App Ifpr",
            htmlBody: "<h1>"+this.titulo+"</h1><p>"+this.desc+"</p>",
            attachmentPaths: [],
            attachmentNames: [],
            attachmentTypes: []
        }).then(result => {
            this.setState({overlay: false})
            if (result.status != "SUCCESS"){
                Alert.alert("Erro", "Ocorreu um erro ao enviar seu ticket.")
            }
            else{
                Alert.alert("Enviado com sucesso", "Seu ticket foi enviado com sucesso.")
                Actions.popTo("inicio")
            }
            
        })

    }


    render(){
        return(
            <View style={Styles.container}>

                <Overlay
                isVisible={this.state.overlay}
                overlayStyle={{backgroundColor: "transparent", elevation: 0, justifyContent: "center"}}
                >
                    <ActivityIndicator
                    size={80}
                    color="green" />
                </Overlay>
                
                <Input 
                    label="Título"
                    inputContainerStyle={Styles.input}
                    labelStyle={{color: "green"}}
                    maxLength={30}
                    onChangeText={(txt) => this.titulo = txt}
                    placeholder="Digite o título do problema"
                />

                <Input 
                    label="Descrição"
                    inputContainerStyle={Styles.input}
                    labelStyle={{color: "green"}}
                    onChangeText={(txt) => this.desc = txt}
                    maxLength={200}
                    multiline
                    placeholder="Descreva seu problema"
                />


                <Button 
                    title={"Enviar"}
                    name={"send"}
                    type={"feather"}
                    style={Styles.botao}
                    onPress={() => this.enviarTicket()}
                />

            </View>
        )
    }
}