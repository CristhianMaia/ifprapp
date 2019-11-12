import RestClient from "react-native-rest-client"

export default class Rest extends RestClient{
    constructor(){
        super("localhost:3000")
    }

    sendData = (nome, cpf, dtnasc, nomeResp) => {
        return this.POST("/validaUsuario")
    }

    testeGet = async() => {
        return this.GET("/url").then(resp => resp)
    }

}

