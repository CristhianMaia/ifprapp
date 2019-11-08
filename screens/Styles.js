import { StyleSheet, Dimensions } from "react-native"

const res = Dimensions.get("window")

export default Styles = StyleSheet.create({
    botao: {
        width: "60%",
        backgroundColor: "green",
        marginTop: res.height * 0.03
    },
    img: {
        width: "100%",
        height: res.height * 0.15,
        marginTop: res.height * 0.05
    },
    overlay: {
        alignItems: "center",
        justifyContent: "center",
        height: res.height * 0.3
    },
    input: {
        borderColor: 'green'
    },
    icon: {
        paddingRight: res.width * 0.05
    }
})