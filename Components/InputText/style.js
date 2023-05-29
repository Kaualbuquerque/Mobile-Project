import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        margin: 5,
    },

    textContainer: {
        backgroundColor: '#EEF3FF',

        fontSize: 16,

        display: "flex",
        justifyContent: "flex-start",
        alignContent: "flex-start",

        padding: 10,
        width: 300,
        borderWidth: 1,
        borderRadius: 10,

        shadowColor: '#989BA3',
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
    },

    label: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 2
    }

})

export default styles