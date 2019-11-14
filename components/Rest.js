import RestClient from "react-native-rest-client"

export default class Rest extends RestClient{
    constructor(){
        super("http://172.16.101.25:3000")
    }

    postValidar = (nome, cpf, dtnasc, nomeResp) => {
        return this.POST("/validaUsuario", {nome, cpf, dtnasc, nomeResp})
    }
    postValidarEmail = (email) => {
        return this.POST("/validaUsuario", {email})
    }
    postCadastro = (email, usuario, senha) => {
        return this.POST("/validaUsuario", {email, usuario, senha})
    }

    getData = async() => {
        return this.GET("/url")
    }

}

