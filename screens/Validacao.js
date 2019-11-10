import React from "react"
import { View } from "react-native"
import { Input } from "react-native-elements"
import Styles from "../components/Styles"



export default class extends React.Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: "#f7f7f7"}}>
                <Input 
                inputContainerStyle={Styles.input}
                labelStyle={{color: "green"}}
                label="Digite seu email"
                placeholder="email@exemplo.com"/>

            </View>
        )
    }
}