import React from "react"
import { View, Text } from "react-native"
import { Button } from "react-native-elements"
import { Actions } from "react-native-router-flux"

export default class extends React.Component{

    render(){
        return(
            <View style={{flex: 1}}>

                <Button 
                title="teste"
                onPress={() => Actions.cadastro()}
                />
            </View>
        )
    }
}