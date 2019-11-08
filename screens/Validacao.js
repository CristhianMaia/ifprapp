import React from "react"
import { View, StyleSheet, Image, Alert, Dimensions } from "react-native"
import Styles from "./Styles"
import { Button, Overlay, Input } from "react-native-elements"
import { Actions } from "react-native-router-flux"



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