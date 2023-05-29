import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#769BEC',

        alignSelf: "flex-end",

        width: 120,
        marginTop: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,

        shadowColor: '#496091',
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowOffset: { height: 2, width: 2 }
    },

    button: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700'
    }
})

export default styles