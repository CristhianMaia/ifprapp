import React from "react"
import { View, Alert } from "react-native"
import { Input, Icon } from "react-native-elements"
import { Actions } from "react-native-router-flux"
import Styles from "../components/Styles"
import Button from "../components/Button"


export default class Validacao extends React.Component{
    constructor(props){
        super(props)
        state = {
            //Dados ficticios de como os dados chegarão na state após consulta ao banco via api
            responsaveis: [
                {
                    "id": "1",
                    "nome": "Fulano Responsavel 1"
                },
                {
                    "id": "2",
                    "nome": "Ciclano Responsavel 1"
                }
            ],
            ra: [
                {
                    "id": "2019000112",
                    "nome": "Cristhian da Silveira Maia"
                },
                {
                    "id": "2019001919",
                    "nome": "joao Gabriel"
                }
            ]
        }
    }
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
                    keyboardType="numeric"
                    inputContainerStyle={Styles.input}
                    labelStyle={{color: "green"}}
                    maxLength={11}
                    onChangeText={(txt) => this.cpf = txt}
                    />

                <Input 
                    label="RA (Registro Acadêmico)"
                    keyboardType="numeric"
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
                    keyboardType="numeric"
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