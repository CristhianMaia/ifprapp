import React from "react"
import { View } from "react-native"
import { Input } from "react-native-elements"
import Styles from "../components/Styles"
import Button from "../components/Button"
import { Actions } from "react-native-router-flux"


export default class extends React.Component{

    render(){
        return(
            <View style={Styles.container}>

                <Input 
                label="Email"
                inputContainerStyle={Styles.input}
                labelStyle={{color: "green"}}
                placeholder="email@exemplo.com"/>

                <Input 
                label="Usuário"
                inputContainerStyle={Styles.input}
                labelStyle={{color: "green"}}/>
                
                <Input 
                label="Senha"
                inputContainerStyle={Styles.input}
                labelStyle={{color: "green"}}
                secureTextEntry
                />

                <Input 
                label="Confirme a Senha"
                inputContainerStyle={Styles.input}
                labelStyle={{color: "green"}}
                secureTextEntry
                />

                <Button 
                title="Finalizar"
                name="check"
                type="antdesign"
                onPress={() => Actions.popTo("inicio")}/>
                
            </View>
        )
    }
}