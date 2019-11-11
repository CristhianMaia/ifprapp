import React from "react"
import { View, Alert } from "react-native"
import { Input, Icon } from "react-native-elements"
import { Actions } from "react-native-router-flux"
import Styles from "../components/Styles"
import Button from "../components/Button"


export default class extends React.Component{

    resp = ""
    cpf = ""
    ra = ""
    dtnasc = ""


    checkEmpty = () => {
        if (this.resp && this.cpf && this.ra && this.dtnasc){
            Actions.cadastro()
        }
        else{
            Alert.alert("Erro", "Preencha todos os campos.")
        }
    }


    render(){
        return(
            <View style={Styles.container}>

                <Input 
                label="Nome do Responsável"
                inputContainerStyle={Styles.input}
                labelStyle={{color: "green"}}
                maxLength={60}
                onChangeText={(txt) => this.resp = txt}
                />

                <Input 
                label="CPF"
                inputContainerStyle={Styles.input}
                labelStyle={{color: "green"}}
                maxLength={11}
                onChangeText={(txt) => this.cpf = txt}
                />

                <Input 
                label="RA (Registro Acadêmico)"
                inputContainerStyle={Styles.input}
                labelStyle={{color: "green"}}
                onChangeText={(txt) => this.ra = txt}
                maxLength={15}
                rightIcon={
                    <Icon 
                    name="questioncircleo"
                    type="antdesign"
                    color="green"/>
                }
                />

                <Input 
                label="Data de Nascimento"
                inputContainerStyle={Styles.input}
                labelStyle={{color: "green"}}
                onChangeText={(txt) => this.dtnasc = txt}
                maxLength={10}
                placeholder="Ex: 15/08/1998"
                />

                <Button 
                title={"Próximo"}
                name="arrowright"
                type="antdesign"
                onPress={() => this.checkEmpty()}
                />

            </View>
        )
    }
}