import React from "react"
import { Router, Stack, Scene } from "react-native-router-flux"
import Inicio from "./screens/Inicio"
import Validacao from "./screens/Validacao"
import Cadastro from "./screens/Cadastro"
import Suporte from './screens/Suporte'


export default class App extends React.Component{
    render(){
        return(
            <Router 
                navigationBarTitleImage={require("./assets/logo.png")} 
                navigationBarTitleImageStyle={{ alignSelf: "center", resizeMode: "contain", width: "80%", height: "90%" }}
            >
                <Stack key="root" >
                    <Scene 
                        key="inicio" 
                        component={Inicio} 
                        initial 
                        navigationBarTitleImage={require("./assets/logo.png")}
                        navigationBarTitleImageStyle={{ flex:1, alignSelf: "center", resizeMode: "contain", width: "80%", height: "90%" }}
                    />

                    <Scene key="validacao" component={Validacao} />
                    <Scene key="cadastro" component={Cadastro} />
                    <Scene key="suporte" component={Suporte} />
                </Stack>
            </Router>
        )

    }
}
