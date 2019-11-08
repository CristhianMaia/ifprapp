import React from "react"
import { Router, Stack, Scene } from "react-native-router-flux"
import Inicio from "./screens/Inicio"
import Cadastro from "./screens/Cadastro"
import Validacao from "./screens/Validacao"

export default class App extends React.Component{
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="inicio" 
                    component={Inicio} 
                    initial 
                    hideNavBar
                    navigationBarTitleImage={require("./assets/logo.png")} 
                    navigationBarTitleImageStyle={{marginLeft: 50 ,resizeMode: "contain", width: "80%", height: "90%"}}
                    />

                    <Scene key="validacao" component={Validacao} />
                    <Scene key="cadastro" component={Cadastro} />
                </Stack>
            </Router>
        )

    }
}
