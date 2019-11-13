import React from "react"
import { Button as DefaultButton, Icon }from "react-native-elements"
import Styles from "./Styles"

const Button = (props) => {
    return(
        <DefaultButton 
        title={props.title}
        type="outline"
        titleStyle={Styles.title}
        buttonStyle={{borderColor: "green"}}
        raised
        containerStyle={props.style}
        onPress={() => setTimeout(props.onPress, 25)}
        icon={
            <Icon 
            name={props.name}
            type={props.type}
            color="green"
            iconStyle={Styles.icon}/>
        }
        />
    )
}
export default Button
