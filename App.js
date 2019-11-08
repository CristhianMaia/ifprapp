import React from "react"
import { Router, Stack, Scene } from "react-native-router-flux"
import Inicio from "./screens/Inicio"
import Cadastro from "./screens/Cadastro"

export default class App extends React.Component{
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="inicio" component={Inicio} initial hideNavBar/>
                    <Scene key="cadastro" component={Cadastro} />
                    <Scene key="validacao" component={Validacao} />
                </Stack>
            </Router>
        )

    }
}
