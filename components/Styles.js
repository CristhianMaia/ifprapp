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
        height: "auto",
        elevation: 8
    },
    input: {
        borderColor: 'green',
        marginBottom: res.height *0.03
    },
    icon: {
        paddingRight: res.width * 0.05,
        paddingTop: res.height *0.005
    },
    container: {
        flex: 1, 
        backgroundColor: "#f7f7f7", 
        alignItems: "center",
        paddingTop: res.height*0.06
    }
})