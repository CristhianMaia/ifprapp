import React from "react"
import { View, Alert, Text} from "react-native"
import { Input, Icon } from "react-native-elements"
import { MaskService } from 'react-native-masked-text'
import { Actions } from "react-native-router-flux"
import Rest from "../components/Rest"
import Tooltip from 'react-native-walkthrough-tooltip'
import Styles from "../components/Styles"
import Button from "../components/Button"

const Api = new Rest()

export default class Validacao extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            resp: "",
            cpf: "",
            ra: "",
            dtnasc: "",

            cpfvalidate: "",
            //Dados ficticios de como os dados chegarão na state após consulta ao banco via api
            // responsaveis: [
            //     {
            //         "id": "1",
            //         "nome": "Fulano Responsavel 1"
            //     },
            //     {
            //         "id": "2",
            //         "nome": "Ciclano Responsavel 1"
            //     }
            // ],
            // registro: [
            //     {
            //         "id": "2019000112",
            //         "nome": "Cristhian da Silveira Maia"
            //     },
            //     {
            //         "id": "2019001919",
            //         "nome": "joao Gabriel"
            //     }
            // ]
        }
    }


    submitForm = () => {
        if (this.checkEmpty()){
            if (this.checkCpf()){
                if (this.checkDt()){
                    Api.postData(this.state.ra, this.state.cpf, this.state.dtnasc, this.state.resp)
                    .then(resp => console.warn(resp))

                }

            }

        }

    }


    //Mascara Campo CPF
    handleCpf = (value) => {
        var cpf = MaskService.toMask('cpf', value, {})
        this.setState({cpf: cpf})

        var validate = MaskService.isValid('cpf', cpf, {})
        this.setState({cpfvalidate: validate})
    }


    //Mascara Campo Data de Nascimento
    handleDtnasc = (value) => {
        var data = MaskService.toMask('datetime', value, {
            format: 'DD/MM/YYYY'
        })
        this.setState({dtnasc: data})
    }

    
    checkEmpty = () => {
        if (this.state.resp && this.state.cpf && this.state.ra && this.state.dtnasc) {
            return true
        }
        else {
            Alert.alert("Erro", "Preencha todos os campos.")
            return false
        }
    }


    checkCpf = () => {
        if (this.state.cpfvalidate){
            return true
        }
        else{
            Alert.alert("Erro", "O CPF informado não é Válido.")
            return false
        }
    }


    checkDt = () => {
        var datasplit = this.state.dtnasc.split('/')
        var dia = parseInt(datasplit[0])
        var mes = parseInt(datasplit[1])
        var ano = parseInt(datasplit[2])

        if (!(this.state.dtnasc.length < 10)){

            if (ano >= 1900 && ano <= 2019){
                
                if(mes >= 1 && mes <= 12){

                    if(dia >= 1 && dia <= 31){
                        return true
                    }else {
                        Alert.alert("Erro", "O dia de nascimento está incorreto.")
                        return false
                    }

                }else {
                    Alert.alert("Erro", "O mês de nascimento está incorreto.")
                    return false
                }

            }else {
                Alert.alert("Erro", "O ano de nascimento deve ser após 1900.")
                return false
            }

        }else {
            Alert.alert("Erro", "A data de nascimento está incompleta.\nFormato obrigatório para preenchimento: dd/mm/aaaa (Ex: 01/01/1801).")
            return false
        }
    }


    render(){
        return(
            <View style={Styles.container}>
                
                <Input 
                    label="RA (Registro Acadêmico)"
                    keyboardType="numeric"
                    inputContainerStyle={Styles.input}
                    labelStyle={{color: "green"}}
                    onChangeText={(value) => this.setState({ ra: value })}
                    maxLength={15}
                    rightIcon={
                        <Tooltip
                            isVisible={this.state.toolTipVisible}
                            contentStyle={{height: "auto"}}
                            content={
                                <Text>O RA (Numero de Matricula) pode ser encontrado no sistema academico 
                                    SIGAA (sigaa.ifpr.edu.br) ou na Secretária do seu campus.</Text>
                                }
                            placement="left"
                            onClose={() => this.setState({ toolTipVisible: false })}
                        >
                            <Icon
                                onPress={() => this.setState({ toolTipVisible: true })}
                                name="questioncircleo"
                                type="antdesign"
                                color="green"
                            />
                        </Tooltip>
                    }
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
                    rightIcon={
                        <Icon
                            name={ this.state.cpf!=="" ? (this.state.cpfvalidate ? "checkcircle" : "closecircleo") : null}
                            type="antdesign"
                            color={ this.state.cpf!=="" ? (this.state.cpfvalidate? "green" : "red") : null}
                        />
                    }
                    />

                <Input 
                    label="Data de Nascimento"
                    keyboardType="numeric"
                    inputContainerStyle={Styles.input}
                    labelStyle={{color: "green"}}
                    onChangeText={(value) => this.handleDtnasc(value)}
                    value={this.state.dtnasc}
                    maxLength={10}
                    placeholder="Ex: dd/mm/aaaa"
                />

                <Input 
                    label="Nome do Responsável"
                    inputContainerStyle={Styles.input}
                    labelStyle={{color: "green"}}
                    maxLength={40}
                    onChangeText={(value) => this.setState({ resp: value })}
                />

                <Button 
                    title={"Próximo"}
                    name="arrowright"
                    type="antdesign"
                    style={Styles.botao}
                    onPress={() => this.submitForm()}
                />

            </View>
        )
    }
}