import React from "react"
import { View, Button, Text } from "react-native"
import { Actions } from "react-native-router-flux"

export default class extends React.Component{

    render(){
        return(
            <View style={{backgroundColor: "lightgray", flex: 1}}>
                <Text>
                    Teste navegação
                </Text>


                <Button 
                title="teste"
                onPress={() => Actions.cadastro()}
                />
            </View>
        )
    }
}