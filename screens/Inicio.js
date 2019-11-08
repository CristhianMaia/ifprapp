import React from "react"
import { View, Image, Alert } from "react-native"
import Styles from "./Styles"
import { Button, Overlay, Input, Icon } from "react-native-elements"
import { Actions } from "react-native-router-flux"


export default class extends React.Component{
    state = {
        overlay: false
    }

    render(){
        return(
            <View style={{flex: 1, alignItems: "center"}}>
                <Overlay
                isVisible={this.state.overlay}
                overlayStyle={Styles.overlay}
                onBackdropPress={() => this.setState({overlay: false})}>
                    <Input 
                    inputContainerStyle={Styles.input}
                    labelStyle={{color: "green"}}
                    label="Digite seu email"
                    placeholder="email@exemplo.com"/>

                    <Button 
                    title="Confirmar"
                    type="outline"
                    titleStyle={{color: "green"}}
                    buttonStyle={{borderColor: "green"}}
                    raised
                    containerStyle={Styles.botao}
                    onPress={() => {
                        Alert.alert("Sucesso", "Um link de verificação foi enviado ao seu email.")
                        this.setState({overlay: false})
                    }}
                    />
                
                </Overlay>

                <View style={{paddingVertical: 50}} />

                <Button 
                title="Cadastro"
                type="outline"
                titleStyle={{color: "green"}}
                buttonStyle={{borderColor: "green"}}
                raised
                containerStyle={Styles.botao}
                onPress={() => Actions.validacao()}
                icon={
                    <Icon 
                    name="user"
                    type="antdesign"
                    color="green"
                    iconStyle={Styles.icon}/>
                }
                />

                <Button 
                title="Esqueci a senha"
                type="outline"
                titleStyle={{color: "green"}}
                buttonStyle={{borderColor: "green"}}
                raised
                containerStyle={Styles.botao}
                onPress={() => this.setState({overlay: true})}
                icon={
                    <Icon 
                    name="lock"
                    type="antdesign"
                    color="green"
                    iconStyle={Styles.icon}/>
                }
                />

                <Button 
                title="Suporte"
                type="outline"
                titleStyle={{color: "green"}}
                buttonStyle={{borderColor: "green"}}
                raised
                containerStyle={Styles.botao}
                onPress={() => null}
                icon={
                    <Icon 
                    name="tool"
                    type="antdesign"
                    color="green"
                    iconStyle={Styles.icon}/>
                }
                />

            </View>
        )
    }
}