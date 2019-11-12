import RestClient from "react-native-rest-client"

export default class Rest extends RestClient{
    constructor(){
        super("http://172.16.101.25:3000")
    }

    postData = (nome, cpf, dtnasc, nomeResp) => {
        return this.POST("/validaUsuario", {nome, cpf, dtnasc, nomeResp})
    }

    getData = async() => {
        return this.GET("/url")
    }

}

