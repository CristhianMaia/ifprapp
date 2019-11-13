import React from "react"
import { View, ToastAndroid, Alert, ScrollView, Text } from "react-native"
import { Input, Overlay, CheckBox } from "react-native-elements"
import { Actions } from "react-native-router-flux"
import Styles from "../components/Styles"
import Button from "../components/Button"


export default class Cadastro extends React.Component{

    state = {
        overlay: false,
        check: false
    }

    email = ""
    user = ""
    senha = ""
    senhaConf = ""

    cadastrar = () => {

        if (this.state.check){
            ToastAndroid.show("Cadastrado com sucesso", ToastAndroid.LONG)
            Actions.popTo("inicio")
        }
        else{
            Alert.alert("Erro", "Aceite os termos para realizar o cadastro.")
        }

    }

    checkEmpty = () => {
        if (this.email && this.user && this.senha && this.senhaConf){
            this.setState({overlay: true})
        }
        else{
            Alert.alert("Erro", "Preencha todos os campos disponíveis.")
        }
    }

    changeCheck = () => {
        if (this.state.check){
            this.setState({check: false})
        }
        else {
            this.setState({check: true})
        }
    }

    render(){
        return(
            <View style={Styles.container}>


                <Overlay 
                    overlayStyle={Styles.overlay}
                    isVisible={this.state.overlay}
                    onBackdropPress={() => this.setState({overlay: false})}
                >

                    <ScrollView>

                        <View style={[Styles.container, {paddingtop: 10}]}>

                            <Text style={{fontSize: 20, fontWeight: "bold"}}>{"Termos\n"}</Text>

                            <Text>
                            Podemos modificar estes termos ou quaisquer termos adicionais que sejam aplicáveis a um Serviço para, por exemplo, refletir alterações da lei ou mudanças em nossos Serviços. Você deve consultar os termos regularmente. Postaremos avisos sobre modificações nesses termos nesta página. Publicaremos um aviso de alteração sobre os termos adicionais dentro do Serviço aplicável. As alterações não serão aplicadas retroativamente e entrarão em vigor pelo menos quatorze dias após sua publicação. Entretanto, alterações a respeito de novas funcionalidades de um Serviço ou alterações feitas por razões legais entrarão em vigor imediatamente. Se você não concordar com os termos alterados de um Serviço, deve descontinuar o uso desse Serviço.

Em caso de conflito entre estes termos e os termos adicionais, os termos adicionais prevalecerão com relação a esse conflito.

Estes termos regem a relação entre o Google e você. Eles não criam quaisquer direitos para terceiros.

Caso você não cumpra estes termos e nós não tomemos providências imediatas, isso não significa que estamos renunciando a quaisquer direitos que possamos ter (como tomar providências futuras).

Caso uma condição específica destes termos não seja executável, isso não prejudicará quaisquer outros termos.

Os tribunais de alguns países não aplicarão a lei da Califórnia a alguns tipos de disputas. Se você reside em um desses países, então, quando a legislação da Califórnia não puder ser aplicada, a legislação de seu país será aplicada às disputas relacionadas com estes termos. Nos outros casos, você concorda com a aplicação das leis da Califórnia, EUA, excluindo as normas da Califórnia sobre conflitos de leis, a quaisquer disputas decorrentes de ou relacionadas com estes termos ou Serviços. Da mesma forma, caso as leis em seu país não permitam que você concorde com a jurisdição e foro dos tribunais de Santa Clara, Califórnia, EUA, então jurisdição e foro locais serão aplicados às disputas relacionadas com estes termos. Nos outros casos todas as reclamações decorrentes de ou relacionadas com esses termos ou Serviços serão litigadas exclusivamente em tribunais estaduais ou federais da Comarca de Santa Clara, Califórnia, EUA e você e o Google autorizam a jurisdição pessoal nesses tribunais.

Para obter informações sobre como entrar em contato com o Google, por favor visite nossa página de contato.
                            </Text>

                            <CheckBox 
                                title={"Aceito"}
                                containerStyle={{backgroundColor: "transparent", borderWidth: 0}}
                                checked={this.state.check}
                                checkedColor={"green"}
                                onPress={() => this.changeCheck()}
                            />

                            <Button 
                                title="Finalizar"
                                name="check"
                                type="antdesign"
                                style={Styles.botao}
                                onPress={() => this.cadastrar()}
                            />
                            
                        </View>

                    </ScrollView>

                </Overlay>


                <Input 
                    label="Email"
                    inputContainerStyle={Styles.input}
                    labelStyle={{color: "green"}}
                    maxLength={30}
                    onChangeText={(txt) => this.email = txt}
                    placeholder="email@exemplo.com"
                />

                <Input 
                    label="Usuário"
                    inputContainerStyle={Styles.input}
                    maxLength={15}
                    onChangeText={(txt) => this.user = txt}
                    labelStyle={{color: "green"}}
                />
                
                <Input 
                    label="Senha"
                    inputContainerStyle={Styles.input}
                    labelStyle={{color: "green"}}
                    secureTextEntry
                    onChangeText={(txt) => this.senha = txt}
                />

                <Input 
                    label="Confirme a Senha"
                    inputContainerStyle={Styles.input}
                    labelStyle={{color: "green"}}
                    secureTextEntry
                    onChangeText={(txt) => this.senhaConf = txt}
                />

                <Button 
                    title="Próximo"
                    name="arrowright"
                    type="antdesign"
                    style={Styles.botao}
                    onPress={() => this.checkEmpty()}
                />
                
            </View>
        )
    }
}