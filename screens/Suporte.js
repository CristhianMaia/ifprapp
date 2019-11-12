import React from "react"
import { View } from "react-native"
import { Input } from "react-native-elements"
import { Actions } from "react-native-router-flux"
import Button from "../components/Button"
import Styles from "../components/Styles"


export default class Suporte extends React.Component{


    titulo = ""
    desc = ""

    enviarTicket = () => {
        Actions.popTo("inicio")
    }


    render(){
        return(
            <View style={Styles.container}>
                
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
                    onPress={() => enviarTicket()}
                />

            </View>
        )
    }
}