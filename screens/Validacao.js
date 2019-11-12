import React from "react"
import { View, Alert, Text } from "react-native"
import { Input, Icon } from "react-native-elements"
import { MaskService } from 'react-native-masked-text'
import { Actions } from "react-native-router-flux"
import Styles from "../components/Styles"
import Button from "../components/Button"


export default class Validacao extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cpf: "",
            dtnasc: "",
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
    ra = ""


    checkEmpty = () => {
        if (this.resp && this.state.cpf && this.ra && this.state.dtnasc){
            Actions.cadastro()
        }
        else{
            Alert.alert("Erro", "Preencha todos os campos.")
        }
    }

    handleCpf = (value) => {
        var cpf = MaskService.toMask('cpf', value, {})
        this.setState({cpf: cpf})

    }

    handleDate = (value) => {
        var data = MaskService.toMask('datetime', value, {
            format: 'DD/MM/YYYY'
        })
        this.setState({data: data})
    }
    
    render(){
        return(
            <View style={Styles.container}>
                <Text>{this.state.data}</Text>
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
                    onChangeText={(value) => this.handleCpf(value)}
                    value={this.state.cpf}
                    maxLength={14}
                    placeholder="000.000.000-00"
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
                    onChangeText={(value) => this.handleDate(value)}
                    value={this.state.data}
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