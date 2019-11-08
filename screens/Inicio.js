import React from "react"
import { View, StyleSheet, Image } from "react-native"
import { Button } from "react-native-elements"
import { Actions } from "react-native-router-flux"

export default class extends React.Component{

    render(){
        return(
            <View style={{flex: 1, alignItems: "center"}}>

                <Image 
                source={require("../assets/logo.png")}
                style={styles.img} 
                resizeMode="contain"/>

                <Button 
                title="Cadastro"
                type="outline"
                titleStyle={{color: "green"}}
                buttonStyle={{borderColor: "green"}}
                raised={true}
                containerStyle={styles.botao}
                onPress={() => Actions.cadastro()}
                />

                <Button 
                title="Esqueci a senha"
                type="outline"
                titleStyle={{color: "green"}}
                buttonStyle={{borderColor: "green"}}
                raised={true}
                containerStyle={styles.botao}
                onPress={() => null}
                />

                <Button 
                title="Suporte"
                type="outline"
                titleStyle={{color: "green"}}
                buttonStyle={{borderColor: "green"}}
                raised={true}
                containerStyle={styles.botao}
                onPress={() => null}
                />

            </View>
        )
    }
}



const styles = StyleSheet.create({
    botao: {
        width: "50%",
        backgroundColor: "green",
        marginTop: 10
    },
    img: {
        width: "100%",
        height: "15%"
    }
})